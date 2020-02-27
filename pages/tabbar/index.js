let app = getApp()

Page({
  data: {
    currentTab: 0,
    //这里只做tab名和显示图标
    items: [
      {
        "text": "首页",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      }, 
      {
        "text": "发现",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      }, 
      {
        "text": "扫一扫",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "商家",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "我的",
        "iconPath": "/assets/icons/mine.png",
        "selectedIconPath": "/assets/icons/mine_active.png"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(1111)
  },
})
