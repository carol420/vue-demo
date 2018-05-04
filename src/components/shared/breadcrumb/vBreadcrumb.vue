<template>
   <i-breadcrumb>
        <i-breadcrumb-item v-for="item in breadcrumbData" :key="item.title" :to="item.to">{{item.title}}</i-breadcrumb-item>
    </i-breadcrumb>
</template>

<script>
import menus from '@/utils/consts/menu.js'

export default {
  name: 'vBreadcrumb',
  props: ['currentPageTitle'],
  data: function () {
    return {
      breadcrumbData: [],
      menus,
      lastTitle: this.currentPageTitle
    }
  },
  created: function () {
    this.getbreadcrumbData()
  },
  methods: {
    getbreadcrumbData: function () {
      let childName = '/' + this.$route.path.split('/')[1]
      for (let i = 0; i < this.menus.length; i++) {
        let secondMenu = this.menus[i].children.find(data => data.route === childName)
        if (secondMenu) {
          this.breadcrumbData.push({'to': '', 'title': this.menus[i].title})
          this.breadcrumbData.push({'to': secondMenu.route, 'title': secondMenu.title})
          break
        }
      }
      if (this.lastTitle) {
        this.breadcrumbData.push({'to': '', 'title': this.lastTitle})
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" src="./vBreadcrumb.less"></style>
