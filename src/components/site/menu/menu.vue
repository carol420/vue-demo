<template>
    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <Submenu v-for="(menu,index) in menus" :key="index" :name="menu.name">
            <template slot="title">
                <Icon :type="menu.icon"></Icon>
                 {{ menu.title }}
            </template>
            <menu-item v-for="(menuChild, childIndex) in menu.children" :key="childIndex" :name="menuChild.route">
                 {{ menuChild.title }}
            </menu-item>
        </Submenu>
    </Menu>
</template>

<script>
import menus from '../../../utils/consts/menu.js'

export default {
  name: 'vMenu',
  data: function () {
    return { menus }
  }
}
</script>
