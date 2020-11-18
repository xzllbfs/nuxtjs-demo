<template>
  <div>
    <h1>hello Nuxt.js!</h1>
    <!-- a链接 -->
    <h2>a链接</h2>
    <a href="/app/about">关于</a>

    <!-- 导航链接 -->
    <h2>导航链接</h2>
    <router-link to="/about">关于</router-link>
    <nuxt-link to="/about">关于</nuxt-link>
  
    <!-- 编程式导航 -->
    <h2>编程式导航</h2>
    <button @click="onClick">关于</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // default 为布局组件的默认的名称
  layout: 'default',
  methods: {
    onClick () {
      this.$router.push('/about')
    }
  }
}
</script>

<style>

</style>