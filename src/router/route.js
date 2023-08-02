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
    ],
  },
];

export default routes;
