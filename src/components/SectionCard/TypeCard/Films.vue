<template>
  <div @click="$emit('open', film)" class="card list" v-for="film of films" :key="film">
    <img src="https://avatars.mds.yandex.net/get-ott/200035/2a00000177f18ab4332b2954aaabf0947692/375x234" alt="">
  </div>
  <div class="card transition-list flex-center">перейти</div>
</template>

<script setup lang="ts">
defineEmits(['open'])
const { films }: any = defineProps({ films: Array })
</script>

<style lang="postcss">
.card {
  height: var(--film-height);
}
</style>
