<template>
  <div class="main" >
{{this.text.content}}
  </div>
</template>
<script>
export default {
  name: 'companyProfile',
  created () {
    this.init()
  },
  data () {
    return {
      text: null
    }
  },
  methods: {
    async init () {
      await this.$axios.get('/company/front/getByType?type=introduce').then((res) => {
        if (res.data.code === 200 && res.data.msg === 'introduce信息查询成功') {
          this.text = res.data.data
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
.main{
  min-height: 20rem;
  font-size: 1.3rem;
}
</style>
