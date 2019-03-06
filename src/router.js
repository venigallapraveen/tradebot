import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Stocks from "./components/stocks/Stocks.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",

      component: Home
    },
    {
      path: "/stocks",

      component: Stocks
    },
    {
      path: "/portfolio",
      component: Portfolio
    }
  ]
});
