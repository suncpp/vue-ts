<!--
 * @Author: CaoPengpeng
 * @since: 2021-02-04 10:21:42
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-22 14:13:47
 * @文件相对于项目的路径: /vue3-test-project/src/components/HelloWorld.vue
 * @message: 
-->
<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <h1>x: {{x}}, y: {{y}}</h1>
    <h1 v-if="loadding">loadding。。。。</h1>
    <img v-if="loaded" :src="result.message" alt="小狗狗">
    <button type="button" @click="countAdd">o(￣▽￣)ｄ点赞</button>
    <button type="button" @click="updateTile">更新title</button>
    <button type="button" @click="openModal">open modal</button>
    <modal :isOpen="isOpenModal" @close-modal="closeModal">哈哈哈，我来了</modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs, onMounted, onUpdated, onRenderTriggered, watch, onUnmounted } from 'vue';
import useMousePosition from '../hooks/useMousePosition'
import useURLLoader from '../hooks/useURLLoader'
import modal from './Modal.vue';
interface DataProps {
  count: number;
  countAdd: () => void;
  double: number;
}
interface DogResult {
  message: string;
  status: string;
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    modal
  },
  setup() {
    // const count = ref(0); // 响应的count值
    // const countAdd = () => {
    //   count.value++
    // }
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // return {
    //   count,
    //   countAdd,
    //   double
    // }
    const data: DataProps = reactive({
      count: 0,
      countAdd: () => {data.count++},
      double: computed(() => {return data.count *2})
    })
    const updateTile = () => {
      document.title = `Vue3+${data.count}`
    }
    watch(
      () => data.count,
      (newVal, oldVal) => {
        updateTile();
        console.log(newVal,oldVal)
      }
    )
    // const x = ref(0)
    // const y = ref(0)
    // const clickPosition = (e: MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(() => {
    //   console.log('onMounted')
    //   document.addEventListener('click',clickPosition);
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', clickPosition);
    // })
    const {x, y} = useMousePosition();
    const {result,loadding,loaded} = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
    watch(result, () => {
      console.log(result.value?.message)
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onRenderTriggered((event) => {
      console.log(event);
    })
    const isOpenModal = ref(false);
    const openModal = () => {
      isOpenModal.value = true;
    }
    const closeModal = () => {
      isOpenModal.value = false;
    }
    return {
      ...toRefs(data),
      updateTile,
      x,
      y,
      result,
      loadding,
      loaded,
      isOpenModal,
      openModal,
      closeModal
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
