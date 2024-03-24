import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Posts from "@/views/posts/Posts.vue";
import NotFound from "@/views/posts/NotFound.vue";
import PostDetail from "@/views/posts/PostEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    name: "postdetail",
    component: PostDetail,
  },
  // redirect
  {
    path: "/all-posts",
    redirect: "posts",
  },
  // catchall 404
  {
    path: "/:catchall(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
