<template>
  <section class="container">
    <div>
      <h1 class="title">
        <el-form :form-data="formData">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm">送信！</el-button>
          </el-form-item>
        </el-form>
      </h1>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      formData:{
        name:'hoge'
      }
    }
  },
  methods: {
    submitForm(){
      console.log('hoge')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
