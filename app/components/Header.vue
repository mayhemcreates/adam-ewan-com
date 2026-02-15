<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const openNav = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="mx-auto w-full lg:max-w-3/4">
    <div class="flex items-center justify-between lg:items-start w-full h-12.5 lg:h-auto">
      <NuxtLink class="font-vibes text-4xl lg:text-7xl text-lemon font-bold lg:shrink-0" to="/"> Adam Ewan </NuxtLink>

      <div class="absolute lg:static left-0 top-0 lg:translate-x-0 w-screen h-screen z-50 lg:w-auto lg:h-auto bg-black lg:bg-transparent" :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
        <nav class="h-full lg:h-auto">
          <ul class="flex h-full flex-col lg:flex-row items-center lg:justify-end mt-20 lg:mt-0 gap-y-5 lg:gap-y-0 lg:gap-x-5 text-lemon">
            <NuxtLink to="/about" class="link" active-class="text-white border-b-2 border-white">About</NuxtLink>
            <NuxtLink to="/biography" class="link" active-class="text-white border-b-2 border-white">Biography</NuxtLink>
            <NuxtLink to="/gallery" class="link" active-class="text-white border-b-2 border-white">Gallery</NuxtLink>
            <NuxtLink to="/showreel" class="link" active-class="text-white border-b-2 border-white">Showreel</NuxtLink>
            <NuxtLink to="/contact" class="link" active-class="text-white border-b-2 border-white">Contact</NuxtLink>
          </ul>
        </nav>
      </div>
      <button class="relative z-50 w-6.25 h-full lg:hidden" @click="openNav()">
        <span aria-hidden="true" class="block absolute bg-white h-0.5 w-6.25 transform transition duration-300 ease-in-out" :class="isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'"></span>
        <span aria-hidden="true" class="block absolute bg-white h-0.5 w-6.25 transform transition duration-300 ease-in-out" :class="{ 'opacity-0': isOpen }"></span>
        <span aria-hidden="true" class="block absolute bg-white h-0.5 w-6.25 transform transition duration-300 ease-in-out" :class="isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'"></span>
      </button>
    </div>
  </div>
</template>
