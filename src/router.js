import { createRouter, createWebHistory } from 'vue-router';
import Main from './pages/Main.vue';
import Mail from './pages/Mail.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'Main',
component: Main
},
{

 path: '/Mail',
name: 'Mail',
 component: Mail
 },
]
});
export { router };