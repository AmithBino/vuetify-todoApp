import { createRouter, createWebHistory } from 'vue-router';
import DashPage from './views/Dashboard.vue';
import ProjectPage from './views/Projects.vue';
import TeamPage from './views/Team.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectPage
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    }
  ]
});

export default router;