<template>
  <div class="el-form-item">
    <slot/>
    <div v-if="validateState">
      <p v-for="(validateMessage) in validateMessages"
         :key="validateMessage.message">
        {{validateMessage.message}}
      </p>
    </div>
  </div>
</template>

<script>
  import Joi from 'joi-browser'
  import { domains } from '~/validation/domains.js'
  export default{
    name: 'ElFormItem',
    props: {
      prop: String
    },
    mounted(){
      this.$parent.$emit('el.form.addField', this)
    },
    data(){
      return {
        validateState: false,
        validateMessages: []
      }
    },
    computed: {
      form(){
        let parent = this.$parent
        while (parent.$options.componentName != 'ElForm') {
          parent = parent.$parent
        }
        return parent
      }
    },
    methods: {
      validate(){
        if (!this.form.rules || !this.prop) return
        this.validateState = false
        this.validateMessages = []
        const formItem = this.form.formItems[this.prop]
        const rules = this.form.rules[this.prop]

        rules.forEach((rule) =>{
          const schema = {[this.prop]: domains[rule.type]}
          const {error} = Joi.validate({[this.prop]: formItem}, schema)
          if(error){
            this.validateMessages.push({message: rule.message})
          }
        })
        this.validateState = Boolean(this.validateMessages)
      }
    }
  }
</script>