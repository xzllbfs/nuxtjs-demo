module.exports = {
  router: {
    // 根路径
    base: '/app/',
    // routes：数组，路由配置表
    // resolve：解析路由组件路径
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}