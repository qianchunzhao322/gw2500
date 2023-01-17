<template>
  <div class="main">
    <div :data-id="project.id" class="box img">
      <img :src="project.coverImg" style="width:100%; height:100%" alt="">
    </div>
    <div class="box txt">
      <div>{{project.projectName}}</div>
      <div class="time">项目起止时间：<br/>{{project.timePeriod}}</div>
      <div class="title">项目描述</div>
      <div class="p">{{ project.projectDescribe }}</div>
    </div>
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
  min-height: 40rem;
  width: 100%;
  color: #000;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
    height: 35.7143rem;
    width: 29.5rem;
  }
  .txt{
    padding-left: 2.8571rem;
    div{
      font-size: 3rem;
      margin: 2rem 0;
    }
    .time{
      font-size: 1.8rem;
    }
    .title{
      font-size: 1.5rem;
      margin-bottom: 0;
    }
    .p{
      width: 28.5714rem;
      height: 14.2857rem;
      word-wrap:break-word;
      margin-top: .7143rem;
      font-size: 1.2rem;
    }
  }
}
</style>
