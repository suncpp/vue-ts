<!--
 * @Author: CaoPengpeng
 * @since: 2021-02-20 16:16:23
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-22 14:21:34
 * @文件相对于项目的路径: /vue3-test-project/src/components/Modal.vue
 * @message: 
-->
<template>
<!-- // vue3 新添加了一个默认的组件就叫 Teleport，我们可以拿过来直接使用，它上面有一个 to 的属性，它接受一个css query selector 作为参数，这就是代表要把这个组件渲染到哪个 dom 元素中 -->
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h1><slot>this is a modal</slot></h1>
      <button type="button" @click="closeModal">close</button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name:'modal',
  props: {
    isOpen: Boolean
  },

  emits: {
    'close-modal': null
  },

  setup(props, context) {
    const closeModal = () => {
      context.emit('close-modal');
    };
    return {
      closeModal
    }
  }
})
</script>

<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>