// pages/component/test/test.js
Component({
  options: {
    addGlobalClass: true,
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
    title: '个人中心',
    userData: {
      userName: '无名子的柜子',
      autograph: 'a名子的柜子无名子的柜子无名子的柜子无名子的柜子',
      headImg: '/assets/icons/home.png'
    },
    gridArr: [
      {
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
      }
    ],
    cellData: {
      leftIcon: 'icon-xiangyou',
      rightIcon: 'icon-xiangyou',
      leftName: '热门活动',
      leftNameBlod: 'blod',
      leftSub: '',
      rightSub: '',
      pageUrl: ''
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
