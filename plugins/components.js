import Vue from 'vue'
import ElForm from '~/components/el-form.vue'
import ElInput from '~/components/el-input.vue'

[
  ElForm,
  ElInput
].map(component => {Vue.component(component.name,component)})