<template>
  <div class="card list" v-for="film of films" :key="film">
    <img loading="lazy" src="https://avatars.mds.yandex.net/get-ott/1672343/2a00000174e8c5922509cd68202a20a91e5a/720x360" alt="">
  </div>
</template>

<script setup lang="ts">
defineEmits(['open'])

const { films }: any = defineProps({ films: Array })


</script>

<style scoped lang="postcss">
.card {
  height: var(--genres-height);
}
section > div .scroll-card .card:last-child {
  @apply ml-2 mr-20 2xl:mr-24
}
</style>
