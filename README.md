# 服务端渲染

## 什么是渲染

渲染就是将【数据】+【模板】拼接到一起。例如对于我们前端开发者来说最常见的一种场景就是：请求后端接口数据，然后将数据通过模板绑定语法绑定到页面中，最终呈现给用户，这个过程就是我们这里所指的渲染。

## 传统的服务端渲染

最早期，Web 页面渲染都是在服务端完成的，即服务端运行过程中将所需的数据结合页面模板渲染为HTML，响应给客户端浏览器。

业界借鉴了传统的服务端直接输出 HTML 方案，提出**在服务器端执行**前端框架（React/Vue/Angular）**代码生成网页内容**，**然后将渲染好的网页内容返回给客户端**，客户端只需要负责展示就可以了，所以浏览器呈现出来的是直接包含内容的页面。

这种方式的代表性技术有：ASP、PHP、JSP，再到后来的一些相对高级一点的服务端框架配合一些模板引擎。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ec34ef1613a42fb958e1db2022829a6~tplv-k3u1fbpfcp-watermark.image)

这也就是最早的网页渲染方式，动态网站的核心工作步骤。在这样的一个工作过程中，因为页面中的内容不是固定的，它有一些动态的内容。

在这种网页越来越复杂的情况下，这种模式存在很多明显的不足：

- 应用的**前后端部分完全耦合在一起**，在前后端协同开发方面会有非常大的阻力；
- **前端没有足够的发挥空间**，无法充分利用现在前端生态下的一些更优秀的方案；
- 由于内容都是在服务端动态生成的，所以**服务端的压力较大**；
- 相比目前流行的 SPA 应用来说，**用户体验一般**；但是不得不说，在网页应用并不复杂的情况下，这种方式也是可取的。

## 客户端渲染

传统的服务端渲染有很多问题，但是这些问题随着客户端 Ajax 技术的普及得到了有效的解决，Ajax 技术可以使得客户端动态获取数据变为可能，也就是说原本服务端渲染这件事儿也可以拿到客户端做了。

**【后端】负责数据处理，【前端】负责页面渲染**，这种分离模式极大的提高了开发效率和可维护性。这样一来，【前端】更为独立，也不再受限制于【后端】，它可以选择任意的技术方案或框架来处理页面渲染。

随着前端技术栈和工具链的迭代成熟，前端工程化、模块化也已成为了当下的主流技术方案，在这波前端技术浪潮中，涌现了诸如 React、Vue、Angular 等基于客户端渲染的前端框架，这类框架所构建的单页应用（SPA）具有用户体验好、渲染性能好、可维护性高等优点。但也有一些很大的缺陷，其中主要涉及到以下两点：

1. **首屏加载时间过长**

   与传统服务端渲染直接获取渲染好的 HTML 不同，单页应用使用 JavaScript 在客户端生成 HTML来呈现内容，因为 HTML 中没有内容，必须等到 JavaScript 加载并执行完成才能呈现页面内容，这就使得首屏加载时间变长，从而影响用户体验。

2. **不利于 SEO**

   当搜索引擎爬取网站 HTML 文件时，单页应用的 HTML 没有内容，因为他它需要通过客户端 JavaScript 解析执行才能生成网页内容，所以对于目前的搜索引擎爬虫来说，页面中没有任何有用的信息，自然无法提取关键词，进行索引了，而目前的主流的搜索引擎对于这一部分内容的抓取还不是很好。

下面是基于客户端渲染的 SPA 应用的基本工作流程。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b02b0878e5f476ab9a2b83bac1ff66a~tplv-k3u1fbpfcp-watermark.image)

## 现代化的服务端渲染

### 概念

通过服务端渲染首屏直出，解决首屏渲染慢以及不利于 SEO 问题；通过客户端渲染接管页面内容交互得到更好的用户体验，这种方式称之为**现代化的服务端渲染**，也叫**同构渲染**，所谓的同构指的就是 **服务端构建渲染 + 客户端构建渲染**。同理，这种方式构建的应用称之为服务端渲染应用或者是同构应用。

### 基本流程

- 基于 react、vue 框架，客户端渲染和服务器端渲染的结合，在服务器端执行一次，用于实现服务器端渲染（首屏直出），在客户端再执行一次，用于接管页面交互
- 核心解决 SEO 和首屏渲染慢的问题
- 拥有传统服务端渲染的优点，也有客户端渲染的优点

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e6925b5038c4ef6be8ba1464f760c2b~tplv-k3u1fbpfcp-watermark.image)

### 优点

首屏渲染速度快、有利于 SEO。使用Vue，React等框架的官方解决方案，有助于理解原理

### 缺点

1. 开发成本高，开发条件有限：浏览器特定的代码，只能在某些生命周期钩子函数 (lifecycle hook) 中使用；一些

   外部扩展库 (external library) 可能需要特殊处理，才能在服务器渲染应用程序中运行；不能在服务端渲染期间操作DOM；某些代码操作需要区分运行环境。

2. 涉及构建设置和部署的更多要求：与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。

