<!--
 * @Author: Orginly
 * @Date: 2021-02-10 12:30:42
 * @LastEditors: Orginly
 * @LastEditTime: 2021-02-19 15:28:39
-->
<template>
  <a-modal
    :title="title"
    :width="640"
    :visible="visible"
    :confirmLoading="loading"
    @ok="
      () => {
        $emit('ok')
      }
    "
    @cancel="
      () => {
        $emit('cancel')
      }
    "
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <!-- 检查是否有 id 并且大于0，大于0是修改。其他是新增，新增不显示主键ID -->
        <a-form-item v-show="model && model.id > 0" label="ID">
          <a-input v-decorator="['id', { initialValue: 0 }]" disabled />
        </a-form-item>
        <a-form-item label="用户名">
          <a-input
            v-decorator="['username', { rules: [{ required: true, min: 2, message: '请输入正确的用户名' }] }]"
            placeholder="请输入手机号"
          />
        </a-form-item>
        <a-form-item label="所属角色">
          <a-select placeholder="请选择角色">
            <a-select-option key="+86" value="+86">+86</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="昵称">
          <a-input
            v-decorator="['nickname', { rules: [{ required: false, min: 2, message: '请输入大于两位的昵称' }] }]"
            placeholder="请输入手机号"
          />
        </a-form-item>
        <a-form-item label="密码" v-if="!model">
          <a-input-password
            v-decorator="['password', { rules: [{ required: true, min: 6, message: '密码需要大于6位' }] }]"
            placeholder="请输入密码"
          />
        </a-form-item>
        <a-form-item label="确认密码" v-if="!model">
          <a-input-password
            v-decorator="['password_confirm', { rules: [{ required: true, min: 6, message: '密码需要大于6位' }] }]"
            placeholder="请输入密码"
          />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

// 表单字段
const fields = ['username', 'password', 'password_confirm', 'nickname', 'id']

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    model: {
      type: Object,
      default: () => null
    }
  },
  data () {
    this.formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      }
    }
    return {
      form: this.$form.createForm(this),
      title: '添加用户' // 标题
    }
  },
  created () {
    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })
  },
  mounted () {
    if (this.model && this.model.id > 0) {
      this.title = '修改用户'
    }
  }
}
</script>
