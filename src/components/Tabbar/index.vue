<template>
    <div class="tabbar">
        <van-tabbar v-model="tabbarActive" route>
            <van-tabbar-item replace to="/home" icon="shop-o">商城</van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant';

export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },

    data() {
        return {
            tabbarActive: 0
        }
    }
}
</script>

<style lang="less">
    .tabbar{
        z-index: 9999;
    }
</style>
