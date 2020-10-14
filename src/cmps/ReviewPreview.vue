<template>
  <div class="one-review">
    <div class="text-wrapper flex space-between">
      <p><span>Name: </span>{{ review.name }}</p>
      <p><span>Rate - </span>{{ review.rate }}</p>
    </div>
    <div class="flex space-between">
      <p class="description">{{ review.description }}</p>
      <button @click="removeReview" class="remove-review-btn">X</button>
    </div>
  </div>
</template>


<script>
import { bookService } from "@/services/bookService";
import eventBus from '@/services/eventBus.service.js';

export default {
  props: {
    review: Object
  },
  methods: {
    removeReview() {
      eventBus.$emit('showMsg', {txt:'Review removed', type:'success'})
      this.$emit("removeReview", this.review.id);
    },
  },
};
</script>

