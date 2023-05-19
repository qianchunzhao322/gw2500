<template>
  <div class="home">
    <div class="carousel">
      <el-carousel trigger="click" height="47rem" :interval="4500" arrow="hover">
        <el-carousel-item v-for="item in img" :key="item.title">
          <h3 class="title" style="position: absolute;
            display: block;
            width: 70%;
            top: 27%;
            left: 9%;
            font-size: 3.2rem;
            font-weight: normal;
            color: #fff;
            z-index: 90;" >{{ item.title }}</h3>
          <div class="mask"></div>
          <img :src="item.url" style="width:100%;height:100%;" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="project">
      <div class="main">
        <div class="title">
          <span>成功案例 Product display</span>
          <div class="line"></div>
        </div>
        <div class="body">
          <div @click="turn($event)" v-for="item in projects"  :key="item.id" :data-id="item.id" class="cards">
            <al :data-id="item.id" href="#">
              <div :data-id="item.id" class="img">
              <img :data-id="item.id" :src="item.coverImg" alt="">
              <div :data-id="item.id" class="mask">
                <div :data-id="item.id" class="txt">{{item.projectName}}</div>
              </div>
            </div>
            </al>
            <div :data-id="item.id" class="desc">
              <div :data-id="item.id" class="name">{{item.projectName}}</div>
              <div :data-id="item.id" class="name detail">Details
                <div :data-id="item.id" class="arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <a style="text-decoration: none;" href="#/project"><div class="btn">MORE</div></a>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="left">
        <div class="box title">关于我们 about us</div>
        <div class="box line"></div>
        <div class="box p" >{{ this.text.content }}

