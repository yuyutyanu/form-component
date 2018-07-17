<template>
  <section class="container">
    <el-form :form-data="formData" :rules="rules" ref="validateForm">
      <el-form-item>
        <el-input></el-input>
      </el-form-item>
      <div>
      <el-form-item>
        <el-button @click="submitForm('validateForm')">送信！</el-button>
      </el-form-item>
      </div>
    </el-form>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        formData: {
          name: 'hoge'
        },
        rules:{
          rule1:'しぇけなべいべ'
        }
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate()
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
