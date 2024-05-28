<template>
  <div class="mx-auto max-w-2xl py-6  block relative sm:pt-64 lg:pt-48   ">
    <div class="text-center">
      <h1 class="text-5xl font-black tracking-tight sm:text-6xl">GitHub Repositories </h1>
      <p class="mt-6 text-lg font-bold leading-8 text-gray-600">Learn through code and kickstart your journey<br/> into Ant Media Server</p>
    </div>
  </div>
  <div class="-mt-12" >
    <ListCardLinks :links="cardData" />
  </div>
  <div class="-mt-2" >
<ListCards :cards="cardData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {defineComponent} from "vue";
import ListCardLinks from "~/components/ListCardLinks.vue";
import {ant_data} from "~/constants/data.ts";

const cardData = ant_data;
</script>