3. 更多的服务器端负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的server 更加大量占用 CPU资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境(high traffic) 下使用，请准备相应的服务器负载，并明智地采用缓存策略

### 首屏渲染速度是否真的重要？

这主要取决于内容到达时间 (time-to-content) 对应用程序的重要程度。例如，如果你正在构建一个内部仪表盘，初始加载时的额外几百毫秒并不重要，这种情况下去使用服务器端渲染 (SSR) 将是一个小题大作之举。然而，内容到达时间 (time-to-content) 要求是绝对关键的指标，在这种情况下，服务器端渲染(SSR) 可以帮助你实现最佳的初始加载性能。

### 是否真的需要SEO？

事实上，很多网站是出于效益的考虑才启用服务端渲染，性能倒是在其次。 假设 A 网站页面中有一个关键字叫“前端性能优化”，这个关键字是 JS 代码跑过一遍后添加到 HTML 页面中的。那么客户端渲染模式下，我们在搜索引擎搜索这个关键字，是找不到 A 网站的——搜索引擎只会查找现成的内容，不会帮你跑 JS 代码。A 网站的运营方见此情形，感到很头大：搜索引擎搜不出来，用户找不到我们，谁还会用我的网站呢？为了把“现成的内容”拿给搜索引擎看，A 网站不得不启用服务端渲染。 但性能在其次，不代表性能不重要。

# Nuxt.js

## 介绍

- 官网：https://zh.nuxtjs.org/

- GitHub 仓库：https://github.com/nuxt/nuxt.js

- Nuxt.js 是一个基于 Vue.js 的服务端渲染应用框架，它可以帮我们轻松的实现同构应用。

  通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 **UI****渲染**。

  我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有Node.js 项目中使用 Nuxt.js。

  Nuxt.js 预设了利用 Vue.js 开发**服务端渲染**的应用所需要的各种配置。

  除此之外，我们还提供了一种命令叫： `nuxt generate` ，为基于 Vue.js 的应用提供生成对应的静态站点的功能。

  我们相信这个命令所提供的功能，是向开发集成各种微服务（Microservices）的 Web 应用迈开的新一步。

  作为框架，Nuxt.js 为 **客户端/服务端** 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等非常实用的功能。

- **Nuxt.js** **框架是如何运作的**

  Nuxt.js 集成了以下组件/框架，用于开发完整而强大的 Web 应用：Vue.js、Vue Router、Vuex、Vue Server Renderer

  压缩并 gzip 后，总代码大小为：**57kb** （如果使用了 Vuex 特性的话为 60kb）。

  另外，Nuxt.js 使用 Webpack 和 vue-loader 、 babel-loader 来处理代码的自动化构建工作（如打包、

  代码分层、压缩等等）。

- 特性：

  - 基于 Vue.js：Vue、Vue Router、Vuex、Vue SSR
  - 自动代码分层
  - 服务端渲染
  - 强大的路由功能，支持异步数据
  - 静态文件服务
  - ES2015+ 语法支持
  - 打包和压缩 JS 和 CSS
  - HTML 头部标签管理
  - 本地开发支持热加载
  - 集成 ESLint
  - 支持各种样式预处理器： SASS、LESS、 Stylus 等等
  - 支持 HTTP/2 推送

## 使用

## 使用方式

1. 直接初始化

   - 方式1：运行create-nuxt-app

   - 方式2：从头开始新建项目

     在 package.json 文件的 scripts 中新增：

      ```json
     "scripts": {
       "dev": "nuxt"
     }
      ```

      运行命令

    ```shell
      # 初始化 package.json 文件
      npm init -y
      
      # 安装 nuxt
    npm i nuxt
      
      # 启动项目
      npm run dev
    ```

     假设nuxt.js目录如下

     nuxtjs-demo
     ├── .nuxt

     ├── pages

     │   ├── index.vue

     │   ├── about.vue

     │   ├── user
     │   │   ├── index.vue
     │── package.json
     └── yarn.lock

     那Nuxt.js 自动生成的路由配置如下：

     ```json
     [{
       path: "/about",
       component: _7f6a0503,
       name: "about"
     }, {
       path: "/user",
       component: _dc95c5c6,
       name: "user"
     }, {
       path: "/",
       component: _c1bc4070,
       name: "index"
     }]
     ```

     

2. 在 Node.js 服务端项目中使用：直接把Nuxt当作中间件集成到Node Web Server 中

3. 在 Vue.js 项目中使用：前提是非常熟悉Nuxt.js，然后在原有代码基础上做10%左右的代码改动

## 路由

### 路由导航

路由导航可以通过以下几种方式创建：

- a标签：会刷新页面，不推荐使用
- router-link组件：https://router.vuejs.org/api/#router-link
- nuxt-link组件：https://zh.nuxtjs.org/docs/2.x/features/nuxt-components/#the-nuxtlink-component
- 编程式导航：https://router.vuejs.org/zh/guide/essentials/navigation.html

```vue
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
```

### 动态路由

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的**以下划线作为前缀**的 Vue 文件 或 目录。

