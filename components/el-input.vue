<template>
  <div>
    <input type="text">
  </div>
</template>

<script>
  export default{
    name:'ElInput',
    mounted(){
       this.$parent.$emit('el.form.addField', this)
    }
  }
</script>