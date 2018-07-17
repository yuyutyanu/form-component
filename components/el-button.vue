<template>
  <button @click="handleClick">
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