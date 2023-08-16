const routes = [
  {
    path: "/",
    component: () => import("../layout/MainLayout.vue"),
    redirect: { name: "Home" },
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () => import("../view/Home.vue"),
      },
      {
        path: "/Works",
        name: "Works",
        component: () => import("../view/Works.vue"),
      },
    ],
  },
];

export default routes;
