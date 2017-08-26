import jsonp from "common/js/jsonp";
import { commParams, options } from "./config";
import axios from 'axios'

// 获取轮播图的数据
export function getRecommend() {
  // 请求的url
  const url =
    "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  const data = Object.assign({}, commParams, {
    uin: 0,
    platform: "h5",
    needNewCode: 1
  });
  return jsonp(url, data, options);
}

// 获取歌单详情
export function getDiscList() {
  const url = "/api/getDiscList";
  const data = Object.assign({}, commParams, {
    rnd: Math.random(),
    hostUin: 0,
    platform: "yqq",
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29
  });
 return axios.get(url,{
   param:data
 }).then((res)=>{
    return Promise.resolve(res.data)
 })
}
