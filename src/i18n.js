import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
      title: { aboutme: "About Me", bio: "Bio" },
    },
  },
  ch: {
    message: {
      hello: "世界你好",
      title: { aboutme: "關於我", bio: "簡歷" },
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ch",
  fallbackLocale: "en", // set fallback locale
  allowComposition: true, // you need to specify that!
  messages,
});

export default i18n;
