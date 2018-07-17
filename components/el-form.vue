<template>
  <div class="el-form"> <!--form event stop -->
    <slot/>
  </div>
</template>

<script>
  export default{
    name: 'ElForm',
    componentName: 'ElForm',
    props: {
      formData: Object,
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