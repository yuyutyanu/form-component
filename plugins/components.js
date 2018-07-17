import Vue from 'vue'
import ElForm from '~/components/el-form.vue'
import ElFormItem from '~/components/el-form-item.vue'
import ElInput from '~/components/el-input.vue'
import ElButton from '~/components/el-button.vue'

[
  ElForm,
  ElFormItem,
  ElInput,
  ElButton
].map(component => {Vue.component(component.name,component)})