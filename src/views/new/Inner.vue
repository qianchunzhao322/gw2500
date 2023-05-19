<template>
  <div class="main">
    <ul>
      <li :data-id="item.id" v-for="item in news" :key="item.id" @click="turn($event)"><span :data-id="item.id"> {{ item.title }}</span><span :data-id="item.id" class="time">{{ item.newsTime }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Inner',
  data () {
    return {
      news: null
    }
  },
  created () {
    this.init()
  },
  beforeDestroy () {
    localStorage.removeItem('newId')
  },
  methods: {
    async init () {
      await this.$axios.get('/news/front/getByType?type=公司动态').then((res) => {
        if (res.data.code === 200 && res.data.msg === '获取公司动态成功') {
          this.news = res.data.data
        }
      })
    },
    turn (e) {
      this.$router.push({ name: 'newInfo', params: { id: e.target.dataset.id } })
      localStorage.setItem('newId', e.target.dataset.id)
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  ul{
    width: 100%;
    padding: 0;
      li{
        height: 2.4rem;
        margin: 10px 0;
        list-style: none;
        background-color: #fff;
        padding: 0 30px;
        cursor: pointer;
        transition: all .6s;
        span{
          transition: all .6s;
          float: left;
          color: #000;
          font-size: 16px;
          font-size: 1.2857rem;
          line-height: 1.9;
        }
        .time{
          color: grey;
          float: right;
        }
      }
      li:hover{
        background-color: rgb(247, 247, 247);
        span{
          color: #00B4FF;
        }
      }

  }
}
</style>
