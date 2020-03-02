<template>
    <div>
        <div class="store_header">
            <div class="store_avatar">
                <img :src="avatar_default" alt="头像" width="55" height="55">
            </div>
            <div class="store_name">肥肥の店</div>
        </div>

        <div>
            <van-cell-group>
                <van-field
                        v-model="loginReq.username"
                        type="tel"
                        label="手机号"
                        placeholder="请输入手机号"
                        clearable
                        left-icon="phone-o"
                />
                <van-field
                        v-model="loginReq.password"
                        :type="showPassword ? 'text' : 'password'"
                        label="密码"
                        placeholder="请输入密码"
                        clearable
                        left-icon="lock"
                        :right-icon="showPassword ? 'eye-o' :'closed-eye'"
                        @click-right-icon="handleShowPassword"
                />
            </van-cell-group>
            <van-button type="danger" size="large" @click="handleLogin">登录</van-button>
        </div>

        <div class="register">
            <div class="float-l" style=" text-align:right;">
                <span @click="handleShowKefu" >联系客服</span>
            </div>
            <div class="float-r">
                <router-link to="/register">免费注册</router-link>
            </div>
        </div>

        <div class="text-desc text-center bottom_position">技术支持: 肥肥</div>
    </div>
</template>

<script>
    import { CellGroup, Field, Button, Dialog } from 'vant';
    import {login} from '@/api/user';
    // import axios from 'axios';

    export default {
        components: {
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            [Button.name]: Button,
            [Dialog.name]: Dialog
        },

        data() {
            return {
                avatar_default: require('@/assets/images/avatar_default.png'),
                loginReq: {
                    username: '15261471747',
                    password: '123456'
                },
                showPassword: false,
                showKefu: false
            };
        },

        methods: {
            handleShowPassword(){
                if (this.showPassword){
                    this.showPassword = false
                } else {
                    this.showPassword = true
                }
            },
            handleShowKefu() {
                if (this.showKefu){
                    this.showKefu = false
                } else {
                    this.showKefu = true
                }
            },
            handleLogin() {
                const res = login(this.loginReq);
                if (res.code === 200) {
                    localStorage.setItem('authToken', res.data)
                    this.$router.push('/home')
                } else {
                    Dialog.alert({
                        title: '登录失败！',
                        message: res.message
                    }).then(() => {
                        // on close
                    });
                }
                // axios.post(this.$config.baseUrl + '/api/login', this.loginReq)
                //     .then((response) => {
                //         if (response.data.code === 200) {
                //             localStorage.setItem('authToken', response.data.data)
                //             this.$router.push('/home')
                //         } else {
                //             Dialog.alert({
                //                 title: '登录失败！',
                //                 message: response.data.message
                //             }).then(() => {
                //                 // on close
                //             });
                //         }
                //     })
            }
        },

        created() {

        }
    };
</script>

<style lang="less">
    .store_header {
        text-align: center;
        padding: 30px 0;
        .store_avatar img {
            border-radius: 50%;
        }
        .store_name {
            padding-top: 5px;
            font-size: 16px;
        }
    }

    .bottom_position {
        position: absolute;
        bottom: 30px;
        width: 100%;
        text-align: center;
        font-size: 16px;
    }

    .float-r {
        float: right;
    }

    .float-l {
        float: left;
    }

    .register {
        padding-top: 40px;
        color: #999;
        a {
            color: #999;
        }
        > div {
            width: 50%;
            box-sizing: border-box;
            padding: 0 20px;
        }
    }
</style>
