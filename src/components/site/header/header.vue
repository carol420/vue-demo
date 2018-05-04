<template>
    <i-header>
         <div class="to-login" v-if="!islogin">
              <div>
                  <span @click="changeLogin(true)">登录</span>
                  <span>注册</span>
              </div>
         </div>
        <div class="has-login" v-if="islogin">
            <i-avatar icon="person" size="large"/>
            <div class="login-out" @click="changeLogin(false)">
                <i-icon type="log-out"></i-icon>
            </div>
            <div class="login-user">
                sunxiaoqiu / <span class="auth">管理员</span>
            </div>
            <i-dropdown>
                <div class="demo-i-avatar-badge">
                    <i-badge dot>
                        <i-icon type="android-notifications"></i-icon>
                    </i-badge>
                </div>
                    <i-dropdown-item slot="list">
                    <i-dropdown-item>你有一条订单没有处理...</i-dropdown-item>
                    <i-dropdown-item>你有一条订单没有处理...</i-dropdown-item>
                    <i-dropdown-item>你有一条订单没有处理...</i-dropdown-item>
                    <i-dropdown-item>你有一条订单没有处理...</i-dropdown-item>
                </i-dropdown-item>
            </i-dropdown>
        </div>
    </i-header>
</template>

<script>
export default {
  name: 'vHeader',

  data: function () {
    return {
      islogin: true
    }
  },
  methods: {
    changeLogin: function (status) {
      this.islogin = status
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" src="./header.less"></style>
