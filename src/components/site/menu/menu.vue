<template>
    <i-menu ref="menu" theme="light" width="auto" accordion @on-select="selectMenuItem" :active-name="activeName" :open-names="openNames">
        <i-submenu v-for="(menu,index) in menus" :key="index" :name="menu.name">
            <template slot="title">
                <Icon :type="menu.icon"></Icon>
                 {{ menu.title }}
            </template>
            <menu-item v-for="(menuChild, childIndex) in menu.children" :key="childIndex" :name="menuChild.route">
                {{ menuChild.title }}
            </menu-item>
        </i-submenu>
    </i-menu>
</template>

<script>
import menus from '../../../utils/consts/menu.js'

export default {
  name: 'vMenu',
  data: function () {
    return {
      menus,
      activeName: '',
      openNames: []
    }
  },
  created: function () {
    this.setActiveName()
  },
  methods: {
    selectMenuItem: function (name) {
      this.$router.push(name)
    },
    setActiveName: function () {
      // 获取activeName 并重设
      let currentPath = this.$route.path
      this.activeName = '/' + currentPath.split('/')[1]
      // 获取openName 并重设
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].children.find(data => data.route === this.activeName)) {
          this.openNames = [this.menus[i].name]
          break
        }
      }
      // 刷新 menu
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
    }
  }
}
</script>
