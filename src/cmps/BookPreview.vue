<template>
  <li class="book-preview flex column space-between">
    <div class="sale-wrapper" v-if="book.listPrice.isOnSale">Sale</div>
      <img :src="book.thumbnail" alt="img" />
      <h3 >{{book.title}}</h3>
      <p >{{book.listPrice.amount}}$</p>
    <section class="flex justify-center ">
        <button @click="remove" class="preview-btn">Remove</button>
        <button class="preview-btn">
            <router-link :to="`/book/${book._id}`" >Details</router-link>
        </button>
    </section>
  </li>
</template>

<script>
import eventBus from '@/services/eventBus.service.js';

export default {
  name: "BookPreview",
  props: {
    book: Object
  },
  methods: {
    remove() {
      eventBus.$emit('showMsg', {txt:'Book removed', type:'success'})
      this.$emit("remove", this.book._id);
    },
  },
};
</script>

<style>
</style>