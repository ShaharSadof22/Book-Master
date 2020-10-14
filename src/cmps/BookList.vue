<template>
<div>
  <ul class="book-list clean-list flex wrap justify-center">
    <book-preview v-for="book in books" :key="book._id" :book="book"  @remove="remove"/>
  </ul>
  </div>
</template>

<script>
import BookPreview from "@/cmps/BookPreview";

export default {
  name: "book-list",
  props: {
    books: Array
  },
  components: {
    BookPreview,
  },
  methods: {
    remove(id) {
      this.$emit('removeBook', id);
    },
  },
};
</script>
