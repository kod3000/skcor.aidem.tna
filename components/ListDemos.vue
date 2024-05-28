<template>
  <div class="relative max-w-6xl mx-auto  pb-16 ">
    <div class="mx-4 lg:mx-0 mt-5 grid grid-cols-1 gap-8 py-2 items-stretch place-content-stretch md:grid-cols-2">
      <div v-for="(demo, index) in demos" :key="index" class="relative group">
        <a :href="demo.url" :title="demo.title" target="_blank" class="bg-gray-50 p-4 pb-6 relative grid rounded-2xl hover:bg-zinc-200 transition md:duration-150 auto-rows-max">
          <figure class="h-[253px] relative rounded-xl overflow-hidden bg-gradient-to-b from-indigo-400 to-pink-200">
            <img class="absolute object-cover w-full h-full transition duration-500 ease-in-out group-hover:scale-105" :src="demo.image" :alt="demo.title">
            <video class="absolute object-cover lg:object-fill w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" :src="demo.video" loop autoplay playsinline></video>
          </figure>
          <div class="mt-4 p-2 flex flex-col">
            <p class="text-xl font-semibold capitalize">{{ demo.title }}</p>
            <div class="flex gap-2 pt-3 pb-1 flex-wrap">
              <span v-for="(tag, tagIndex) in demo.tags" :key="tagIndex" class="text-xs px-2 py-0.5 text-slate-700 font-bold border-2 border-slate-600 rounded-full whitespace-nowrap flex-nowrap">{{ tag }}</span>
            </div>
            <p class="text-sm mt-2 text-zinc-500">{{ demo.description }}</p>
          </div>
        </a>
        <div class="absolute top-4 left-4 py-2 px-2 flex align-center justify-center opacity-0 group-hover:opacity-100 transition ease-in-out duration-150">
          <a v-if="demo.githubUrl" :href="demo.githubUrl" target="_blank" :title="'View on GitHub'" class="w-[44px] h-[44px] flex justify-center items-center font-bold rounded-full bg-zinc-200 hover:bg-zinc-300 hover:scale-105 hover:ring-4 hover:ring-offset-1 transition ease-in-out duration-300">
            <svg width="26" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#000">
                <path d="M8.325 12.28 3.15 7.104 8.325 1.93 6.75.354 0 7.104l6.75 6.75 1.575-1.574Zm8.85 0 5.175-5.176-5.175-5.175L18.75.354l6.75 6.75-6.75 6.75-1.575-1.574Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="m15.417.582-3.494 13.04-2.173-.582L13.244 0l2.173.582Z"></path>
              </g>
            </svg>
          </a>
          <a v-else-if="demo.codepenUrl" :href="demo.codepenUrl" target="_blank" :title="'View on CodePen'" class="w-[44px] h-[44px] flex justify-center items-center font-bold rounded-full bg-zinc-200 hover:bg-zinc-300 hover:scale-105 hover:ring-4 hover:ring-offset-1 transition ease-in-out duration-300">
            <svg width="26" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#000">
                <path d="M8.325 12.28 3.15 7.104 8.325 1.93 6.75.354 0 7.104l6.75 6.75 1.575-1.574Zm8.85 0 5.175-5.176-5.175-5.175L18.75.354l6.75 6.75-6.75 6.75-1.575-1.574Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="m15.417.582-3.494 13.04-2.173-.582L13.244 0l2.173.582Z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      demos: [
          {
            title: 'some title',
            url: 'https://some.demo.ant.media.com/',
            image: '/flutter-dev-0.png',
            video: 'sample.mp4',
            tags: ['Low-latency'],
            description: '',
            githubUrl: ''
          },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        {
          title: 'some title',
          url: 'https://some.demo.ant.media.com/',
          image: '/flutter-dev-0.png',
          video: 'sample.mp4',
          tags: ['Low-latency'],
          description: '',
          githubUrl: ''
        },
        ]
    };
  }
};
</script>