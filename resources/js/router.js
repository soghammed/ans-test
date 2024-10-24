import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import PokemonPage from "@/pages/PokemonPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
  {
    name: "default",
    path: "/",
    component: HomePage,
  },
  {
    name: "home",
    path: "/pokedex",
    component: HomePage,
  },
  { 
      name: "pokedex-view", 
      path: '/pokedex/:name', 
      component: PokemonPage,
      props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  }
];

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    routes
});

export default router;