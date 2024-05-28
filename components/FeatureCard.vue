<template>
  <div v-if="isDefault">
  <a :href="dataUrl" :title="dataTitle" target="_blank" class="bg-gray-50 p-4 relative grid auto-rows-max rounded-2xl hover:bg-zinc-200 md:duration-150 group" data-aos="fade-up" :class="{ 'ring-4 ring-red-400': isFeatured }">
    <div v-if="isFeatured" class="absolute top-1 right-0 z-10">
      <span class="font-extrabold px-3 py-2 bg-red-400 text-slate-100 rounded-tr-xl rounded-bl-lg">Featured</span>
    </div>
    <figure class="rounded-xl overflow-hidden">
      <img :src="dataImage" :alt="dataTitle" class="object-cover group-hover:scale-105 ease-in-out duration-300" />
    </figure>
    <div class="mt-4 p-2">
      <p class="text-xl font-semibold capitalize">{{ dataTitle }}</p>
      <div class="flex gap-2 pt-3 pb-1">
        <span v-for="tag in dataTags" :key="tag" class="text-xs px-2 py-0.5 text-slate-700 font-bold border-2 border-slate-600 rounded-full">
          {{ tag }}
        </span>
      </div>
      <p class="text-sm mt-2 text-zinc-500">
        {{ dataDescription }}
      </p>
    </div>
  </a>
  </div>
  <div v-else >
  <a
      :href="dataUrl"
      :title="dataTitle"
      target="_blank"
      class="bg-gray-50 p-6 relative grid grid-cols-2 gap-2 rounded-2xl hover:bg-zinc-200 md:duration-150 group"
      data-aos="fade-up"
      :class="{ 'ring-4 ring-red-400': isFeatured }"
  >
    <div v-if="isFeatured" class="absolute top-1 right-0 z-10">
      <span class="font-extrabold px-3 py-2 bg-red-400 text-slate-100  rounded-tr-xl rounded-bl-lg">Featured</span>
    </div>
    <figure class="w-full rounded-2xl overflow-hidden">
      <img
          :src="dataImage"
          :alt="dataTitle"
          class="w-full h-full aspect-[9/16] object-cover group-hover:scale-105 ease-in-out duration-300"
      />
    </figure>
    <div class="ml-4 pt-4">
      <p class="text-xl font-semibold capitalize">{{ dataTitle }}</p>
      <div class="flex gap-2 pt-3 pb-1">
        <span
            v-for="tag in dataTags"
            :key="tag"
            class="text-xs px-2 py-0.5 text-slate-700 font-bold border-2 border-slate-600 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <p class="text-sm mt-2 text-zinc-500">
        {{ dataDescription }}
      </p>
    </div>
  </a>
  </div>
</template>

<script>
export default {
  props: {
    dataUrl: {
      type: String,
      required: true,
    },
    dataTitle: {
      type: String,
      required: true,
    },
    dataImage: {
      type: String,
      required: true,
    },
    dataTags: {
      type: Array,
      default: () => [],
    },
    dataDescription: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isDefault: {
      type: Boolean,
      default: true,
    },
  },
};
</script>