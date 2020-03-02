import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Tabbar = () => import('@/components/Tabbar');
const register = () => import('@/view/register');
const login = () => import('@/view/login');
const home = () => import('@/view/home');
const user = () => import('@/view/user');
const userSetting = () => import('@/view/user/setting');
const cart = () => import('@/view/cart');
const goods = () => import('@/view/goods');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'register',
    path: '/register',
    components: {
      default: register
    },
    meta: {
      title: '注册'
    }
  },
  {
    name: 'login',
    path: '/login',
    components: {
      default: login
    },
    meta: {
      title: '登录'
    }
  },
  {
    name: 'home',
    path: '/home',
    components: {
      default: home,
      tabbar: Tabbar
    },
    meta: {
      title: '商城'
    }
  },
  {
    name: 'user',
    path: '/user',
    components: {
      default: user,
      tabbar: Tabbar
    },
    meta: {
      title: '我的'
    }
  },
  {
    name: 'user-setting',
    path: '/user/setting',
    components: {
      default: userSetting
    },
    meta: {
      title: '用户设置'
    }
  },
  {
    name: 'cart',
    path: '/cart',
    components: {
      default: cart,
      tabbar: Tabbar
    },
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    path: '/goods',
    components: {
      default: goods
    },
    meta: {
      title: '商品'
    }
  }
];

const router = new Router({
  mode: 'hash',
  routes: routes
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  if (localStorage.getItem('authToken') !== null){
    next();
  } else {
    if(to.path === '/register' || to.path === '/login'){ //如果是注册页面或者登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录；
      next('/login');
    }
  }

});

export {
  router
};
