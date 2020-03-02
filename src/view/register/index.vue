<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="registerReq.username"
                    type="tel"
                    label="手机号"
                    placeholder="请输入手机号"
                    clearable
                    left-icon="phone-o"
            />
            <van-field
                    v-model="registerReq.password"
                    :type="showPassword ? 'text' : 'password'"
                    label="密码"
                    placeholder="请输入密码"
                    clearable
                    left-icon="lock"
                    :right-icon="showPassword ? 'eye-o' :'closed-eye'"
                    @click-right-icon="handleShowPassword"
            />
            <van-field
                    v-model="registerReq.repeatPassword"
                    :type="showRepeatPassword ? 'text' : 'password'"
                    label="确认密码"
                    placeholder="请再次输入密码"
                    clearable
                    left-icon="lock"
                    :right-icon="showRepeatPassword ? 'eye-o' :'closed-eye'"
                    @click-right-icon="handleShowRepeatPassword"
            />
        </van-cell-group>
        <van-button type="danger" size="large" @click="handleRegister">注册</van-button>
    </div>
</template>

<script>
    import { CellGroup, Field, Button, Dialog, Toast } from 'vant';
    import {register} from '@/api/user';
    // import axios from 'axios';

    export default {
        components: {
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            [Button.name]: Button,
            [Dialog.name]: Dialog,
            [Toast.name]: Toast
        },

        data() {
            return {
                registerReq: {
                    username: '',
                    password: '',
                    repeatPassword: ''
                },
                showPassword: false,
                showRepeatPassword: false
            };
        },

        methods: {
            isMobilePhone(mobilePhone) {
                const pattern = /^1\d{10}$/;
                return pattern.test(mobilePhone);
            },
            handleShowPassword(){
                if (this.showPassword){
                    this.showPassword = false
                } else {
                    this.showPassword = true
                }
            },
            handleShowRepeatPassword() {
                if (this.showRepeatPassword){
                    this.showRepeatPassword = false
                } else {
                    this.showRepeatPassword = true
                }
            },
            handleRegister() {
                if (!this.isMobilePhone(this.registerReq.username)){
                    Toast('手机号格式不正确！');
                }else if (this.registerReq.password !== this.registerReq.repeatPassword){
                    Toast('密码和确认密码不一致！');
                } else {
                    const res = register(this.registerReq);
                    if (res.code === 200){
                        this.$router.push('/login')
                    } else {
                        Dialog.alert({
                            title: '注册失败！',
                            message: res.message
                        }).then(() => {
                            // on close
                        });
                    }
                    // axios.post(this.$config.baseUrl + '/api/register', this.registerReq)
                    //     .then((response) => {
                    //         if (response.data.code === 200) {
                    //             this.$router.push('/login')
                    //         } else {
                    //             Dialog.alert({
                    //                 title: '注册失败！',
                    //                 message: response.data.message
                    //             }).then(() => {
                    //                 // on close
                    //             });
                    //         }
                    //     })
                }
            }
        },

        created() {

        }
    };
</script>

<style lang="less">

</style>
