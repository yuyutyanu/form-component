<template>
  <form class="el-form" @submit.prevent="$emit('sbumit')"> <!--form event stop -->
    <slot/>
  </form>
</template>

<script>
  export default{
    name: 'ElForm',
    componentName: 'ElForm',
    props: {
      formItems: Object,
      rules:Object
    },
    created() {
      this.$on('el.form.addField', (field) => {
        if (field) {
          this.fields.push(field)
        }
      })
    },
    data(){
      return {
        fields: []
      }
    },
    methods: {
      validate(){
        this.fields.forEach(field => {
          field.validate()
        })
      }
    }
  }
</script>