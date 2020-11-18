<template>
  <div>
    <h1>hello Nuxt.js!</h1>
    <!-- a链接 -->
    <h1>a链接</h1>
    <a href="/about">关于</a>

    <!-- 导航链接 -->
    <h1>导航链接</h1>
    <router-link to="about">关于</router-link>
    <nuxt-link to="about">关于</nuxt-link>
  
    <!-- 编程式导航 -->
    <h1>编程式导航</h1>
    <button @click="onClick">关于</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    onClick () {
      this.$router.push('/about')
    }
  }
}
</script>

<style>

</style>