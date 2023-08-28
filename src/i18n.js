import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
      title: { aboutme: "About Me", bio: "Bio" },
      about: {
        content:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni autem culpa alias error similique, labore odio eos a atque exercitationem architecto, consectetur molestias aliquam dolor possimus reprehenderit.Officia, cupiditate perferendis? Voluptas necessitatibus alias eaque delectus saepe tempore sit eius, iusto labore maxime repellat architecto molestiae corrupti ab nisi similique autem dolor excepturi fuga odio quisquam! Neque necessitatibus numquam vero aperiam! Numquam impedit ea harum nihil. Maiores optio vitae corrupti maxime consequatur pariatur nobis similique, repellendus molestias veritatis suscipit, libero, nostrum corporis consectetur quasi sapiente aliquid asperiores sit dolorem enim. Eveniet. Odit at dolores facere, officia quia aspernatur commodi aliquid placeat amet blanditiis ad ut eum dolorem excepturi, ipsum molestiae fugit mollitia, temporibus aperiam eius? Cumque modi quod laboriosam sed officia.",
      },
    },
  },
  ch: {
    message: {
      hello: "世界你好",
      title: { aboutme: "關於我", bio: "簡歷" },
      about: {
        content:
          "具獨立思考的能力,遇到事情習慣性地去探究始末,並思考其合理性。對於寫程式一直始終保有一定興趣，課程學習使用arduino製作互動裝置，也在學校內上過Ｃ＋＋的課程，從此對於coding這件事一直在心中佔有一席之地，但當時的畢業專題是屬於設計攝影相關，對當時的我來說是較有興趣的，就沒有繼續往資訊相關方向走，所以在畢業後便入職廣告拍攝行業　　大學畢業後，當完兵便進入影視行業，也就是俗稱的拍片，經過了幾年的努力與嘗試，發現到自己心之所向並不在此行業，高工時與高危險性讓我不斷的思考未來這條路是否適合我，於是在一次看到同事發生的意外後，我就決定轉職　　轉職過程一開始並不順利，在思考新方向的同時，我也不斷地探索自己的興趣在哪裡，後來經過家人的推薦，重新找到了當初使用程式語言的經驗所帶給我的成就感，我便開始尋找相關課程，於是就來到了緯育的前端養成班　　進到緯育前端班後，一開始是基於對於程式的好奇再加上資訊這條路未來的發展性與過往撰寫程式的有趣經驗來學習的，帶著先找到工作再說吧的心情，但在經過幾個月的洗禮後，雖然轉職的目標不變，但我對於程式學習的興趣大增，對於未來也從先轉職成前端工程師變為以撰寫程式為目標在前進，目前對未來的展望是可以不斷地往前精進，在以後朝後端甚至是全端的方向努力",
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
