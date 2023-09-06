import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
      title: { aboutme: "About Me", bio: "Bio" },
      about: {
        content:
          " （英文版尚無文案, 還請見諒）Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni autem culpa alias error similique, labore odio eos a atque exercitationem architecto, consectetur molestias aliquam dolor possimus reprehenderit.Officia, cupiditate perferendis? Voluptas necessitatibus alias eaque delectus saepe tempore sit eius, iusto labore maxime repellat architecto molestiae corrupti ab nisi similique autem dolor excepturi fuga odio quisquam! Neque necessitatibus numquam vero aperiam! Numquam impedit ea harum nihil. Maiores optio vitae corrupti maxime consequatur pariatur nobis similique, repellendus molestias veritatis suscipit, libero, nostrum corporis consectetur quasi sapiente aliquid asperiores sit dolorem enim. Eveniet. Odit at dolores facere, officia quia aspernatur commodi aliquid placeat amet blanditiis ad ut eum dolorem excepturi, ipsum molestiae fugit mollitia, temporibus aperiam eius? Cumque modi quod laboriosam sed officia.",
      },
    },
  },
  ch: {
    message: {
      hello: "世界你好",
      title: { aboutme: "關於我", bio: "簡歷" },
      about: {
        content:
          "2022開始擔任銀行金融業程式開發人員, 接手過前端專案開發(行內系統)與維護, 後端維護, 前端使用Vuejs與Vite進行從無到有的開發, 包含系統架構規劃與建置(AlmaLinux, Ubuntu), 配合三層式架構與Nginx代理進行開發, 使用Jenkins與Gitea進行CI/CD自動化部屬, 也包含SSL憑證與Security Header安全檢測, 後端維護公司產品(網路銀行, 行動銀行, 數位銀行), MID行動裝置驗證功能開發, 包含Redis, postgreSql使用經驗, 對程式有熱誠, 個人作品努力生產中...",
      },
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
