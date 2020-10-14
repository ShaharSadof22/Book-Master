<template>
  <section class="filter-container flex justify-center">
    <md-button class="md-raised add-book-btn">
      <router-link to="/book/add">New Book</router-link>
    </md-button>
    <!-- <md-button
      class="md-raised add-book-btn"
      @click="showAddBook"
      >New Book</md-button
    > -->
    <input
      class="filter-book"
      @input="setFilter"
      type="text"
      v-model="filterBy.txt"
      placeholder="Search book..."
    />
    <input
      class="filter-book"
      @input="setFilter"
      type="number"
      v-model="filterBy.max"
      placeholder="Maximum price"
    />
  </section>
</template>

<script>
export default {
  name: "BookFilter",
  data() {
    return {
      filterBy: {
        txt: "",
        max: null,
      },
    };
  },
  methods: {
    setFilter() {
      if (this.filterBy.max < 0) {
        this.filterBy.max = null;
      }
      this.$emit("filtered", this.filterBy);
    },
    showAddBook() {
      this.$emit("setAddBookShown", true);
    },
  },
};
</script>
