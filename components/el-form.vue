<template>
  <section>
    <div>
      <slot/>
    </div>
  </section>
</template>

<script>
  export default{
    name:'ElForm',
    props: {
      formData: Object,
    },
    created() {
      this.$on('el.form.addField', (field) =>{
        if(field){
          this.fields.push(field)
        }
      })
    },
    data(){
      return {
        fields: []
      }
    }
  }
</script>