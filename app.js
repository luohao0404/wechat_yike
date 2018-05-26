//app.js
App({
  onLaunch: function () {
    // do nothing.
  },
  globalData: {
    selectedArrays_gl:[],

    questionSet_gl : {
      "1": {
        "qText": "请问您要将一克送给生命中哪位特别的人？",
        "buttons": [ {id:"a1",text:"亲人"}, {id:"a2",text:"朋友"}, {id:"a3",text:"爱人"}, {id:"a4",text:"自己"}]
      },
      "2": {
        "qText": "请问您要与几人分享一克？",
        "buttons": [{ id: "a1", text: "一人食" }, { id: "a2", text: "2-4人" }, { id: "a3", text: "6-8人" }]
      }
    },

    lastQuestions_gl : [2, 3],

    resultDict_gl : {
      "1-a1,2-a1":"西西里之春小",
      "1-a1,2-a2": "智利印记大",

      "defult":"这是默认值"
    }
  }



})