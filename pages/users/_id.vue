<template>
  <div>
    <h1>动态路由 user/:id?</h1>
    路由参数：{{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'userPage'
}
</script>

<style>

</style>