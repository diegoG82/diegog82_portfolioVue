import { createRouter, createWebHistory } from 'vue-router';
import Main from './pages/Main.vue';
import Mail from './pages/Mail.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {

            path: '/mail',
            name: 'mail',
            component: Mail
        },
        //not found viene inserito sempre per ultimo
       {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});
export { router };