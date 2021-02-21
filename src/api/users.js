/*
 * @Author: Orginly
 * @Date: 2021-02-10 19:09:49
 * @LastEditors: Orginly
 * @LastEditTime: 2021-02-12 15:46:07
 */
import request from '@/utils/request'

const usersApi = {
  UserList: '/users/list', // 用户列表
  UserAdd: '/users/add', // 添加用户
  UserEdit: '/users/edit', // 编辑用户
  UserDel: '/users/del', // 删除用户
  // 后台用户
  SysAdminList: '/sys_admin/list', // 系统用户列表
  SysAdminAdd: '/sys_admin/add', // 系统添加用户
  SysAdminEdit: '/sys_admin/edit', // 系统编辑用户
  SysAdminDel: '/sys_admin/del'
}

// 用户列表
export function userList (parameter) {
  return request({
    url: usersApi.UserList,
    method: 'post',
    data: parameter
  })
}

// 添加用户
export function userAdd (parameter) {
  return request({
    url: usersApi.UserAdd,
    method: 'post',
    data: parameter
  })
}

// 编辑用户
export function userEdit (parameter) {
  return request({
    url: usersApi.UserEdit,
    method: 'post',
    data: parameter
  })
}

// 软删除用户
export function userDel (parameter) {
  return request({
    url: usersApi.UserDel,
    method: 'post',
    data: parameter
  })
}
