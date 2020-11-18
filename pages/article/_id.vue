<template>
  <div>
    <h1>动态路由 user/:id?</h1>
    路由参数：{{ $route.params.id }}

    文章内容：{{ article.desc }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'userPage',
  async asyncData (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/app/data.json'
    })
    const id = Number.parseInt(context.params.id)
    return {
      article: data.posts.find(item => item.id === id)
    }
  }
}
</script>

<style>

</style>