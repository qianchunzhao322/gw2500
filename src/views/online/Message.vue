<template>
  <div class="main">
    <div class="box">
      <div class="inner">
        <div class="title">在线联系我们</div>
        <el-row :gutter="15">
  <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
    <el-col :span="12">
      <el-form-item label="" prop="name">
        <el-input v-model="formData.name" placeholder="您的姓名" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="" prop="email">
        <el-input v-model="formData.email" placeholder="您的邮箱" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="" prop="phone">
        <el-input v-model="formData.phone" placeholder="您的电话" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="" prop="company">
        <el-input v-model="formData.company" placeholder="公司名称" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="" prop="desc">
        <el-input v-model="formData.desc" type="textarea" style="height: 5rem;" placeholder="请详细描述您的需求，我们收到后将尽快联系到您"
          :maxlength="300" show-word-limit :autosize="{minRows: 3, maxRows: 5}" :style="{width: '100%'}">
        </el-input>
      </el-form-item>
    </el-col>
  </el-form>
        </el-row>
        <div v-show="alert" style="margin-top: 0rem; margin-left: 10rem; font-size: 1rem; color: #00B4FF;">您的问题已送达，我们会及时回复~</div>
        <div v-show="errors" style="margin-top: 0rem; margin-left: 10rem; font-size: 1rem; color: red;">您的问卷未写完，请继续完善</div>
        <div class="submit" @click="submit" style="margin-top: 1.4rem;">提交留言</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      formData: {
        name: undefined,
        email: undefined,
        phone: undefined,
        company: undefined,
        desc: undefined
      },
      alert: false,
      errors: false,
      rules: {
        name: [{
          required: true,
          message: '您的姓名',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '您的邮箱',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '您的电话',
          trigger: 'blur'
        }],
        company: [{
          required: true,
          message: '公司名称',
          trigger: 'blur'
        }],
        desc: [{
          required: true,
          message: '请详细描述您的需求，我们收到后将尽快联系到您',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submit () {
      if (this.formData.name && this.formData.email && this.formData.phone && this.formData.company && this.formData.desc) {
        this.errors = false
        this.alert = true
      } else {
        this.alert = false
        this.errors = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  width: 100%;
  margin-top: 4.2857rem;
  .box{
    height: 28.5714rem;
    background-color: #F7F7F7;
    .inner{
      padding-right: 6.4286rem;
      /deep/ .el-input--medium .el-input__inner{
        height: 2.5714rem;
      }
      /deep/ .el-form-item{
        margin-bottom: 1.4rem;
      }
      .title{
        font-size: 1.4286rem;
        font-weight: bold;
        padding-top: 2.1429rem;
        color: #E1251B;
        margin: 0px 0 2.8571rem 6.4286rem;
        cursor: default;
      }
      .submit{
        font-size: 1.4286rem;
        height: 2.8571rem;
        width: 11.4286rem;
        line-height: 2.8571rem;
        text-align: center;
        color: white;
        background-color: #E1251B;
        border-radius: .3571rem;
        margin: 0px auto;
        cursor: pointer;
        transition: all .6s;
      }
      .submit:hover{
        background-color: #00B4FF;
      }
    }
  }
}
</style>
