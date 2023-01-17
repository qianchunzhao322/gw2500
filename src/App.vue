<template>
  <div id="app">
    <header id="header">
      <a href="#/" class="logo" >SHGTON盛通劳务</a>
      <ul>
        <li><a href="#/" >首页</a></li>
        <li><a href="#/about">关于我们</a></li>
        <li><a href="#/new" >新闻中心</a></li>
        <li><a href="#/project" >施工项目</a></li>
        <li><a href="#/people">人才招聘</a></li>
        <li><a href="#/online">在线留言</a></li>
        <li><a href="#/us">联系我们</a></li>
      </ul>
    </header>
    <div id="vital" class="body">
      <div class="up_is_active" @click="goAnchor('#vital')" v-if="up_select">
        <i class="el-icon-arrow-up"></i>
      </div>
      <router-view/>
    </div>
    <footer>
      <div class="top">“责任，创新，引领行业标杆”</div>
      <div class="middle">
        <ul>
          <li>首页</li>
          <li><a href="#/">首页</a></li>
        </ul>
        <ul>
          <li>关于盛通</li>
          <li><a href="#/about">公司简介</a></li>
          <li><a href="#/about/corporateCulture">企业文化</a></li>
          <li><a href="#/about/Honer">荣誉资质</a></li>
          <li><a href="#/about/Leader">领导致辞</a></li>
        </ul>
        <ul>
          <li>新闻中心</li>
          <li><a href="#/new">公司动态</a></li>
          <li><a href="#/new/outer">行业动态</a></li>
        </ul>
        <ul>
          <li>施工项目</li>
          <li><a href="#/project">施工项目</a></li>
        </ul>
        <ul>
          <li>人才招聘</li>
          <li><a href="#/people/">人才理念</a></li>
          <li><a href="#/people/position">岗位发布</a></li>
        </ul>
        <ul>
          <li>在线留言</li>
          <li><a href="#/online">在线留言</a></li>
        </ul>
        <ul>
          <li>联系我们</li>
          <li><a href="#/us">联系我们</a></li>
        </ul>
      </div>
      <div class="bottom">
        <div class="left">
          <i class="on">Copyright © 2002-2022版权所有 广东盛通劳务有限公司 </i>
          <i>粤网文【2022】xxxx-xxxx号 &nbsp;&nbsp;粤xx-xxxxxxxx &nbsp;&nbsp;粤公网安备 xxxxxxxxxxxxxxxxx号</i>
        </div>
        <div class="right">SHGTON盛通劳务</div>
      </div>
    </footer>
  </div>
</template>
<script>
import '@/utils/flexible.js'
export default {
  data () {
    return {
      up_select: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    goAnchor (selector) { /* 参数selector是id选择器（#anchor14） */
      document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
      })
    },
    scrollToTop () {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var header = document.querySelector('header')
      header.classList.toggle('sticky', window.scrollY > 0)
      this.up_select = window.scrollY > 0
      console.log(this.up_select)
    }
  }
}
</script>

<style lang="less">
@color-yellow: #801EAF;
@color-yellows: #F5DE50;
@color-grey: #EDEDED;
@font-face {
  font-family : 'title';
  src: url('./assets/font/title.ttf');
}
@font-face {
  font-family : 'footer';
  src: url('./assets/font/footer.ttf');
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  color: #2c3e50;
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    padding: .5rem 0;
    padding-left: 10.7143rem;
    transition: 0.6s;
    .logo{
      position: relative;
      font-weight: bold;
      coLor: #fff;
      font-family: 'title';
      text-decoration : none;
      font-size: 1.8rem;
      letter-spacing: .0729rem;
      transition: 0.6s;
    }
    ul{
      padding-left: 17.1429rem;
      position: relative;
      dispLay: flex;
      justify-content: center;
      align-items : center;
      li{
        position: relative;
        list-style: none;
        a{
          position: relative;
          margin: 0 1.5rem;
          text-decoration: none;
          color: #fff;
          font-weight: 550;
          font-size: 1rem;
          transition: 0.6s;
        }
      }
      li:hover{
        a{
          color: #00b4ff;
        }
      }
    }
  }
  .sticky{
      padding-left: 8.1429rem;
      background-color: #fff;
      .logo {
        background: linear-gradient(to right, #24d8ff, @color-yellow);// 背景渐变
        -webkit-background-clip: text;// 作用在文本上
        color: transparent;// 字体透明
      }
      ul{
        li{
          a{
            color: #000;
          }
        }
      }
    }
  .body{
    background-color: rgb(255, 255, 255);
    .up_is_active{
      transition: 0.6s;
      height: 60px;
      width: 60px;
      position: fixed;
      bottom: 80px;
      right: 20px;
      border-radius: 50%;
      border: 1px solid black;
      color: white;
      z-index: 999;
      i{
        margin: 20px 22px;
        color: #000;
      }
    }
    .up_is_active:hover{
      background-color: rgb(1, 185, 252);
      border: white;
      i{
        color: white;
      }
    }
  }
  footer{
    width: 100%;
    height: 35.7143rem;
    background-color: @color-grey;
    .top{
      width: 83%;
      height: 20%;
      margin: 0 auto;
      line-height: 1.7;
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
      color: #333333;
      font-style: italic;
      font-family: 'footer';
      cursor: default;
    }
    .middle{
      width: 83%;
      height: 46%;
      margin: 2.1429rem auto;
      line-height: 1.7;
      font-size: 1.1429rem;
      text-align: center;
      color: #333333;
      ul{
        float: left;
        margin: 0 1.6rem;
        list-style: none;
        li{
          font-size: 1rem;
          cursor: pointer;
          color: #666666;
          margin-bottom: .7143rem;
          a{
            text-decoration: none;
            color: #666666;
          }
        }
        li:hover{
          color: #000;
          a{
            color: #000;
          }
        }
        li:nth-child(1){
          color: #000;
          font-size: 1.1429rem;
          font-weight: 550;
          margin-bottom: 1.4286rem;
          cursor: default;
        }
      }
      ul:nth-child(1){
        margin-left: 7.1429rem;
      }
    }
    .bottom{
      overflow: hidden;
      width: 83%;
      height: 22%;
      margin: 0 auto;
      border-top: .0714rem solid #D8D8D8;
      .left{
        width: 60%;
        height: 100%;
        float: left;
        i{
          padding-left: 1.4286rem;
          display: block;
          margin: .3571rem 0;
          font-style: normal;
          font-size: 1rem;
        }
        .on{
          margin-top: 1.4286rem;
        }
      }
      .right{
        width: 36%;
        float: right;
        height: 100%;
        font-size: 2.1429rem;
        font-weight: 550;
        padding-top: 1.4286rem;
        text-align: center;
        background: linear-gradient(to right, #24d8ff, @color-yellow);// 背景渐变
        -webkit-background-clip: text;// 作用在文本上
        color: transparent;// 字体透明
      }
    }
  }
}
</style>