pages/ 
--| _slug/ 
-----| comments.vue 
-----| index.vue 
--| users/ 
-----| _id.vue 
--| index.vue 

users-id 的路由路径带有 :id? 参数，表示该路由是可选的。如果你想将它设置为必选的路由，需要在 users/_id 目录内创建一个 index.vue 文件。

```vue
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
```

### 嵌套路由

你可以通过 vue-router 的子路由创建 Nuxt.js 应用的嵌套路由。

创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个**与该文件同名**的目录用来存放子视图组件。

> **Warning:** 别忘了在父组件( .vue 文件) 内增加 **<nuxt-child/>** 用于显示子视图内容。

├── pages
│   ├── index.vue
│   ├── users.vue
│   ├── user
│   │   ├── index.vue
│   │   ├── foo.vue

users.vuw

```vue
<template>
  <div>
    <h1>父路由</h1>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  name: 'userPage'
}
</script>
```

### 自定义路由配置

https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-router/

nuxt.config.js

```js
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
```

## 视图

https://zh.nuxtjs.org/docs/2.x/concepts/views/

![Composition of a View in Nuxt.js](https://zh.nuxtjs.org/docs/2.x/views.png)

### Document 模板

https://zh.nuxtjs.org/docs/2.x/concepts/views/#document-apphtml

在根目录下创建app.html，即可修改单页面构成模板

app.html

```html
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    <!-- 渲染的内容最终会注入到这里 -->
    <h1>app.html</h1>
    {{ APP }}
  </body>
</html>
```

### layout 布局

https://zh.nuxtjs.org/docs/2.x/concepts/views#layouts

创建 **layouts** 文件夹，创建默认的布局组件default.vue。注意default一旦创建，所有的子页面都会继承布局视图，除非在子页面中指定布局组件的名称。

default.vue

```vue
<template>
  <div>
    <h1>Layout - layouts/default.vue 组件</h1>
    <!-- 页面出口，类似于子路由出口 -->
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
```

index.vue

```vue
<template>
  <div>
    <h1>hello Nuxt.js!</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // default 为布局组件的默认的名称，可以忽略不写
  layout: 'default',
  methods: {
    onClick () {
      this.$router.push('/about')
    }
  }
}
</script>
```

about.vue

```vue
<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  // about 为 layouts/about.vue文件
  layout: 'about'
}
</script>
```

## 异步数据

### asyncData

Nuxt.js 扩展了 Vue.js，增加了一个叫* asyncData *的方法，使得我们可以在设置组件的数据之前能异步获取或处理数据。

- 官网文档：https://zh.nuxtjs.org/docs/2.x/features/data-fetching#async-data
- 基本用法：将 asyncData 返回的数据融合组件 data 方法返回数据一并给组件
- 调用时机：服务端渲染期间、客户端路由更新之前
- 注意事项
  - 只能在页面组件（pages文件夹下的组件）中使用；如果想使用，使用父子组件传值的方式
  - 没有this，因为它是在组件初始化之前被调用的

about.vue

```vue
<template>
  <div>
    <h1>About</h1>
    <nuxt-link to="/">首页</nuxt-link>
    <br>
    {{ message + title }}
    <ul>
      <li v-for="(item, index) in posts" :key="index">{{ item.desc }}</li>
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
```

### 上下文对象

https://zh.nuxtjs.org/docs/2.x/internals-glossary/context/

context：asyncData 的回调参数

示例：动态路由跳转传参，可以通过context.params获取路由参数

about.vue

```vue
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
  async asyncData () {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/app/data.json'
    })
    return res.data
  },
  data () {
    return {
      message: 'Hello-'
    }
  }
}
</script>
```

article/_id.vue

```vue
<template>
  <div>
    <h1>文章标题</h1>

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
```

## 生命周期

| **钩子函数**  | **说明**                                                     | **Server** | **Client** |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| beforeCreate  | 在实例创建之前被调用，此时还拿不到数据和 DOM                 | ✔          | ✔          |
| created       | 在实例创建完成后被调用，此时可以操作数据了                   | ✔          | ✔          |
| beforeMount   | 在挂载开始之前被调用：相关的 render 函数首次被调用           | ❌          | ✔          |
| mounted       | 实例被挂载后调用，此时可以执行一些初始 DOM 操作              | ❌          | ✔          |
| beforeUpdate  | 数据更新时调用，发生在虚拟 DOM 打补丁之前。<br />这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。 | ❌          | ✔          |
| updated       | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。 | ❌          | ✔          |
| activated     | 被 keep-alive 缓存的组件激活时调用。                         | ❌          | ✔          |
| deactivated   | 被 keep-alive 缓存的组件停用时调用。                         | ❌          | ✔          |
| beforeDestroy | 实例销毁之前调用。在这一步，实例仍然完全可用                 | ❌          | ✔          |
| destroyed     | 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。 | ❌          | ✔          |
| errorCaptured | 当捕获一个来自子孙组件的错误时被调用。                       | ✔          | ✔          |

## 渲染流程

![img](https://zh.nuxtjs.org/nuxt-schema.svg)

