//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    questionId: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    question:'',
    buttons:{}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // page init, to set first quetion 
  onLoad: function () {
    this.setData({
      questionId : 1,
      question: "1, " + app.globalData.questionSet_gl["1"]["qText"],
      buttons: app.globalData.questionSet_gl["1"]["buttons"]
    })
  },

  ansClick: function (e) {
    // get answerId and questionId from screen
    var answerId = e.currentTarget.id;
    var QIdNow = this.data.questionId;

    // push to selectedArrays like "1-a1"
    app.globalData.selectedArrays_gl.push(QIdNow + "-" + answerId);

    console.log("anwser " + QIdNow + ":" + answerId + " button clicked");

    // if last question, jump to result page.
    if (this.isLast(QIdNow)) {
      console.log(QIdNow + " is the last question");

      wx.redirectTo({
        url: '../result/result',
        success: function (res) {
          // success
          console.log("jump to result page");
        },
        fail: function () {
          // fail
          //console.log('sksdfksjfksjf');
        },
        complete: function () {
          // complete
        }
      });
    } 
    // if not last question, set next question.
    else {

      // TODO
      // set next questionId
      var nextQId = this.data.questionId + 1;
      var nextQIdStr = nextQId.toString();


      //set to
      this.setData({
        questionId: nextQId,
        question: nextQId + ", " + app.globalData.questionSet_gl[nextQIdStr]["qText"],
        buttons: app.globalData.questionSet_gl[nextQIdStr]["buttons"]
      })
    }
  },

  isLast: function (QId) {
    var lastQs = app.globalData.lastQuestions_gl;
    return lastQs.includes(QId);
  },



})
