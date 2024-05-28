<template>
  <div class="repo-links">
    <div class="link-container">
      <a v-for="(link, index) in links" :key="index" :class="['link', link.class]" :href="link.url">
        <span :class="['icon', link.iconClass]" :style="{ backgroundColor: link.color }">
          <svg :class="['icon-svg', link.class]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="link.svgPath"></svg>
        </span>
        <span>{{ link.label }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.repo-links {
  @apply relative flex flex-col justify-center max-w-6xl mx-auto mt-20;
}

.link-container {
  @apply max-w-2xl mx-auto flex flex-row flex-wrap gap-3 justify-center text-sm tracking-wide;
}

.link {
  @apply border-2 flex items-center gap-2 pl-3 pr-4 py-2 font-semibold   rounded-full transition ease-in-out duration-300;
}

.link:hover {
  @apply shadow-md bg-slate-50;
}

.web-link:hover {
  @apply border-yellow-300;
}

.android-link:hover {
  @apply border-green-400;
}

.ios-link:hover {
  @apply border-gray-400;
}
.sdk-link:hover {
  @apply border-blue-400;
}

.tools-link:hover {
  @apply border-red-400;
}

.dart-link:hover {
  @apply border-teal-400;
}

.java-link:hover {
  @apply border-orange-400;
}
.icon {
  @apply w-6 h-6 flex items-center justify-center rounded-full;
}

.icon-svg {
  @apply w-5 h-5;
}
</style>