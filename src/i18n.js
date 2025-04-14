import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
      title: { aboutme: "About Me", bio: "Bio" },
      about: {
        content:
          "Since 2022, I have been working as a programming developer in the banking industry.<br/> My responsibilities include: front-end project development (internal systems) and maintenance, as well as back-end maintenance.Developing front-end applications from scratch using Vue.js and Vite, including system architecture planning and setup (AlmaLinux, Ubuntu).Working with a three-tier architecture and Nginx proxy for development.Implementing CI/CD automation deployment using Jenkins and Gitea.Maintaining the company's products (online banking, mobile banking, and digital banking).Developing MID (Mobile ID) verification features, with experience in Redis and PostgreSQL.At the end of 2023, I joined a bank digital transformation project, collaborating with vendors to develop a new digital mobile banking system. The project involved:Using Spring Boot 3 and Vue.js for development.Adopting Agile development and project management with Azure DevOps, along with CI/CD pipelines.Developing features such as loans, funds, overseas bonds, and gold trading, as well as conducting system analysis.My aspiration is to maintain my passion for programming while continuously improving my skills. I also hope to explore more domains and industries in the future.Let me know if you'd like any refinements!",
      },
    },
  },
  ch: {
    message: {
      hello: "世界你好",
      title: { aboutme: "關於我", bio: "簡歷" },
      about: {
        content:
          "2022開始擔任銀行金融業程式開發人員, 接手過前端專案開發(行內系統)與維護, 後端維護, 前端使用<b>Vuejs與Vite</b>進行從無到有的開發, 包含系統架構規劃與建置(AlmaLinux, Ubuntu), 配合三層式架構與Nginx代理進行開發, 使用Jenkins與Gitea進行CI/CD自動化部屬, 後端維護公司產品(網路銀行, 行動銀行, 數位銀行), MID行動裝置驗證功能開發, 包含Redis, postgreSql使用經驗.<br/> 2023年底因緣際會加入銀行數位轉型案, 與廠商合作開發全新數位行動銀行專案, 使用spring boot 3與Vuejs開發, 配合Azure devops進行敏捷開發與專案管理及CI/CD, 經手開發功能包含貸款, 基金, 海外債, 黃金等功能開發與系統分析,<br/> 對自己的期許是能夠一直保持對程式的熱誠並向上精進, 也希望能夠接觸更多領域及行業",
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
