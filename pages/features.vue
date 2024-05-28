<template>
  <div class="mx-auto max-w-2xl py-6 block relative sm:pt-64 lg:pt-48">
    <div class="text-center">
      <h1 class="text-5xl font-black tracking-tight sm:text-6xl">Ant Media Server</h1>
      <p class="mt-6 text-lg font-bold leading-8 text-gray-600">The Most Powerful WebRTC Streaming Server</p>
    </div>
  </div>
  <div class="mt-12">
    <div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p class="mt-4 text-gray-500">Ant Media Server is a highly scalable and performant streaming server that supports WebRTC, RTMP, and HLS protocols. It enables low-latency live streaming and provides advanced features for real-time video applications.</p>
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <div class="rounded-lg bg-red-100 p-12 order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" >Fully managed</div>
          <div class="rounded-lg bg-red-100 p-12 order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" >Ultra Low Latency</div>
          <div class="rounded-lg bg-red-100 p-12 order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" >Automatic Scaling</div>
          <div class="rounded-lg bg-red-100 p-12 order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" >Secure Streaming</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-12">
    <FaqComponent :faqs="faqData" />
  </div>
</template>
<script setup lang="ts">
import FaqComponent from '~/components/FaqComponent.vue';
import { features_faq as faqData } from "~/constants/data.ts";
import {features} from "~/constants/data.ts";

</script>