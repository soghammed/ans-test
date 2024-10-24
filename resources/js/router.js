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
//   {
//       name: "profile",
//       path: "/profile/:pid?/:pageMode?",
//       component: ProfilePage,
//       meta: {requiresAuth: true},
//       props: route => ({ type: route.query.type, uiid: route.query.uiid, pid: route.params.pid })
//   },
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


// router.beforeEach((to, from, next) => {
//   if (to.meta.url) {
//     to.params.url = to.meta.url
//   }
//   next()
// })
// router.beforeEach(async (to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//       if (store.state.auth.authenticated) {
//         if(!store.state.auth.user.email_verified_at){
//           //email not verified
//           next("/email/verify");
//           return;  
//         }

//         if(!store.state.user.data.membership_id){
//           //no membership
//           next("/pricing");
//           return;
//         }

//         //all good, continue
//         next();
//       }else{
//         try{
//           await store.dispatch('auth/login')
//           if (store.state.auth.authenticated) {
//             if(!store.state.auth.user.email_verified_at){
//               //email not verified
//               next("/email/verify");
//               return;  
//             }
    
//             //all good, continue
//             next();
//             return;
//           }
//           //not authenticated;
//           next("/");
//         } catch (error) {
//           console.log(error)
//           //redirect home;
//           next("/");
//         }
//       }
//     } else {
//       //guest route;
//       next();
//     }
// });
export default router;