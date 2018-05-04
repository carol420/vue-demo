<style scoped>
.i-layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>

<template>
<div class="i-layout">
    <i-layout>
        <v-header></v-header>
        <i-layout>
            <i-sider hide-trigger :style="{background: '#fff'}">
                <v-menu></v-menu>
            </i-sider>
            <i-layout :style="{padding: '0 24px 24px'}">
                <router-view></router-view>
            </i-layout>
        </i-layout>
    </i-layout>
</div>
</template>

<script>
import vHeader from '@/components/site/header/header'
import vMenu from '@/components/site/menu/menu'

export default {
  components: {
    vHeader,
    vMenu
  }
}
</script>
