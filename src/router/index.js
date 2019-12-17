import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../components/MovieList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MovieList
  },
  {
    path: "/details/:id",
    name: "details",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/MovieDetail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
