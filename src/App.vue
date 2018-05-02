<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>

<template>
<div class="layout">
    <Layout>
        <v-header></v-header>
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <v-menu></v-menu>
            </Sider>
            <Layout :style="{padding: '0 24px 24px'}">
                <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '658px', background: '#fff'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </Layout>
</div>
</template>

<script>
import vHeader from './components/site/header/header'
import vMenu from './components/site/menu/menu'

export default {
  components: {
    vHeader,
    vMenu
  }
}
</script>