</div>
        <a style="text-decoration: none;" href="#/about"><div class="btn">MORE</div></a>
      </div>
      <div class="right"></div>
    </div>
    <div class="new project">
      <div class="main">
        <div class="title">
          <span>新闻中心 News Center</span>
          <div class="line"></div>
        </div>
        <div class="body">
          <div  class="cards" :data-id="item.id" v-for="item in news" :key="item.id" @click="turnNews($event)">
            <al :data-id="item.id" style="text-decoration: none;" href="">
              <div :data-id="item.id" class="left">
              <div :data-id="item.id" class="inner">
                <img :data-id="item.id" :src="item.coverImg" alt="">
              </div>
            </div>
            <div  :data-id="item.id" class="right">
              <div  :data-id="item.id" class="txt header">{{ item.title }}</div>
              <div :data-id="item.id" class="txt p">{{ item.title }}</div>
              <div :data-id="item.id" class="txt time">{{ item.newsTime }}</div>
            </div>
            </al>
          </div>
        </div>
        <div class="footer">
          <a style="text-decoration: none;" href="#/new"><div class="btn">MORE</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  created () {
    this.initNew()
    this.initProject()
    this.init()
  },
  data () {
    return {
      projects: null,
      news: null,
      text: null,
      img: [{
        url: 'https://zqc-blog-img.oss-cn-beijing.aliyuncs.com/https://zqc-blog-img.oss-cn-beijing.aliyuncs.com%E8%BD%AE%E6%92%AD%E5%9B%BE6.png',
        title: '以质量求生存，以质量求发展，向质量要效益'
      }, {
        url: 'https://zqc-blog-img.oss-cn-beijing.aliyuncs.com/https://zqc-blog-img.oss-cn-beijing.aliyuncs.com%E8%BD%AE%E6%92%AD%E5%9B%BE7.png',
        title: '克服困难，精心施工，优质、安全、准点完成工程建设任务'
      }, {
        url: 'https://zqc-blog-img.oss-cn-beijing.aliyuncs.com/https://zqc-blog-img.oss-cn-beijing.aliyuncs.com%E8%BD%AE%E6%92%AD%E5%9B%BE4.png',
        title: '一人把关一处安，众人把关稳如山'
      }, {
        url: 'https://zqc-blog-img.oss-cn-beijing.aliyuncs.com/https://zqc-blog-img.oss-cn-beijing.aliyuncs.com%E8%BD%AE%E6%92%AD%E5%9B%BE3.png',
        title: ' 团队目标心中记，融入集体尽全力'
      }]
    }
  },
  methods: {
    async initNew () {
      await this.$axios.get('/news/front/getByType?type=公司动态').then((res) => {
        if (res.data.code === 200 && res.data.msg === '获取公司动态成功') {
          this.news = res.data.data.slice(0, 4)
        }
      })
    },
    async init () {
      await this.$axios.get('/company/front/getByType?type=introduce').then((res) => {
        if (res.data.code === 200 && res.data.msg === 'introduce信息查询成功') {
          this.text = res.data.data
        }
      })
    },
    turn (e) {
      this.$router.push({ name: 'Info', params: { id: e.target.dataset.id } })
      localStorage.setItem('proId', e.target.dataset.id)
    },
    turnNews (e) {
      console.log(e)
      this.$router.push({ name: 'newInfo', params: { id: e.target.dataset.id } })
      localStorage.setItem('newId', e.target.dataset.id)
    },
    async initProject () {
      await this.$axios.get('/project/front/getAll').then((res) => {
        if (res.data.code === 200 && res.data.msg === '项目信息获取成') {
          this.projects = res.data.data.slice(0, 6)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@color-yellow: #801EAF;

.home{
  .carousel{
    width: 100%;
    height: 47rem;
    position: relative;
    h3{
      cursor: default;
    }
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      background-color: rgba(0, 0, 0, .5);
      z-index: 6;
    }
    .el-carousel{
      width: 100%;
      height: 100%;
      .el-carousel___container{
        width: 100%;
        height: 100%;
        .el-carousel__item{
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
      /deep/.el-carousel__indicators--horizontal{
        bottom: 13.4286rem;
        left: 15%;
        .el-carousel__arrow{
          background-color: rgb(177,177,177);
        }
        .is-active{
          .el-carousel__button{
            width: 2rem;
            height: .7143rem;
            background-color: @color-yellow;
          }
        }
        .el-carousel__button{
          width: 1.1429rem;
          height: .7143rem;
          background-color: #fff;
        }
      }
    }
  }
  .project{
    width: 100%;
    height: 93.3rem;
    .main{
      width: 78%;
      height: 100%;
      position: relative;
      margin: 0 auto;
      .title{
        width: 100%;
        height: 10.7143rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: default;
        span{
          font-size: 1.7143rem;
        }
        .line{
          height: .7143rem;
          width: 3.5714rem;
          border-bottom: .3571rem solid #00b4ff;
        }
        .en{
          width: 57.1429rem;
          font-size: 1rem;
          text-align: center;
          margin-top: 1.4286rem;
          color: #B3ABB3;
        }
      }
      .body{
        width: 100%;
        height: 75.7143rem;
        display: flex;
        flex-flow: row wrap;
        .cards{
          height: 35.7143rem;
          width: 25rem;
          margin-right: 1rem;
          border: 1px solid #E5E5E5;
          cursor: pointer;
          .img{
            width: 100%;
            height: 80%;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: all .6s;
            // background: url(../assets/images/default.png) no-repeat;
            // background-size: cover;
            img{
              height: 100%;
              width: 100%;
              transition: all .6s;
            }
            .mask{
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background-color: rgba(0,0,0,0);
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all .6s;
              .txt{
                transition: all .6s;
                font-size: 1.5714rem;
                color: transparent;
                border: .1429rem solid transparent;
                border-left: none;
                border-right: none;
                cursor: pointer;
              }
            }
          }
          .desc{
            height: 20%;
            width: 90%;
            transform: translateX(5%);
            .name{
              width: 100%;
              height: 3.5714rem;
              border-bottom: .0714rem solid #E5E5E5;
              text-align-last: left;
              font-size: 1.2857rem;
              line-height: 3.5714rem;
            }
            .detail{
              border: none;
              font-size: 1.1429rem;
              .arrow{
                float: right;
                margin-top: 1.0714rem;
                height: 1.4286rem;
                width: 3.5714rem;
                background: url(../assets/images/icon_arrow_r_dark.png) no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
        .cards:hover{
          .img{
            img{
              transform: scale(1.1);
            }
            .mask{
              background-color: rgba(0,0,0,.1);
              .txt{
              font-size: 1.5714rem;
              color: white;
              border: .1429rem solid white;
              border-left: none;
              border-right: none;
            }
            }
          }
        }
        .cards:nth-child(3n){
          margin: 0;
        }
      }
      .footer{
        width: 100%;
        height: 6.7857rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
          cursor: pointer;
          width: 9.2857rem;
          height: 2.8571rem;
          font-size: 1.3571rem;
          text-align: center;
          line-height: 2.8571rem;
          border: .0714rem solid #00b4ff;
          color: #00b4ff;
        }
        .btn:hover{
          background-color: #00b4ff;
          color: white;
        }
      }
    }
  }
  .about{
    width: 100%;
    height: 25rem;
    display: flex;
    background-color: #c8e8f9;
    .left{
      float: left;
      width: 55%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: top;
      align-items: left;
      flex-direction: column;
      .box{
        width: 80%;
        margin-left: 10%;
      }
      .title{
          font-size: 1.7143rem;
          margin-top: 2.1429rem;
        }
      .line{
        height: .7143rem;
        width: 3.5714rem;
        border-bottom: .3571rem solid #00b4ff;
      }
      .p{
        font-size: 1rem;
        text-align: left;
        line-height: 1.7rem;
        margin-top: 1.4286rem;
        color: #000;
      }
      .btn{
        position: absolute;
        background-color: #fff;
        width: 8.5714rem;
        height: 2.8571rem;
        color: white;
        font-size: 1.1429rem;
        text-align: center;
        line-height: 2.8571rem;
        background-color: #313131;
        bottom: 10%;
        left: 10%;
        transition: all .6s;
      }
      .btn:hover{
        background-color: #00b4ff;
        color: white;
      }
    }
    .right{
      float: left;
      width: 45%;
      height: 100%;
      background: url('../assets/images/build.jpg') no-repeat;
      background-size: 100% 100%;
    }
  }
  .new{
    height: 50rem;
    .main{
      .body{
        height: 30.7143rem;
        .cards:nth-child(3n){
          margin-right: 2rem;
        }
        .cards{
          height: 13.5714rem;
          width: 38rem;
          margin-right: 2rem;
          background-color: #F7F7F7;
          border: none;
          .left{
            width: 40%;
            height: 100%;
            float: left;
            .inner{
              width: 84%;
              height: 70%;
              margin: 0 auto;
              transform: translateY(23%);
              background-color: #fff;
              overflow: hidden;
              img{
                height: 100%;
                width: 100%;
                transition: all .6s;
              }
            }
          }
          .right{
            width: 60%;
            float: left;
            .txt{
              height: 100%;
              width: 90%;
              color: #676768;
              transition: all .6s;
            }
            .header{
              font-size: 1.4286rem;
              color: black;
              margin: 2.1429rem 0 1.4286rem 0;
            }
            .p{
              font-size: 1.1429rem;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
              overflow:hidden;
              white-space:no-wrap;
              text-overflow: ellipsis;
            }
            .time{
              font-size: 1.0714rem;
              margin-top: 1.0714rem;
            }
          }
        }
        .cards:hover{
          .left{
            .inner{
              img{
                transform: scale(1.1);
              }
            }
          }
          .right{
            .header{
              transform: translateX(4%);
              color: #00b4ff;
            }
          }
        }
        .cards:nth-child(2n){
          margin-right: 0;
        }
      }
    }
  }
}
</style>
