const UserHome = { template: '<div>Home<div class="ceras">32</div></div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

import User from "@/views/User.vue";

export default [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Products.vue")
  },
  {
    path: "/user",
    component: User,
    children: [
      { path: '', name:'user', component: UserHome },
    ]
  }
];


//export { Bar, CountDown };