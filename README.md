# vue-blog

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 组件测试
```js
"test:组件名": "vue serve 组件地址",
"test:Icon": "vue serve ./src/components/Icon/test.vue"
```

vue-router 
---
命名路由
```js
{
    path: '/about', component: About, name: "About"
    // name 就是命名路由
},
// 路由跳转 也用name  两者进行对比，对比成功后再跳转
<router-link
    v-for="item in items"
    :key="item.link"
    :to="{ name: item.name }"
>
```
