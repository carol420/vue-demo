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
        route: '/trend-chart'
      }
    ]
  },
  {
    name: 'business-management',
    title: '平台管理',
    icon: 'android-cart',
    children: [
      // {
      //   title: '商家管理',
      //   route: '/merchants'
      // },
      // {
      //   title: '用户管理',
      //   route: '/users'
      // },
      {
        title: '商品管理',
        route: '/products'
      },
      {
        title: '订单管理',
        route: '/orders'
      }
    ]
  }
  // {
  //   name: 'info',
  //   title: '个人中心',
  //   icon: 'android-settings',
  //   children: [
  //     {
  //       title: '个人信息',
  //       route: '/info'
  //     }
  //   ]
  // }
]
