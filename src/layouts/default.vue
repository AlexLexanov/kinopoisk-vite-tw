<template>
  <div>
    <header>
      <Navbar :class="[hide ? '-top-24' : 'top-0', y < 50 ? 'bg-transparent' : 'bg-dark' ]" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/TheNavbar.vue";
import { ref, watch } from "vue";
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const hide = ref(false)

watch(y, (y, oldY) => {
  hide.value = y > oldY
})
</script>

<style scoped>

</style>
