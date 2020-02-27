// pages/component/test/test.js
import CryptoJS from '../../utils/aes.js'
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showIcon: false,
    title: '首页',
    swiperData: {
      height: 300, //轮播图高度
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
    },
    gridArr: [{
        id: 1,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 2,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 3,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 4,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 5,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 6,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 7,
        title: '园区管网',
        icon: 'icon-fenleifill'
      },
      {
        id: 8,
        title: '园区管网',
        icon: 'icon-fenleifill'
      }
    ],
    newsData: {
      height: 80,
      circular: true,
      duration: 500,
      interval: 3000,
      vertical: true,
      autoplay: true,
      indicatorDots: false,
      onChange: 'swiperNewsChange',
      current: 0,
      text: '今天热门多多！今天热门多多！今天热门多多',
      swiperArr: [{
          id: 1,
          imgUrl: '',
          text: '今天热门多多！今天热门多多！今天热门多多',
        },
        {
          id: 1,
          imgUrl: '',
          text: '今天热门！今天热门多多！今天热门多多',
        },
        {
          id: 1,
          imgUrl: '',
          text: '今天热门多多！今天热门！今天热门多多',
        },
      ]
    },
    cardData: {
      cellData: {
        leftIcon: '',
        rightIcon: 'icon-xiangyou',
        leftName: '热门活动',
        leftSub: 'ACTIVITY',
        rightSub: '更多',
        pageUrl: ''
      },
      contentText: '4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天，4月5日非常愤怒的一天.',
      userHeadImg: '/assets/icons/home.png',
      userName: '无名字的柜子',
      releaseTime: '2020/2/20 14:30',
      leftIcon: 'icon-xiangyou',
      visitors: 8888888
    },
    productList: [
      {
        id: 1,
        productName: '篮球场招租篮球场招租篮球场招租篮球场招租篮球场招',
        productImg: '/assets/icons/home.png',
        address: '广西贵港市港南区中山路118号',
        price: 1000,
        unit: '元/每小时'
      },
      {
        id: 2,
        productName: '篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租篮球场招租',
        productImg: '/assets/icons/home.png',
        address: '广西贵港市港南区中山路118号广西贵港市港南区中山路118号广西贵港市港南区中山路118号广西贵港市港南区中山路118号',
        price: 1000,
        unit: '元/每小时'
      },
      {
        id: 3,
        productName: '篮球场招租篮球场招租篮球场招',
        productImg: '/assets/icons/home.png',
        address: '广西贵港市港南区中山路118号',
        price: 1000,
        unit: '元/每小时'
      }
    ],
    businessData: {
      cellData: {
        leftIcon: '',
        rightIcon: 'icon-xiangyou',
        leftName: '热门商家',
        leftSub: 'BUSINESS',
        rightSub: '',
        pageUrl: ''
      },
      businessList: [
        {
          id: 1,
          businessImg: '/assets/icons/home.png',
          businessName: '后端渣到想打人',
          businessSub: '累计售出99999'
        },
        {
          id: 2,
          businessImg: '/assets/icons/home.png',
          businessName: '请叫我后端渣渣',
          businessSub: '累计售出99999'
        },
        {
          id: 3,
          businessImg: '/assets/icons/home.png',
          businessName: '请叫我后端渣渣渣到',
          businessSub: '累计售出99999'
        }
      ]
    } 
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      this.jiaMi()
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jiaMi() {

      var aseKey = 'ggweijie2020wuye'; //秘钥
      var message = '123';

      //加密
      var encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
      console.log(encrypt);

      var key = CryptoJS.enc.Utf8.parse('ggweijie2020wuye');
      var cipher = CryptoJS.AES.encrypt('123', key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      console.log(cipher.ciphertext.toString(CryptoJS.enc.Base64));


      //解密
      var decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
      console.log(decrypt);
    }
  }
})