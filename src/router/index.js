import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../views/test/index.vue"),
      props: route => ({
        form_success: route.params.form_success,
      })
      
    },
    {
      path: "/Page-List",
      name: "Page-list",
      component: () => import("../views/Pages/index.vue"),
    },
    {
      path: "/our-work",
      name: "our-work",
      component: () => import("../views/our-work/index.vue"),
    },
    {
      path: "/our-gallery",
      name: "our-gallery",
      component: () => import("../views/our-gallery/index.vue"),
    },
    {
      path: "/careers",
      name: "careers",
      component: () => import("../views/careers/index.vue"),
    },
    {
      path: "/media-gallery",
      name: "Media-Gallery",
      component: () => import("../views/media-gallery/index.vue"),
    },
    {
      path: "/third-party",
      name: "Third-Party",
      component: () => import("../views/third-party/index.vue"),
    },
    {
      path: "/contact-us",
      name: "Contact-Us",
      component: () => import("../views/contact-us/index.vue"),
      props: (route) => ({
        form_success: route.params.form_success,
      }),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/Blog/index.vue"),
    },
    {
      path: "/blog/content",
      name: "blog/content",
      component: () => import("../views/Blog/content/index.vue"),
    },
    {
      path: "/jobs",
      name: "job-list",
      component: () => import("../views/jobs/index.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/test/index.vue"),
    },
  ],
});

export default router;
