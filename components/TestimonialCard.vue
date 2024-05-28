<template>
  <div class="faq-component">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <div class="faq-question" @click="toggleAnswer(index)">
        <h3>{{ faq.question }}</h3>
        <span class="faq-icon" :class="{ 'faq-icon-open': faq.isOpen }">{{ faq.isOpen ? '-' : '+' }}</span>
      </div>
      <div v-if="faq.isOpen" class="faq-answer">
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  faqs: {
    type: Array,
    required: true
  }
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
  background-color: #f5f5f5;
  cursor: pointer;
}

.faq-question h3 {
  margin: 0;
}

.faq-icon {
  font-size: 20px;
  font-weight: bold;
}

.faq-icon-open {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 10px;
  background-color: #ffffff;
}
</style>