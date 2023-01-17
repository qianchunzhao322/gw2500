<template>
  <div class="about">
    <div class="header">
      <div class="name">关于我们</div>
    </div>
    <div class="main">
      <div class="inner">
        <div class="left">
          <div class="title">关于我们 / About us</div>
          <a id="a" href="#/about" @click="turn"><div class="li isActive">公司介绍</div></a>
          <a id="a" href="#/about/corporateCulture" @click="turn"><div class="li">企业文化</div></a>
          <a id="a" href="#/about/Honer" @click="turn"><div class="li">荣誉资质</div></a>
          <a id="a" href="#/about/Leader" @click="turn"><div class="li">领导致辞</div></a>
          <div class="out">
            <carousel></carousel>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="info">{{ title }}</div>
          </div>
          <div class="bottom">
            <router-view></router-view>
          </div>
        </div>
        <!-- // 清浮盒子 -->
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '../components/carousel.vue'
export default {
  components: { carousel },
  name: 'About',
  component: {
    carousel
  },
  data () {
    return {
      title: '公司介绍'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    turn (e) {
      var alist = document.querySelectorAll('#a')
      alist.forEach(item => {
        item.children[0].classList = ['li']
      })
      e.srcElement.classList.add('isActive')
      this.title = e.srcElement.innerHTML
    },
    init () {
      if (this.$route.fullPath === '/about') {
        this.title = '公司介绍'
        this.initDom(0)
      } else if (this.$route.fullPath === '/about/corporateCulture') {
        this.title = '企业文化'
        this.initDom(1)
      } else if (this.$route.fullPath === '/about/Honer') {
        this.title = '荣誉资质'
        this.initDom(2)
      } else if (this.$route.fullPath === '/about/Leader') {
        this.title = '领导致辞'
        this.initDom(3)
      }
    },
    initDom (num) {
      var alist = document.querySelectorAll('#a')
      alist.forEach(item => {
        item.children[0].classList = ['li']
      })
      alist[num].children[0].classList.add('isActive')
    }
  }
}
</script>

<style lang="less" scoped>
.about{
  .header{
    width: 100%;
    height: 21.4286rem;
    background: url('../assets/images/about.png') no-repeat;
    background-size: cover;
    .name{
      margin-left: 33.5714rem;
      padding-top: 7.1429rem;
      font-size: 3.5714rem;
      font-weight: bold;
      color: white;
    }
  }
  .main{
    height:auto!important;
    min-height: 40.5714rem;
    .inner{
      height:auto!important;
      min-height: 40.5714rem;
      margin: 0 auto;
      width: 80%;
      .clear{
        clear: both;// 清除浮动
      }
      .left{
        height: 40.5714rem;
        width: 18%;
        float: left;
        overflow: hidden;
        .title{
          width: 100%;
          margin-top: 2.1429rem;
          height: 5.3571rem;
          color: white;
          font-size: 1.4286rem;
          line-height: 5.3571rem;
          text-align: center;
          cursor: default;
          background-color: #00b4ff;
        }
        a{
          text-decoration: none;
          .li{
            width: 100%;
            height: 2.8571rem;
            margin-top: .2143rem;
            padding-left: 1.4286rem;
            line-height: 2.8571rem;
            font-size: 1.1429rem;
            cursor: pointer;
            color: rgb(67, 67, 67);
            background-color: #EEEEEE;
          }
          .isActive{
            color: white;
            background-color: #00b4ff;
          }
        }
        .li:hover{
          color: white;
          background-color: #00b4ff;
        }
        .li:nth-child(2){
          margin-top: 1.4286rem;
        }
        .out{
          width: 100%;
          height: 4.8571rem;
          margin-top: 30px;
        }
      }
      .right{
        height:auto!important;
        min-height: 40.5714rem;
        width: 80%;
        float: left;
        margin-left: 2%;
        .top{
          width: 100%;
          height: 6.4286rem;
          border-bottom: .0714rem solid #F8F8F8;
          .info{
            height: 98%;
            width: 8.5714rem;
            font-size: 1.2857rem;
            font-weight: bold;
            color: #00b4ff;
            line-height: 7.8571rem;
            border-bottom: .2143rem solid #00b4ff;
            background-color: #fff;
          }
        }
        .bottom{
          width: 100%;
          min-height: 32.1429rem;
        }
      }
    }
  }
}
</style>
