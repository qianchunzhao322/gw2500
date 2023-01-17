<template>
  <div class="main">
    <div class="title">{{news.title}}</div>
    <div class="time">{{news.newsTime}}</div>
    <div class="body" v-html="this.news.content"></div>
  </div>
</template>

<script>
export default {
  name: 'newInfo',
  data () {
    return {
      news: null
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      const id = this.$route.params.id ? this.$route.params.id : localStorage.getItem('newId')
      await this.$axios.get('/news/front/getById?id=' + id).then((res) => {
        if (res.data.code === 200 && res.data.msg === '根据id获取新闻信息成功') {
          console.log(res.data.data)
          this.news = res.data.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  width: 100%;
  min-height: 40rem;
  .title{
    height: 3.5714rem;
    width: 100%;
    font-size: 2.1429rem;
    text-align: center;
    line-height: 1.7;
  }
  .time{
    height: 2.1429rem;
    width: 100%;
    font-size: 18px;
    text-align: center;
  }
  .body{
    width: 100%;
    min-height: 22rem;
  }
}
</style>
