---
id: token_revocation
title: Token revocation API
---

One more protective instrument in Centrifugo PRO is API to manage token revocations.

At the moment Centrifugo provides two ways to revoke tokens:

1. Revoke token by ID: based on [jti](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7) claim in the case of JWT.
1. Revoke all user's tokens issued before certain time: based on [iat](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6) in the case of JWT.

When token is revoked client with such token will be disconnected from Centrifugo shortly. And attempt to connect with a revoked token won't succeed.

## How it works

By default, information about token revocations shared throughout Centrifugo cluster and kept in a process memory. So token revocation information will be lost upon Centrifugo restart.

But it's possible to enable revocation information persistence – in this case token revocation information will survive Centrifugo restarts.

Centrifugo also automatically expires entries in database to keep working set reasonably small. Keeping pool of revoked tokens small allows avoiding expensive database lookups on every check – information is loaded periodically from the database and all checks performed over in-memory data structure – thus token revocation checks are cheap and have a small impact on overall system performance.

## Configure

Token revocation features (both revocation by token ID and user token invalidation by issue time) are enabled by default in Centrifugo PRO (as soon as JWT has `jti` and `iat` claims).

To keep revocation information persistently you need configuration like this:

```json
{
    ...
    "database": {
        "dsn": "postgresql://postgres:test@127.0.0.1:5432/postgres"
    },
    "token_revoke": {
        "persist": true
    },
    "user_token_invalidate": {
        "persist": true
    }
}
```

Centrifugo PRO supports only PostgreSQL as a storage backend.

## Revoke token API

Allows revoking individual tokens. For example, this may be useful when token leakage has been detected and you want to revoke access for a particular tokens. BTW Centrifugo PRO provides `user_connections` API which has an information about tokens for active users connections (if set in JWT). 

:::caution

This API assumes that JWTs you are using contain `"jti"` claim which is a unique token ID (according to [RFC](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7)).  

:::

Example:

```bash
curl --header "Content-Type: application/json" \
  --header "Authorization: apikey <API_KEY>" \
  --request POST \
  --data '{"method": "revoke_token", "params": {"uid": "xxx-xxx-xxx", "expire_at": 1635845122}}' \
  http://localhost:8000/api
```

#### Revoke token params

| Parameter name | Parameter type | Required | Description  |
| -------------- | -------------- | ------------ | ---- |
| uid       | string  | yes | Token unique ID (JTI claim in case of JWT)        |
| expire_at       | int  | no | Unix time in the future when revocation information should expire (Unix seconds). While optional **we recommend to use a reasonably small expiration time to keep working set of revocations reasonably small (since Centrifugo nodes load all entries from the database table to construct in-memory cache)**     |

#### Revoke token result

Empty object at the moment.

## Invalidate user tokens API

Allows revoking all tokens for a user which were issued before a certain time. For example, this may be useful after user changed a password in an application.

:::caution

This API assumes that JWTs you are using contain `"iat"` claim which is a time token was issued at (according to [RFC](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6)).  

:::

Example:

```bash
curl --header "Content-Type: application/json" \
  --header "Authorization: apikey <API_KEY>" \
  --request POST \
  --data '{"method": "invalidate_user_tokens", "params": {"user": "test", "issued_before": 1635845022, "expire_at": 1635845122}}' \
  http://localhost:8000/api
```

#### Invalidate user tokens params

| Parameter name | Parameter type | Required | Description  |
| -------------- | -------------- | ------------ | ---- |
| user       | string  | yes | User ID to invalidate tokens for       |
| issued_before       | int  | yes | All tokens issued at before this time will be considered revoked (in case of JWT this requires `iat` to be properly set in JWT)         |
| expire_at       | int  | no | Unix time in the future when revocation information should expire (Unix seconds). While optional **we recommend to use a reasonably small expiration time to keep working set of revocations reasonably small (since Centrifugo nodes load all entries from the database table to construct in-memory cache)**     |

#### Invalidate user tokens result

Empty object at the moment.