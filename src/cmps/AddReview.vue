<template>
  <section class="add-review">
    <md-button
      v-if="!isEditReviewShown"
      class="md-raised"
      @click="isEditReviewShown = !isEditReviewShown"
      >Add Review</md-button
    >
    <div v-if="isEditReviewShown" class="add-review-wrapper">
      <md-field>
        <label>Name</label>
        <md-input v-model="name"></md-input>
      </md-field>
      <input type="range" v-model.number="rate" /> {{ rate }}
      <md-field>
        <label>Description</label>
        <md-textarea v-model="description"></md-textarea>
      </md-field>

      <div class="review-btn-wrapper">
        <md-button class="md-raised" @click="addReview">ADD</md-button>
        <md-button class="md-raised" @click="cancelReview">CANCEL</md-button>
      </div>
    </div>
  </section>
</template>

<script>
import { bookService } from "@/services/bookService";
import eventBus from '@/services/eventBus.service.js';

export default {
  data() {
    return {
      isEditReviewShown: false,
      name: "Books Reader",
      description: null,
      rate: 0,
    };
  },
  methods: {
    cancelReview() {
      this.isEditReviewShown = false;
      this.description = null;
      // this.name=null
    },
    async addReview() {
      if (!this.name || !this.description) {
        eventBus.$emit('showMsg', {txt:'Fill all fields', type:'error'})
        return;
      }
      let review = {
        name: this.name,
        description: this.description,
        rate: this.rate,
        id: bookService.makeId()
      };
      this.$emit("addReview", review);
      eventBus.$emit('showMsg', {txt:'Review added', type:'success'})
      this.isEditReviewShown = false;
      this.description = null;
      // this.name=null
    },
  },
};
</script>

