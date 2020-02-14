<template>
    <div>
        <van-nav-bar title="用户设置" left-arrow @click-left="onClickLeft">
            <van-icon name="more-o" slot="right" />
        </van-nav-bar>
        <van-cell-group>
            <van-cell center title="退出登录" is-link @click="logout" />
        </van-cell-group>
    </div>
</template>

<script>
    import { Icon, NavBar, CellGroup, Cell, Dialog } from 'vant';
    // import axios from 'axios';

    export default {
        components: {
            [Icon.name]: Icon,
            [NavBar.name]: NavBar,
            [CellGroup.name]: CellGroup,
            [Cell.name]: Cell,
            [Dialog.name]: Dialog
        },
        data() {
            return {

            }
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            logout() {
                Dialog.confirm({
                    title: '肥肥の店',
                    message: '确定要退出登录吗？'
                }).then(() => {
                    // on confirm
                    localStorage.removeItem('authToken')
                    this.$router.push('/login')
                    // axios.post(this.$config.baseUrl + '/api/logout')
                    //     .then((response) => {
                    //         if (response.data.code === 200) {
                    //             localStorage.removeItem('authToken')
                    //             this.$router.push('/login')
                    //         } else {
                    //             Dialog.alert({
                    //                 title: '退出失败！',
                    //                 message: response.data.message
                    //             }).then(() => {
                    //                 // on close
                    //             });
                    //         }
                    //     })
                }).catch(() => {
                    // on cancel
                });
            }
        }
    };
</script>

<style>

</style>
