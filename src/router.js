import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "ProjectsView",
      component: ProjectsView,
    },
    {
      path: "/contacts",
      name: "ContactsView",
      component: ContactsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundView",
      component: NotFoundView,
    },
    {
      path: "/projects/:id",
      name: "SingleProjectView",
      component: SingleProjectView,
    },
  ],
});

export { router };
