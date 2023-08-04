const routes = [
  {
    path: "/",
    component: () => import("../layout/MainBoard.vue"),
    redirect: { name: "Home" },
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () => import("../view/Home.vue"),
      },
      {
        path: "/Work",
        name: "Work",
        component: () => import("../view/Work.vue"),
      },
    ],
  },
];

export default routes;
