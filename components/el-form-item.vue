<template>
  <div class="el-form-item">
    <slot/>
  </div>
</template>

<script>
  export default{
    name:'ElFormItem',
    mounted(){
       this.$parent.$emit('el.form.addField', this)
    },
    validate(){

    }
  }
</script>