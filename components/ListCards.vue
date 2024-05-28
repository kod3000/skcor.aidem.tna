<script setup lang="ts">
import { ref } from 'vue';

type CardData = {
  anchor: string;
  title: string;
  viewAll: string;
  svgPath: string;
  class: string;
  iconClass: string;
  color: string;
  isDefault: boolean;
  content: {
    url: string;
    title: string;
    image: string;
    tags: string[];
    description: string;
    isFeatured: boolean;
  }[];
}[];

const props = defineProps<{
  cards: CardData;
}>();

const observer = ref<IntersectionObserver | null>(null);

function initObserver() {
  observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
          }
        });
      },
      {
        threshold: 0.32,
      }
  );
}

function observeElements() {
  const elements = document.querySelectorAll('.fade-item');
  elements.forEach((element) => {
    observer.value?.observe(element);
  });
}

onMounted(() => {
  initObserver();
  nextTick(() => {
    observeElements();
  });
});
</script>

<template>
  <div v-for="card in cards" :key="card.anchor">
    <div :id="card.anchor" class="relative max-w-5xl mx-auto pt-10 sm:pt-24 lg:pt-32">
      <div class="mx-2 md:mx-0 flex items-center gap-4 pt-10 fade-item">
        <span
            :class="['icon', card.iconClass] + ' rounded-lg w-[40px] h-[40px] flex items-center justify-center'"
            :style="{ backgroundColor: card.color }"
        >
          <svg
              :class="['icon-svg', card.class]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="card.svgPath"
          ></svg>
        </span>
        <h3 class="text-4xl font-extrabold text-gray-900">{{ card.title }}</h3>
      </div>
      <div class="mt-5 mx-2 md:mx-0 grid grid-cols-1 gap-8 py-2 items-stretch place-content-stretch sm:grid-cols-2">
        <FeatureCard
            v-for="data in card.content"
            :key="data.title"
            :data-url="data.url"
            :data-title="data.title"
            :data-image="data.image"
            :data-tags="data.tags"
            :data-description="data.description"
            :is-featured="data.isFeatured"
            :is-default="card.isDefault"
            class="fade-item"
        ></FeatureCard>
        <a
            v-if="card.viewAll != ''"
            :href="card.viewAll"
            class="bg-gray-50 p-6 flex flex-col justify-end content-end gap-2 rounded-2xl hover:bg-zinc-200 md:duration-150 fade-item"
        >
          <span class="text-xl font-semibold flex items-center gap-1">
            View all
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
              <rect fill="none" height="24" width="24"></rect>
              <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-item {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}
</style>