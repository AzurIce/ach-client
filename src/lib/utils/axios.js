import axios from 'axios'

/**
 * 以 Json 方式发送 POST 请求
 * @param {String} url 请求的 Url
 * @param {Object} data 请求时携带的数据
 */

const host = "http://mc.azurcraft.top:8888"

const headerJSON = { "Content-Type": "application/json" }

export function postByJson(url, data) {
  console.log(data)
  console.log(JSON.stringify(data))
  // if (import.meta.env.DEV) {
  //   url = "http://localhost:8888" + url
  // }
  return new Promise((resolve, reject) => {
    axios.post(host + url, JSON.stringify(data), {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('ACHToken'),
        "Content-Type": "application/json"
      }
    })
      .then((res) => { resolve(res) })
      .catch((err) => { reject(err) })
  })
}

export function get(url) {
  // if (import.meta.env.DEV) {
  //   url = "http://localhost:8888" + url
  // }
  return new Promise((resolve, reject) => {
    axios.get(host + url, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ACHToken') } })
      .then((res) => { resolve(res) })
      .catch((err) => { reject(err) })
  })
}
