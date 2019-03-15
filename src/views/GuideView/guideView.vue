<template>
  <div class="guideView">
    <!-- ===========   引导页   =========== -->
    <div class="md-example-child md-example-child-swiper md-example-child-swiper-2">
      <md-swiper transition="fade" ref="swiper">
        <md-swiper-item :key="$index" v-for="(item, $index) in simple">
          <a
            href="javascript:void(0)"
            class="banner-item"
            :style="{'background': `${item.color}`}"
          >{{item.text}}</a>
        </md-swiper-item>
      </md-swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "mand-mobile";
export default {
  name: "guideView",
  components: {
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem
  },
  data() {
    return {
      /*  simple */
      simple: [
        {
          color: "red",
          text: "111111"
        },
        {
          color: "blue",
          text: "222222"
        },
        {
          color: "yellow",
          text: "333333"
        },
        {
          color: "red",
          text: "444444"
        },
        {
          color: "yellow",
          text: "555555"
        }
      ]
    };
  },
  mounted() {
    window.triggerSwiper3 = () => {
      this.goto();
    };
  },
  methods: {
    setValue(id, value) {
      document.querySelector(id) &&
        (document.querySelector(id).innerHTML = value);
    },
    /*  beforeChange(from, to) {
      this.setValue("#valueSwiper10", from);
      this.setValue("#valueSwiper11", to);
    },
    afterChange(from, to) {
      this.setValue("#valueSwiper12", from);
      this.setValue("#valueSwiper13", to);
    }, */
    goto() {
      this.$refs.swiper.goto(2);
    }
  },
  created() {
    console.log(this.simple);
  }
};
</script>
<style lang="less" scoped>
.md-example-child-swiper-2 {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.banner-item {
  float: left;
  width: 100%;
  height: 100%;
  line-height: 250px;
  text-align: center;
  font-size: 28px;
  color: #fff;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  text-decoration-line: none;
}
</style>
<style lang="less">
.md-swiper.md-swiper-fade .md-swiper-item,
.md-swiper-box.md-swiper-fade .md-swiper-item {
  top: 0;
  bottom: 0;
}
</style>
