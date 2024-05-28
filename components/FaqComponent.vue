<template>
  <div class="faq-component">
    <div class="text-center">
      <h1 class="font-black tracking-tight sm:text-4xl">Frequently Asked Questions</h1>
    </div>
    <div class="mt-12">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="font-black faq-question" @click="toggleAnswer(index)">
          <h3 class="tracking-tight sm:text-lg">{{ faq.question }}</h3>
          <span class="faq-icon" :class="{ 'faq-icon-open': faq.isOpen }">
            <svg v-if="!faq.isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
          </svg>
            </span>
          </span>
        </div>
        <transition name="expand">
          <div v-if="faq.isOpen" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});

const toggleAnswer = (index) => {
  props.faqs[index].isOpen = !props.faqs[index].isOpen;
};
</script>

<style scoped>
.faq-component {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.faq-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #bab8b8;
  cursor: pointer;
}

.faq-question h3 {
  margin: 0;
}

.faq-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.faq-icon-open {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 10px;
  overflow: hidden;
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.8s ease-in-out;
  max-height: 500px;
}

.expand-enter,
.expand-leave-to {
  max-height: 0;
}
</style>