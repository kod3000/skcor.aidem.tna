<template>
  <div class="relative max-w-6xl mx-auto pt-4 pb-16 ">
  <div class="mx-4 lg:mx-0 mt-5 grid grid-cols-1 gap-8 py-2 items-stretch place-content-stretch md:grid-cols-2">
    <div v-for="(demo, index) in featuredDemos" :key="index" class="relative group" :class="{ 'md:col-span-2 pb-20': index === 0 }">
      <a :href="demo.url" :title="demo.title" target="_blank" class="bg-gray-50 p-4 pb-6 relative grid rounded-2xl hover:bg-zinc-200 transition md:duration-150" :class="{ 'md:auto-cols-max md:grid-cols-12 md:gap-6': index === 0, 'auto-rows-max': index !== 0 }">
        <figure class="h-[253px] relative rounded-xl overflow-hidden bg-gradient-to-b from-indigo-400 to-pink-200" :class="{ 'md:h-[370px] md:col-span-8 md:rounded-2xl': index === 0 }">
          <img class="absolute object-cover w-full h-full transition duration-500 ease-in-out group-hover:scale-105" :src="demo.image" :alt="demo.title">
          <video class="absolute object-cover lg:object-fill w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" :src="demo.video" loop autoplay playsinline></video>
        </figure>
        <div class="mt-4 p-2 flex flex-col" :class="{ 'md:col-span-4 md:justify-center md:items-center': index === 0 }">
          <p class="text-xl font-semibold capitalize" :class="{ 'md:text-4xl md:font-extrabold md:mb-4': index === 0 }">{{ demo.title }}</p>
          <div class="flex gap-2 pt-3 pb-1 flex-wrap">
            <span v-for="(tag, tagIndex) in demo.tags" :key="tagIndex" class="text-xs px-2 py-0.5 text-slate-700 font-bold border-2 border-slate-600 rounded-full whitespace-nowrap flex-nowrap">{{ tag }}</span>
          </div>
          <p class="text-sm mt-2 text-zinc-500">{{ demo.description }}</p>
        </div>
      </a>
      <div class="absolute top-4 left-4 py-2 px-2 flex align-center justify-center opacity-0 group-hover:opacity-100 transition ease-in-out duration-150">
        <a :href="demo.githubUrl" target="_blank" :title="demo.githubTitle" class="w-[44px] h-[44px] flex justify-center items-center font-bold rounded-full bg-zinc-200 hover:bg-zinc-300 hover:scale-105 hover:ring-4 hover:ring-offset-1 transition ease-in-out duration-300">
          <svg width="26" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000">
              <path d="M8.325 12.28 3.15 7.104 8.325 1.93 6.75.354 0 7.104l6.75 6.75 1.575-1.574Zm8.85 0 5.175-5.176-5.175-5.175L18.75.354l6.75 6.75-6.75 6.75-1.575-1.574Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="m15.417.582-3.494 13.04-2.173-.582L13.244 0l2.173.582Z"></path>
            </g>
          </svg>
        </a>
      </div>
<!--      <div v-if="index === 0" class="bg-gray-50 py-4 px-2 mt-1 -mb-10 rounded-xl" data-aos="fade-up">-->
<!--        <div class="flex items-center justify-center">-->
<!--          <a class="text-lg text-white bg-black hover:bg-gray-800 transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-semibold h-11 px-6 rounded-full mx-auto flex items-center justify-center" href="https://walkthrough.antmedia.io" target="_blank" title="Request a demo walkthrough">-->
<!--            <span class="">Book a demo walkthrough</span>-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredDemos: [
        {
          title: 'Some title',
          url: 'https://antmedia.io',
          image: '/flutter-dev-0.png',
          video: '/resized_platform.mp4',
          tags: ['Low-latency', 'Timed Metadata', 'Stream Health', 'Chat'],
          description: 'A demo showing something.',
          githubUrl: 'https://github.com/antmedia/',
          class: 'md:col-span-2 pb-20',
          aClass: 'md:auto-cols-max md:grid-cols-12 md:gap-6',
          figureClass: 'md:h-[370px] md:col-span-8 md:rounded-2xl',
          contentClass: 'md:col-span-4 md:justify-center md:items-center',
          titleClass: 'md:text-4xl md:font-extrabold md:mb-4'
        },

      ]
    }
  }
}
</script>