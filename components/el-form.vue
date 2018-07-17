<template>
  <div class="el-form"> <!--form event stop -->
    <slot/>
  </div>
</template>

<script>
  export default{
    name: 'ElForm',
    props: {
      formData: Object,
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

      }
    }
  }
</script>