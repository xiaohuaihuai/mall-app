<template>
  <div class="goods">
    <van-nav-bar title="商品" left-arrow @click-left="onClickLeft">
      <van-icon name="more-o" slot="right" />
    </van-nav-bar>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="goods.thumb" >
      </van-swipe-item>
<!--      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">-->
<!--        <img :src="thumb" >-->
<!--      </van-swipe-item>-->
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：19</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">{{goods.storeName}}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="viewGoodsDetail" />
      <van-popup v-model="showGoodsDetail"
                 position="bottom"
                 :style="{ height: '70%' }">
        {{goods.desc}}
      </van-popup>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  NavBar,
  Popup,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import {queryGoodsById} from '@/api/goods';
// import axios from 'axios';

export default {
  components: {
    [NavBar.name]: NavBar,
    [Popup.name]: Popup,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data() {
    return {
      goods: {},
      showGoodsDetail: false
    };
  },

  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },

    viewGoodsDetail(){
      this.showGoodsDetail = true;
    },

    formatPrice() {
      return '¥' + (this.goods.price).toFixed(2);
    },

    onClickCart() {
      this.$router.push('/cart');
    },

    sorry() {
      Toast('暂无后续逻辑~');
    }
  },

  created() {
    this.goods = queryGoodsById(this.$route.query.id);
    // axios.post(this.$config.baseUrl + '/goods/id?' + this.$route.query.id)
    //     .then((response) => {
    //         if (response.data.code === 200) {
    //             this.goods = response.data.data
    //         } else {
    //            // do nothing
    //         }
    //     })
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
