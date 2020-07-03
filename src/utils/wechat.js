// import request from './httpRequest'; //笔者自己封装的网络请求类，也可以直接使用uni.request  
import axios from "axios";
var jweixin = require('jweixin-module');

export default {
  //判断是否在微信中  
  isWechat: function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/micromessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  },
  //初始化sdk配置  
  initJssdk: function (callback) {
    let urls = encodeURIComponent(window.location.href.split('#')[0])
    axios.get("http://shenghuojun.zt.raiyi.com/promotion/service/sys/jsConfig?accountUUID=86176aa65a0b428da654f9d9d82ca0f1&url=" + urls).then(res => {
      // axios.get("http://5a88.nat123.net/promotion/service/sys/jsConfig?accountUUID=05f142fe9a194473ba13b60d701771ea&url=" + urls).then(res => {
      let response = res.data.data
      jweixin.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: response["appId"], // 必填，公众号的唯一标识
        timestamp: response["timestamp"], // 必填，生成签名的时间戳
        nonceStr: response["nonce"], // 必填，生成签名的随机串
        signature: response["signature"],// 必填，签名
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
      })
      if (callback) {
        callback(res.data);
      }

    })
  },
  //在需要自定义分享的页面中调用  
  share: function (data, url) {
    url = url ? url : encodeURIComponent(window.location.href.split('#')[0]);
    if (!this.isWechat()) {
      return
    }
    //每次都需要重新初始化配置，才可以进行分享 
    this.initJssdk(function (signData) {
      jweixin.ready(function () {
        var shareData = {
          title: data && data.title ? data.title : signData.site_name,
          desc: data && data.desc ? data.desc : signData.site_description,
          link: url,
          imgUrl: data && data.img ? data.img : signData.site_logo,
          success: function (res) {
            console.log(1234)
          },
          cancel: function (res) {
          }
        }
        //分享给朋友接口  
        jweixin.onMenuShareAppMessage(shareData)

        //分享到朋友圈接口  
        jweixin.onMenuShareTimeline(shareData)
      })
    })
  }
}