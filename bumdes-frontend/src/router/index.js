import { createRouter, createWebHistory } from 'vue-router'
import Formulir from '../views/Formulir.vue'
import Admin from '../views/admin/Admin.vue'
import Barang from '../views/admin/Barang.vue'
import Penduduk from '../views/admin/Penduduk.vue'
import Cafe from '../views/admin/Cafe.vue'
import Pinjaman from '../views/admin/Pinjaman.vue'
import SewaBarang from '../views/admin/SewaBarang.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Login from '../views/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'formulir',
        component: Formulir
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }, {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: { requiresAuth: true },
    }, {
        path: '/barang',
        name: 'barang',
        component: Barang,
        meta: { requiresAuth: true },
    }, {
        path: '/penduduk',
        name: 'penduduk',
        component: Penduduk,
        meta: { requiresAuth: true },
    }, {
        path: '/cafe',
        name: 'cafe',
        component: Cafe,
        meta: { requiresAuth: true },
    }, {
        path: '/pinjaman',
        name: 'pinjaman',
        component: Pinjaman,
        meta: { requiresAuth: true },
    }, {
        path: '/sewabarang',
        name: 'sewabarang',
        component: SewaBarang,
        meta: { requiresAuth: true },
    }]
})
router.beforeEach((to, from, next) => {
    console.log('route >>>>>>>>>>>>>>..' + sessionStorage.getItem('id'));
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (sessionStorage.getItem('id') != '') {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});
export default router