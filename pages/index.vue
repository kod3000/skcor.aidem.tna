<template>
  <section style="z-index: -1" class="bg-red-600  pb-24 pt-12 -mt-12">
  </section>
  <main class="-mt-24 pb-8 lg:pt-0 pt-64" >
    <div class="mx-auto max-w-3xl  w-full px-4 sm:px-6 lg:max-w-7xl lg:px-8"  >
      <h1 class="sr-only">Page title</h1>
      <div class="relative isolate px-6 -mt-24 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff0000] to-[#ff5f5f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="mx-auto max-w-2xl py-6 sm:py-48 lg:py-56 -mt-2 block relative">
          <div class="text-center">
            <h1 class="text-5xl font-black tracking-tight lg:text-red-600 sm:text-red-700 sm:text-6xl">Experience Affordable, High-Quality Live Streaming!</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600"> Open Source, Scalable, Ultra Low Latency & Adaptive WebRTC Streaming</p>


            <div class=" mt-4 flex items-center justify-center gap-x-6" >
              <a href="#" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get started</a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
            <CaruselImages class=" rounded" style="z-index:0" />

          </div>
        </div>

      </div>

      <div class="mt-12" >
        <FaqComponent :faqs="faqData" />
      </div>

      <!-- Main 3 column grid -->
<!--      <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">-->
<!--        &lt;!&ndash; Left column &ndash;&gt;-->
<!--        <div class="grid grid-cols-1 gap-4 lg:col-span-2">-->
<!--          <section aria-labelledby="section-1-title">-->
<!--            <h2 class="sr-only" id="section-1-title">Section title</h2>-->
<!--            <div class="overflow-hidden rounded-lg bg-white shadow">-->
<!--              <div class="p-6"  style="height: 70vh">-->
<!--                &lt;!&ndash; Your content &ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </section>-->
<!--        </div>-->

<!--        &lt;!&ndash; Right column &ndash;&gt;-->
<!--        <div class="grid grid-cols-1 gap-4">-->
<!--          <section aria-labelledby="section-2-title">-->
<!--            <h2 class="sr-only" id="section-2-title">Section title</h2>-->
<!--            <div class="overflow-hidden rounded-lg bg-white shadow">-->
<!--              <div class="p-6"  style="height: 70vh">-->
<!--                &lt;!&ndash; Your content &ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </section>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </main>
</template>

<script>
import FaqComponent from '~/components/FaqComponent.vue';
import {general_faq} from "../constants/data.ts";

export default {
  components: {
    FaqComponent
  },
  data() {
    return {
      faqData:general_faq
    }
  }
}
</script>