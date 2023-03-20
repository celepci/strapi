module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  menus: {
    config: {
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: "Example Field Label",
                name: "example_field",
                type: "text",
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
  settings: {
    dashboard: {
      content: env("MY_CUSTOM_DASHBOARD", "My Custom Dashboard"),
    },
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [],
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    }
  },
});
