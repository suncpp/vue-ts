<!--
 * @Author: CaoPengpeng
 * @since: 2021-02-04 10:22:40
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-23 09:47:18
 * @文件相对于项目的路径: /vue3-test-project/README.md
 * @message: 
-->
# vue3-test-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


compontension api
化零为整
重用率高
模块化
<T>

defineComponent
  引入 defineComponent() 以正确推断 setup() 组件的参数类型
  defineComponent 可以正确适配无 props、数组 props 等形式
  defineComponent 可以接受显式的自定义 props 接口或从属性验证对象中自动推断
  在 tsx 中，element-ui 等全局注册的组件依然要用 kebab-case 形式
  在 tsx 中，v-model 要用 model={{ value, callback }} 写法
  在 tsx 中，scoped slots 要用 scopedSlots={{ foo: (scope) => () }} 写法
  defineComponent 并不适用于函数式组件，应使用 RenderContext 解决
全局配置： Vue.config ---> app.config
全局注册： Vue.compontent----> app.componentent
扩展      Vue.mixin,Vue.use----->app.use,app.mixin