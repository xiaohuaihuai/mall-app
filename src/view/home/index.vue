<template>
    <div class="home">
        <van-list
                style="bottom: 50px"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
<!--            <van-cell v-for="item in goodsList" :key="item">-->
                <van-card
                        v-for="item in goodsList" :key="item.id"
                        :title="item.title"
                        :desc="item.desc"
                        :price="item.price"
                        :thumb="item.thumb"
                        @click="onClickGoods(item.id)"
                >
                    <div slot="footer">{{item.storeName}}</div>
                </van-card>
<!--            </van-cell>-->
        </van-list>
    </div>
</template>

<script>
    import {List, Card} from 'vant';
    import {queryGoodsList} from '@/api/goods';
    // import axios from 'axios';

    export default {
        components: {
            [List.name]: List,
            [Card.name]: Card
        },

        data() {
            return {
                goodsList: [],
                loading: false,
                finished: false
            }
        },

        methods: {
            onLoad() {
                this.finished = true;
            },
            onClickGoods(id) {
                this.$router.push({ path: '/goods', query: { id: id }});
                // this.$router.push('/goods?id='+id);
            }
        },

        created() {
            this.goodsList = queryGoodsList();
            // axios.post(this.$config.baseUrl + '/goods/queryAll')
            //     .then((response) => {
            //         if (response.data.code === 200) {
            //             this.goodsList = response.data.data
            //         } else {
            //            // do nothing
            //         }
            //     })
        }
    }
</script>

<style lang="less">
    .home{
    }
</style>
