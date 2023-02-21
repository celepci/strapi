module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  settings: {
    dashboard: {
      content: env('MY_CUSTOM_DASHBOARD', 'My Custom Dashboard'),
    },
  },
});
