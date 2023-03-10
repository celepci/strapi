import favicon from "./extensions/favicon.png";
import en from "./extensions/translations/en.json";
import tr from "./extensions/translations/tr.json";

const config = {
  // translations: {
  //   en: {
  //     "app.components.LeftMenu.navbrand.title": "PX Admin",
  //     "app.components.LeftMenu.navbrand.workplace": "turkishtechnology.com",
  //   },
  //   tr: {
  //     "app.components.LeftMenu.navbrand.title": "PX Admin",
  //     "app.components.LeftMenu.navbrand.workplace": "turkishtechnology.com",
  //   },
  // },
  translations: {
    en: en,
    tr: tr,
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
    // 'sv',
    // "th",
    // "en",
    "tr",
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  // translations:{
  //   en: {
  //     'Auth.form.email.label': 'test',
  //     Users: 'Utilisateurs',
  //     City: 'CITY (FRENCH)',
  //     // Customize the label of the Content Manager table.
  //     Id: 'ID french',
  //   },
  // },
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
