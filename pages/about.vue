<template>
  <div>
    <h1>About</h1>
    <nuxt-link to="/">首页</nuxt-link>
    <br>
    {{ message + title }}
    <ul>
      <li v-for="(item, index) in posts" :key="index">
        <nuxt-link :to="`/article/${item.id}`">
        {{ item.desc }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'About',
  // 返回的数据会合并到data中，在服务端先触发，在客户端路由切换后也会触发
  // 当你想要动态页面内容有利于 SEO 或者提升首屏渲染速度的时候使用
  async asyncData () {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/app/data.json'
    })
    return res.data
  },
  // 如果是非异步数据或普通数据，正常初始化到data中
  data () {
    return {
      message: 'Hello-'
    }
  }
}
</script>

<style>

</style>