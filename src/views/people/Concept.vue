<template>
  <div class="main" v-html="this.text.content">
  </div>
</template>
<script>
export default {
  name: 'Concept',
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
      await this.$axios.get('/company/front/getByType?type=idea').then((res) => {
        if (res.data.code === 200 && res.data.msg === 'idea信息查询成功') {
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
}
</style>
