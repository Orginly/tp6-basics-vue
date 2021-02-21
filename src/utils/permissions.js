/*
 * @Author: Orginly
 * @Date: 2021-02-12 15:16:12
 * @LastEditors: Orginly
 * @LastEditTime: 2021-02-12 15:16:13
 */
export function actionToObject (json) {
  try {
    return JSON.parse(json)
  } catch (e) {
    console.log('err', e.message)
  }
  return []
}
