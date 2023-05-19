<template>
  <div class="main">
    <div :data-id="project.id" class="box img">
      <img :src="project.coverImg" alt="">
    </div>
    <div class="box txt">
      <div>{{project.projectName}}</div>
      <div class="time">项目时间：<br/>{{project.timePeriod}}</div>
      <div class="title">项目简述</div>
      <div class="p">{{ project.projectDescribe }}</div>
    </div>
    <div class="title">项目详情</div>
    <div class="bodys" v-html="this.project.projectHtml"></div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      project: null
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      const id = this.$route.params.id ? this.$route.params.id : localStorage.getItem('proId')
      await this.$axios.get('/project/front/getById?id=' + id).then((res) => {
        if (res.data.code === 200 && res.data.msg === '根据id获取项目信息成功') {
          this.project = res.data.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  min-height: 50rem;
  width: 100%;
  color: #000;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  padding-top: 2.8571rem;
  flex-wrap: wrap;
  align-items: flex-start;
  .box{
    min-height: 35.7143rem;
    width: 29.5rem;
    img{
      width: 100%;
      height: 30.7143rem;
    }
  }
  .txt{
    min-height: 35.7143rem;
    padding-left: 2.8571rem;
    div{
      font-size: 2.6rem;
      margin: 2rem 0;
    }
    .time{
      font-size: 1.8rem;
    }
    .p{
      width: 28.5714rem;
      min-height: 3rem;
      word-wrap:break-word;
      margin-top: .7143rem;
      font-size: 1.2rem;
    }
  }
  .title{
      font-size: 1.7rem;
      font-weight: bold;
      margin-bottom: 0;
      text-align: left;
      width: 100%;
    }
  .bodys{
    min-height: 35.7143rem;
    width: 100%;
    margin-right: 10rem;
  }
}
</style>
