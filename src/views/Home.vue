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
          <div class="en">Every success can not be separated from teamwork, hard work and down-to-earth efforts.</div>
        </div>
        <div class="body">
          <div class="cards">
            <a href="#/project">
              <div class="img">
              <img src="../assets/images/home_project_one.jpg" alt="">
              <div class="mask">
                <div class="txt">广州核岛</div>
              </div>
            </div>
            </a>
            <div class="desc">
              <div class="name">广州核岛</div>
              <div class="name detail">Details
                <div class="arrow"></div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="../assets/images/home_project_two.jpg" alt="">
              <div class="mask">
                <div class="txt">广州核岛</div>
              </div>
            </div>
            <div class="desc">
              <div class="name">广州核岛</div>
              <div class="name detail">Details
                <div class="arrow"></div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="../assets/images/home_project_three.jpg" alt="">
              <div class="mask">
                <div class="txt">广州核岛</div>
              </div>
            </div>
            <div class="desc">
              <div class="name">广州核岛</div>
              <div class="name detail">Details
                <div class="arrow"></div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="../assets/images/home_project_four.jpg" alt="">
              <div class="mask">
                <div class="txt">广州核岛</div>
              </div>
            </div>
            <div class="desc">
              <div class="name">广州核岛</div>
              <div class="name detail">Details
                <div class="arrow"></div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="../assets/images/home_project_five.jpg" style="width:140%" alt="">
              <div class="mask">
                <div class="txt">广州核岛</div>
              </div>
            </div>
            <div class="desc">
              <div class="name">广州核岛</div>
              <div class="name detail">Details
                <div class="arrow"></div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="../assets/images/home_project_six.jpg" style="width:140%" alt="">
              <div class="mask">
                <div class="txt">广州核岛</div>
              </div>
            </div>
            <div class="desc">
              <div class="name">广州核岛</div>
              <div class="name detail">Details
                <div class="arrow"></div>
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
        <div class="box p">长沙建强建筑劳务有限公司成立于2010年，劳务承包壹级企业，注册资金达人民币1000万元，公司主要承接工业与民用建筑、室内（外）装修装饰、桥梁道路隧道工程、水电暖卫等工程项目施工。公司在湘、琼、黔、赣、鄂、豫、晋等地拥有职工5000余人，其中包括管理人员及特殊工种人员，一线作业人员持证率达100%，公司拥有施工中小型机械及仪器设备多套，具备完成各类建筑、市政、机电、公路等相关施工任务的能力。</div>
        <a style="text-decoration: none;" href="#/about"><div class="btn">MORE</div></a>
      </div>
      <div class="right"></div>
    </div>
    <div class="new project">
      <div class="main">
        <div class="title">
          <span>新闻中心 News Center</span>
          <div class="line"></div>
          <div class="en">Every success can not be separated from teamwork, hard work and down-to-earth efforts.</div>
        </div>
        <div class="body">
          <div class="cards">
            <a style="text-decoration: none;" href="#/new">
              <div class="left">
              <div class="inner">
                <img src="../assets/images/home_new_one.png" alt="">
              </div>
            </div>
            <div class="right">
              <div class="txt header">海峡两岸一家亲，建强团队众人行</div>
              <div class="txt p">海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，</div>
              <div class="txt time">2021-09-15</div>
            </div>
            </a>
          </div>
          <div class="cards">
            <a style="text-decoration: none;" href="#/new">
              <div class="left">
              <div class="inner">
                <img src="../assets/images/home_new_two.png" alt="">
              </div>
            </div>
            <div class="right">
              <div class="txt header">海峡两岸一家亲，建强团队众人行</div>
              <div class="txt p">海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，</div>
              <div class="txt time">2021-09-15</div>
            </div>
            </a>
          </div>
          <div class="cards">
            <a style="text-decoration: none;" href="#/new">
              <div class="left">
              <div class="inner">
                <img src="../assets/images/home_new_three.png" alt="">
              </div>
            </div>
            <div class="right">
              <div class="txt header">海峡两岸一家亲，建强团队众人行</div>
              <div class="txt p">海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，</div>
              <div class="txt time">2021-09-15</div>
            </div>
            </a>
          </div>
          <div class="cards">
            <a style="text-decoration: none;" href="#/new">
              <div class="left">
              <div class="inner">
                <img src="../assets/images/home_new_four.png" alt="">
              </div>
            </div>
            <div class="right">
              <div class="txt header">海峡两岸一家亲，建强团队众人行</div>
              <div class="txt p">海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，海峡两岸一家亲，建强团队众人行怀揣着激动已久的心情，时间终于来到了2019年7月13日。今天，</div>
              <div class="txt time">2021-09-15</div>
            </div>
            </a>
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
  data () {
    return {
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
