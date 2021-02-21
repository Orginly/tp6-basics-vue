/*
 * @Author: Orginly
 * @Date: 2021-02-19 14:24:43
 * @LastEditors: Orginly
 * @LastEditTime: 2021-02-19 15:21:35
 */
import request from '@/utils/request'

const roleApi = {
  // 后台用户
  AdminList: '/sys/admin/list', // 系统用户列表
  AdminAdd: '/sys/admin/add', // 系统添加用户
  AdminEdit: '/sys/admin/edit', // 系统编辑用户
  AdminDel: '/sys/admin/del',
  // 角色管理
  RoleList: '/sys/role/list',
  RoleAdd: '/sys/role/add',
  RoleEdit: '/sys/role/edit',
  Roledel: '/sys/role/del'
}

// 系统用户列表
export function adminList (parameter) {
  return request({
    url: roleApi.AdminList,
    method: 'post',
    data: parameter
  })
}

// 系统用户添加
export function adminAdd (parameter) {
  return request({
    url: roleApi.AdminAdd,
    method: 'post',
    data: parameter
  })
}
// 系统用户添加
export function adminEdit (parameter) {
  return request({
    url: roleApi.AdminEdit,
    method: 'post',
    data: parameter
  })
}
// 系统用户添加
export function adminDel (parameter) {
  return request({
    url: roleApi.AdminDel,
    method: 'post',
    data: parameter
  })
}

/** **** 角色管理 *******/
export function roleList (parameter) {
  return request({
    url: roleApi.RoleList,
    method: 'post',
    data: parameter
  })
}
export function roleAdd (parameter) {
  return request({
    url: roleApi.RoleAdd,
    method: 'post',
    data: parameter
  })
}
export function roleEdit (parameter) {
  return request({
    url: roleApi.RoleEdit,
    method: 'post',
    data: parameter
  })
}
export function roleDel (parameter) {
  return request({
    url: roleApi.RoleDel,
    method: 'post',
    data: parameter
  })
}
