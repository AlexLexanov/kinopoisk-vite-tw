<template>
  <Section v-for="(section, i) of sections" :section="section" :key="i">
    <template #card="{ card, type }">
      <Films @open="Preview" v-if="type === 'film'" :films="card" />
      <Genres v-else-if="type === 'genres'" :films="card" />
    </template>
    <template v-if="section.type === 'film'" #preview>
      <transition name="view" mode="in-out">
        <VideoBoardPreview v-if="section.films.includes(film)" :film="film"  />
      </transition>
    </template>
  </Section>
</template>

<script setup lang="ts">
import Section from "./Section.vue";
import Films from "./TypeCard/Films.vue";
import Genres from "./TypeCard/Genres.vue";
import VideoBoardPreview from "../TheVideoBoardPreview.vue";
import { SectionInterface } from "./section.interface";

import { onMounted, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'

const sections: Ref<SectionInterface[]> = ref([
  { id: 0, name: 'Продолжить просмотр', type: 'film', films: [21,12,25,14,5,26] },
  { id: 1, name: 'Фильмы', type: 'film', films: [1,2,3,4,5,6,7,8,9,10, 32,33,44,65,656,3234,343,4343] },
  { id: 2, name: 'Сериал', type: 'film', films: [11,12,13,14,15,16,17,18,19,20] },
  { id: 3, name: 'Жанры', type: 'genres', films: [21,22,23,24,25,26,27,28,29,30] },
])

const route = useRoute()
const router = useRouter()
const film: Ref<number | null> = ref(null)
const block = ref(false)

watch(route, ({ query }) => {
  if (query) film.value = Number(query.film)
  else film.value = null
})

const Preview = (val: number) => {
  if (film.value !== val) router.push({ query: { film: val } })
  else router.push(route.path)
}

onMounted(() => {
  if (route.query) router.push(route.path)
})

</script>

<style lang="postcss">

.view-enter-active,
.view-leave-active {
  height: 40rem;
  transition: all 0.5s ease;
}
.view-enter-from,
.view-leave-to {
  opacity: 0;
  height: 0;
}

</style>
