<template>
  <div class="menu">
    <div>
      <div @click="show = !show" :class="{ hidden: !show }" />
      <div @click="show = !show" type="button">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </div>
      <div :class="{ hidden: !show }" class="menu-list">
        <div>
          <div></div>
          <div class="px-4 mb-3">
            <p>Лексанов А.А</p>
            <p>lexanov.a@icloud.com</p>
          </div>
          <div>
            <a href="#">Мой профиль</a>
            <a href="#">Настроки</a>
            <a href="#">Выйти</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(false)

</script>

<style lang="postcss" scoped>
.menu {
  @apply cursor-pointer absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0;
}
.menu > div {
  @apply ml-3 relative;
}
.menu button:focus {
  @apply outline-none;
}
.menu > div button:first-child {
  @apply fixed inset-0 h-screen w-full;
}
.menu > div button:last-child {
  @apply bg-gray-800 flex text-sm rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white;
}
.menu img {
  @apply h-12 w-12 rounded-full;
}
.menu .menu-list {
  @apply origin-top-right absolute transform translate-x-12  right-0 pt-4;
}
.menu .menu-list > div {
  @apply relative py-1 bg-white border border-gray-200 rounded-md shadow-xl;
}
.menu .menu-list > div div:first-child {
  @apply top-0 w-4 h-4 border-t border-l border-gray-200 rounded-sm;
  @apply absolute  transform rotate-45 translate-x-60 -translate-y-2 bg-white pointer-events-none;
}
.menu .menu-list > div div:first-child + div p:first-child {
  @apply font-medium text-2xl text-gray-700;
}
.menu .menu-list > div div:first-child + div p:last-child {
  @apply text-gray-400 xl:font-light text-xs;
}
.menu .menu-list > div div:last-child {
  @apply relative grid w-80 text-gray-700 text-sm focus:outline-none;
}
.menu .menu-list > div div:last-child a {
  @apply py-2 hover:bg-gray-100 px-4;
}
</style>
