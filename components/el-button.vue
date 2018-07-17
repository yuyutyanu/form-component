<template>
  <button
      @click="handleClick"
      class="el-button">
    <slot/>
  </button>
</template>

<script>
  export default{
    name: 'ElButton',
    methods:{
      handleClick(event){
        this.$emit('click', event)
      }
    }
  }
</script>