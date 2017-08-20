import jsonp from "common/js/jsonp";
import { commParams, options } from "./config";

export function getRecommend() {
  // 请求的url
  const url =
    "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  const data = Object.assign({}, commParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  });
  return jsonp(url, data, options);
}
