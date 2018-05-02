export default [
  {
    name: 'data-statistics',
    title: '数据统计',
    icon: 'compose',
    children: [
      {
        title: '人员分布',
        route: '/personnel-distribution'
      },
      {
        title: '走势图',
        route: '/trend chart'
      }
    ]
  },
  {
    name: 'business-management',
    title: '平台管理',
    icon: 'android-cart',
    children: [
      {
        title: '商家列表',
        route: '/merchants'
      },
      {
        title: '用户列表',
        route: '/users'
      },
      {
        title: '商品列表',
        route: '/products'
      },
      {
        title: '订单列表',
        route: '/orders'
      }
    ]
  },
  {
    name: 'info',
    title: '个人中心',
    icon: 'android-settings',
    children: [
      {
        title: '个人信息',
        route: '/info'
      }
    ]
  }
]
