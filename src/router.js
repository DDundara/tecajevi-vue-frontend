import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList")
  },
  {
    path: "/",
    alias: "/tutorialsfull",
    name: "tutorialsfull",
    component: () => import("./components/TutorialsListFull")
  },

  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/tutorialsdelete/:id",
    name: "tutorial-details2",
    component: () => import("./components/TutorialDelete")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial")
  },
  {
    path: "/",
    alias: "/students",
    name: "students",
    component: () => import("./components/StudentsListFull")
  },
  {
    path: "/addstudent",
    name: "addstudent",
    component: () => import("./components/StudentAdd")
  }
  // {
  //   path: "/googlemap",
  //   name: "googlemap",
  //   component: () => import("./components/GoogleMapLoader")
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;