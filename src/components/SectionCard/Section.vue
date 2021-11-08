<template>
  <section :id="section.id">
    <h3>{{ section.name }}</h3>
    <div>
      <div :class="[section.type, { hide: scrollZero }]" @click="ScrollX(false)" class="control">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </div>
      <div ref="refScroll" @click="ScrollTo" class="scroll-card hide-scrollbar">
        <slot :card="section.films" :type="section.type" name="card"/>
      </div>
      <div :class="[section.type, { hide: scrollMaxRight }]" @click="ScrollX(true)" class="control">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>
    </div>
  </section>
  <slot name="preview" />
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { useScrollCard } from '../../composition/scrollCard'
import { SectionInterface } from "./section.interface";
import { ExtractPropTypes } from "@vue/runtime-core";

const refScroll: Ref<HTMLElement | number> = ref(0)

const { section }: ExtractPropTypes<SectionInterface | any> = defineProps({ section: Object })

const { ScrollX, ScrollTo, scrollZero, scrollMaxRight } = useScrollCard(refScroll)

</script>

<style lang="postcss">
section {
  @apply my-6;
}
section h3 {
  @apply ml-28 text-white text-2xl font-bold antialiased;
}
section svg {
  @apply w-12 h-12
}
section > div {
  @apply flex
}
section > div .scroll-card {
  padding-left: 5.49rem;
  scroll-snap-type: x mandatory;
  @apply flex flex-auto overflow-x-auto overflow-y-hidden py-5;
}
section > div .scroll-card .card {
  scroll-snap-align: center;
  width: var(--item-width);
  @apply rounded-md bg-white flex-shrink-0;
}
section > div .scroll-card .card.list {
  @apply mx-2 duration-200
}
section > div .scroll-card .card.list:hover {
  @apply scale-105 transition delay-500 duration-500
}
section > div .scroll-card .card.list img {
  @apply h-full object-cover rounded-md;
}
section > div .scroll-card .card.transition-list {
  @apply ml-2 mr-20 2xl:mr-24 bg-black text-white;
}
.behavior {
  scroll-behavior: smooth;
}
section:hover > div .control {
  @apply opacity-50;
}
section:hover > div .control.hide {
  @apply opacity-0 invisible;
}
section > div .control {
  @apply flex justify-center items-center mt-5;
  @apply text-white bg-black absolute opacity-0 backdrop-filter backdrop-blur;
  @apply transition delay-100 duration-300;
}
section > div .control.film {
  width: calc(var(--item-width) / 4.031);
  height: var(--film-height);
}
section > div .control.genres {
  width: calc(var(--item-width) / 4.031);
  height: var(--genres-height);
}
section > div .control:first-child {
  @apply left-0 rounded-r-md;
}
section > div .control:last-child {
  @apply right-0 rounded-l-md;
}
</style>
