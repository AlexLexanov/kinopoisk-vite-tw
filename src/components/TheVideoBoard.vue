<template>
  <div class="video-board">
    <div>
      <div />
      <div class="control absolute">
        <button>
          Смотреть
        </button>
      </div>
      <img src="https://avatars.mds.yandex.net/get-ott/212840/2a0000017a2e6a5202b19e5472993fdb8aeb/2016x1134" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.video-board {
  height: 96vh;
  @apply bg-white relative text-white mb-10
}
.video-board > div {
  @apply h-full flex flex-col justify-end
}
.video-board > div > img {
  height: 96vh;
  @apply w-full object-cover
}
.video-board > div > div:first-child {
  @apply absolute h-full w-full bg-black opacity-30;
}
.control {
  @apply p-12;
}
.control button {
  background-color: #f25900;
  @apply w-40 h-10 text-white font-semibold rounded-sm;
}
</style>
