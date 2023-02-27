import favicon from "./extensions/favicon.png";

const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "PX Admin",
      "app.components.LeftMenu.navbrand.workplace": "turkishtechnology.com",
    },
    tr: {
      "app.components.LeftMenu.navbrand.title": "PX Admin",
      "app.components.LeftMenu.navbrand.workplace": "turkishtechnology.com",
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    'sv',
    "th",
    "en",
    "tr",
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
