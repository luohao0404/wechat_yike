//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: "一克助手为您推荐",
    resultMsg: "",
    buttonText:"进入一克公众号"
  },

  onLoad: function () {
    // get selected
    var selectedArrays = app.globalData.selectedArrays_gl;
    console.log("selected:" + selectedArrays);

    // get result
    var key = selectedArrays.join();
    var resultText = app.globalData.resultDict_gl[key];

    // if no result
    if (resultText == null){
      resultText = app.globalData.resultDict_gl["defult"];
    };

    // set to screen
    //set to
    this.setData({
      resultMsg: resultText
    })

  },


  jump: function () {
    // TODO jump to gongzhonghao
  },


})


