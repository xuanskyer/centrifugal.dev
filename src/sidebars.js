module.exports = {
  Introduction: [
    "getting-started/introduction",
    "getting-started/community",
    "getting-started/installation",
    "getting-started/quickstart",
    "getting-started/highlights",
    "getting-started/integration",
    "getting-started/design",
    "getting-started/ecosystem",
    "getting-started/comparisons",
    "getting-started/migration_v5",
  ],
  Tutorial: [
    "tutorial/intro",
    "tutorial/layout",
    "tutorial/backend",
    "tutorial/reverse_proxy",
    "tutorial/frontend",
    "tutorial/centrifugo",
    "tutorial/recovery",
    "tutorial/outbox_cdc",
    "tutorial/scale",
    "tutorial/outro",
    "tutorial/improvements",
    "tutorial/tips_and_tricks",
  ],
  Guides: [
    "server/configuration",
    "server/server_api",
    "server/authentication",
    "server/channels",
    "server/channel_permissions",
    "server/channel_token_auth",
    "server/server_subs",
    "server/engines",
    "server/consumers",
    "server/history_and_recovery",
    "server/cache_recovery",
    "server/delta_compression",
    "server/presence",
    "server/proxy",
    "server/proxy_streams",
    "server/admin_web",
    "server/observability",
    "server/infra_tuning",
    "server/load_balancing",
    "server/tls",
    "server/codes",
    "server/console_commands",
  ],
  Transports: [
    "transports/overview",
    {
      type: 'category',
      label: 'Bidirectional',
      collapsed: false,
      items: [
        "transports/client_api",
        "transports/client_sdk",
        "transports/websocket",
        "transports/http_stream",
        "transports/sse",
        "transports/sockjs",
        "transports/webtransport",
        "transports/client_protocol"
      ],
    },
    {
      type: 'category',
      label: 'Unidirectional',
      collapsed: false,
      items: [
        "transports/uni_client_protocol",
        "transports/uni_websocket",
        "transports/uni_http_stream",
        "transports/uni_sse",
        "transports/uni_grpc",
      ],
    },
  ],
  Pro: [
    "pro/overview",
    "pro/install_and_run",
    {
      type: 'category',
      label: 'PRO version features',
      collapsed: false,
      items: [
        "pro/tracing",
        "pro/analytics",
        "pro/rate_limiting",
        // "pro/distributed_rate_limit",
        "pro/push_notifications",
        "pro/admin_idp_auth",
        "pro/user_status",
        "pro/connections",
        "pro/user_block",
        "pro/token_revocation",
        "pro/channel_state_events",
        "pro/channel_cache_empty",
        "pro/capabilities",
        "pro/channel_patterns",
        "pro/cel_expressions",
        "pro/delta_at_most_once",
        "pro/performance",
        "pro/engine_optimizations",
        "pro/client_message_batching",
        "pro/observability_enhancements",
        "pro/process_stats",
      ],
    },
  ]
};
