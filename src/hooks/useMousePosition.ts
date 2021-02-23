/*
 * @Author: CaoPengpeng
 * @since: 2021-02-20 14:48:43
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-20 14:54:50
 * @文件相对于项目的路径: /vue3-test-project/src/hooks/useMousePosition.ts
 * @message: 
 */
import {ref, onMounted, onUnmounted} from 'vue'

function useMouseTracker() {
  const x = ref(0)
  const y = ref(0)
  const clickPosition = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    console.log('onMounted')
    document.addEventListener('click',clickPosition);
  })
  onUnmounted(() => {
    document.removeEventListener('click', clickPosition);
  })

  return {
    x,
    y
  }
}

export default useMouseTracker