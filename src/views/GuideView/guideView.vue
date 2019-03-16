<template>
  <div class="guideView">
    <!-- ===========   引导页   =========== -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="banner">
          <img src="@/image/guide/guide_01.png">
          <div class="p">
            <p>360全方位赚钱</p>
            <p>开启躺赚模式</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="@/image/guide/guide_02.png">
          <div class="p">
            <p>真正的"合伙人"模式</p>
            <p>付出"定"有回报</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="@/image/guide/guide_03.png">
          <div class="p">
            <p>中国唯一</p>
            <p>三大奖励 三大分红</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="@/image/guide/guide_04.png">
          <div class="p">
            <p>中国唯一</p>
            <p>代理商特权--福利金</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="@/image/guide/guide_05.png">
          <div class="p">
            <p>五湖四海 群英荟萃</p>
            <p>皆因异业联盟而醉</p>
            <button class="goIndex" @click="goIndex()">踏上稳赚之路</button>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "mand-mobile";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "guideView",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 2
        }
      }
    };
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    goIndex() {
      this.$router.push("/index");
    }
  },
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="less" scoped>
.guideView {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.banner {
  width: 100%;
  text-align: center;
  img {
    margin-top: 20%;
    width: 80%;
  }
  .p {
    width: 100%;
    height: 6rem;
    font-size: 0.7rem;
    margin-top: 1rem;
    p:nth-child(1) {
      color: #d8422a;
      font-size: 1rem;
    }
    p:nth-child(2) {
      margin-top: 0.5rem;
      color: #e7785b;
    }
    .goIndex {
      margin-top: 0.5rem;
      width: 40%;
      background: linear-gradient(to right, #f82d25, #d5161a);
      height: 1.5rem;
      line-height: 1.5rem;
      margin-bottom: 0.5rem;
      border-radius: 1rem;
      font-size: 0.6rem;
      color: #fff;
    }
  }
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  font-size: 0.5rem;
}
</style>
<style lang="less">
.swiper-slide {
  width: 100% !important;
  height: 100%;
}
.swiper-pagination-bullet {
  width: 0.3rem !important;
  height: 0.3rem !important;
}
.swiper-pagination-bullet-active {
  background: #be1f23 !important;
}
</style>
