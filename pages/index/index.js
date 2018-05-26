//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: "一克小测试",
    welcomeMsg: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一克所有蛋糕都好美，为订购哪一款拿不定主意吗？接受一克助手小测试，只要20秒回答5个小问题，让一克助手帮您选出最合适的宝贝吧！",
    buttonText:"开始测试"
  },

  onLoad: function () {
    // do nothing
  },


  start: function () {
    //关闭当前页面，跳转到应用内的某个页面。
    wx.redirectTo({
      url: '../content/content',
      success: function (res) {
        // success
        //console.log(成功);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },


})


