<template>
  <div class="project">
      <div class="main">
        <div class="body">
          <div class="cards" @click="turn($event)" v-for="item in projects" :key="item.id">
              <div class="img">
              <img :src="item.coverImg" alt="">
              <div :data-id="item.id" class="mask">
                <div :data-id="item.id" class="txt">{{item.projectName}}</div>
              </div>
            </div>
            <div class="desc">
              <div :data-id="item.id" class="name">{{item.projectName}}</div>
              <div :data-id="item.id" class="name detail">Details
                <div :data-id="item.id" class="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: null
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      await this.$axios.get('/project/front/getAll').then((res) => {
        if (res.data.code === 200 && res.data.msg === '项目信息获取成') {
          this.projects = res.data.data
        }
      })
    },
    turn (e) {
      console.log(e.target.dataset.id)
      this.$router.push({ name: 'Info', params: { id: e.target.dataset.id } })
      localStorage.setItem('proId', e.target.dataset.id)
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  .project{
    width: 100%;
    min-height: 77rem;
    margin-bottom: 5rem;
    .main{
      width: 98%;
      min-height: 77rem;
      position: relative;
      margin: 0 auto;
      .body{
        width: 100%;
        min-height: 35.7143rem;
        display: flex;
        flex-flow: row wrap;
        .cards{
          height: 33rem;
          width: 20rem;
          margin-right: 1rem;
          margin-top: 1rem;
          border: 1px solid #E5E5E5;
          cursor: pointer;
          .img{
            width: 100%;
            height: 80%;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: all .6s;
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
                background: url(../../assets/images/icon_arrow_r_dark.png) no-repeat;
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
          margin-right: 0;
        }
      }
    }
  }
}
</style>
