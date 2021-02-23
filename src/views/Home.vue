<!--
 * @Author: CaoPengpeng
 * @since: 2021-02-04 10:21:42
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-19 14:35:01
 * @文件相对于项目的路径: /vue3-test-project/src/views/Home.vue
 * @message: 
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
