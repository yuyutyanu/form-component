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
    computed:{
      form(){
        let parent = this.$parent
        while(parent.$options.componentName != 'ElForm'){
          parent = parent.$parent
        }
        return parent
      }
    },
    methods: {
      validate(){
        const rules = this.form.rules
      }
    }
  }
</script>