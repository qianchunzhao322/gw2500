<template>
  <div class="card">
    <div class="top"></div>
    <div class="txt">
      <div class="little">咨询热线</div>
      <div class="phone">{{phone}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: '维护ing'
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      await this.$axios.get('/contact/front/getByContact?contact=热线电话').then((res) => {
        if (res.data.code === 200 && res.data.msg === '联系方式获取成功') {
          this.phone = res.data.data.detail
        } else {
          alert(res.data.msg)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.card{
  .top{
    width: 100%;
    height: 10rem;
    background: url('../assets/images/ct.jpg') no-repeat;
    background-size: contain;
  }
  .txt{
    width: 100%;
    height: 5rem;
    padding-top: 1.4286rem;
    padding-left: .7143rem;
    color: white;
    background-color: #00b4ff;
    cursor: default;
    .little{
      font-size: 1.1429rem;
    }
    .phone{
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>
