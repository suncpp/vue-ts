/*
 * @Author: CaoPengpeng
 * @since: 2021-02-20 14:56:32
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-20 15:41:40
 * @文件相对于项目的路径: /vue3-test-project/src/hooks/useURLLoader.ts
 * @message: 
 */

import { ref } from 'vue'
import axios from 'axios';

function useURLLoader<T>(url: string) {
  const result = ref<T | null>(null);
  const loadding = ref(true);
  const loaded = ref(false);
  const error = ref(null);

  axios.get(url).then((rawData) => {
    result.value = rawData.data;
    loadding.value = false;
    loaded.value = true;
  }).catch(e => {
    error.value = e;
    loadding.value = false;
  })

  return {
    result,
    loadding,
    loaded,
    error
  }
}

export default useURLLoader
