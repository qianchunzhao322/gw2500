<template>
  <div class="main" v-html="this.position">
  </div>
</template>
<script>
export default {
  name: 'Position',
  data () {
    return {
      position: null
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      await this.$axios.get('/company/front/getByType?type=job').then((res) => {
        if (res.data.code === 200 && res.data.msg === 'job信息查询成功') {
          this.position = res.data.data.content
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main{
}
</style>
