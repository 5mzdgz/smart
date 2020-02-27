// pages/component/test/test.js
const app = getApp();
Page({
  /**
   * 组件的初始数据
   */
  data: {
    showIcon: false,
    title: '商家',
    navbarInitTop: app.globalData.navHeight, //导航栏初始化距顶部的距离
    isFixedTop: false, //是否固定顶部
    swiperData: {
      height: 200, //轮播图高度
      circular: true, //轮播衔接
      duration: 500, //切换动作时间
      interval: 5000, //切换间隔时间
      autoplay: true, //是否自动切换
      indicatorDots: true, // 是否显示指示点
      vertical: false, //是否纵向滚动
      current: 0, //滚动到当前项
      onChange: 'swiperBannerChange', //change事件名称
      swiperArr: [{
        id: 1,
        imgUrl: '/assets/icons/home.png'
      },
      {
        id: 1,
        imgUrl: '/assets/icons/home_active.png'
      },
      {
        id: 1,
        imgUrl: '/assets/icons/home.png'
      }
      ]
    }
  },
  onShow: function () {
    
  },
  /**
   * 监听页面滑动事件
   */
  onPageScroll: function (e) {
    var that = this;
    var scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度

    //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
    var isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (that.data.isFixedTop === isSatisfy) {
      return false;
    }
    console.log(isSatisfy)
    that.setData({
      isFixedTop: isSatisfy
    });
  }
})
