<template>
  <input type="text" class="el-input" @input="$emit('input', $event.target.value)">
</template>

<script>
  export default{
    name: 'ElInput',
    props:["value"],

  }
</script>

<style scoped>

</style>