<template>
  <div class="board-preview">
    <transition name="scale" mode="out-in">
      <div v-if="!isFetching && data">
        <video @click="playing = !playing" :poster="poster" class="object-cover w-full h-full" ref="video" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, toRef, ref, onMounted, onBeforeMount, onUnmounted } from 'vue'
import { useFetch, useMediaControls } from '@vueuse/core'

const props: any = defineProps({ film: Number })
const film = toRef(props, 'film')
const baseUrl = ref('https://jsonplaceholder.typicode.com/photos/')
const url = ref('')
url.value = baseUrl.value + film.value
const { isFetching, error, data } = useFetch(url, { refetch: true, immediate: true }).json()

const poster = 'https://avatars.mds.yandex.net/get-ott/1534341/2a00000177bb1ef68be493e928ff4b543d41/2016x1134'

const video = ref()
const { playing, currentTime, duration, volume,  } = useMediaControls(video, {
  src: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm',
    type: 'video/webm',
  }
})

onMounted(() => {
  setTimeout(() => playing.value = true, 5000)
})

onUpdated(() => {
  url.value = baseUrl.value + film.value
  playing.value = false
  setTimeout(() => playing.value = true, 5000)
})

onUnmounted(() => {
  playing.value = false
})

</script>

<style lang="postcss">
.board-preview {
  height: 40rem;
  @apply w-full border border-black rounded-sm
}
.board-preview > div {
  @apply h-full
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
