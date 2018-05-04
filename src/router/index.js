import Vue from 'vue'
import Router from 'vue-router'
import view from '@/view/view.vue'

const personnelDistribution = () => import('@/view/personnel-distribution/personnel-distribution.vue')
const trendChart = () => import('@/view/trend-chart/trend-chart.vue')
const products = () => import('@/view/products/products.vue')
const productsList = () => import('@/view/products/products-list/products-list.vue')
const productsDetail = () => import('@/view/products/products-detail/products-detail.vue')
const orders = () => import('@/view/orders/orders.vue')
const ordersList = () => import('@/view/orders/orders-list/orders-list.vue')
const ordersDetail = () => import('@/view/orders/orders-detail/orders-detail.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: view,
      children: [
        {
          path: 'personnel-distribution',
          component: personnelDistribution
        },
        {
          path: 'trend-chart',
          component: trendChart
        },
        {
          path: 'products',
          component: products,
          children: [
            {
              path: '',
              component: productsList
            },
            {
              path: 'detail',
              component: productsDetail
            }, {
              path: 'list',
              component: productsList
            }
          ]
        },
        {
          path: 'orders',
          component: orders,
          children: [
            {
              path: '',
              component: ordersList
            },
            {
              path: 'detail',
              component: ordersDetail
            }, {
              path: 'list',
              component: ordersList
            }
          ]
        }]
    }

  ]

})
