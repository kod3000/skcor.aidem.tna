<template>
  <div class="mx-auto max-w-2xl py-6  block relative sm:pt-64 lg:pt-48   ">
    <div class="text-center">
      <h1 class="text-5xl font-black tracking-tight sm:text-6xl">Live hosted demos.</h1>
      <p class="mt-6 text-lg font-bold leading-8 text-gray-600">Experience Ant Media Server with live demos and real-world use cases .</p>
    </div>
  </div>
  <div class="-mt-4">
    <LiveDemoHeader />
  </div>
  <div class="-mt-12">
    <ListDemos />
  </div>
</template>



<script>
import {defineComponent} from "vue";
import FaqComponent from "~/components/FaqComponent.vue";
import LiveDemoHeader from "~/components/LiveDemoHeader.vue";

export default defineComponent({
  components: {LiveDemoHeader, FaqComponent}
})
</script>