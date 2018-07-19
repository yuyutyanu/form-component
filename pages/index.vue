<template>
  <section class="container">
    <el-form :formItems="formItems" :rules="rules" ref="validateForm">
      <el-form-item prop="email">
        <el-input v-model="formItems.email"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="formItems.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('validateForm')">送信！</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        formItems: {
          name: 'hoge',
          email:'hogehoge'
        },
        rules:{
          name:[
            {type:'alphanum', message:'英数字で入力してください'},
          ],
          email:[
            {type:'email', message:'Eメール形式で入力してください'},
          ]
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
