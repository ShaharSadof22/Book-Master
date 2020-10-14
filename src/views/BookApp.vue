<template>
  <section class="book-app">
    <book-filter @filtered="setFilter" @setAddBookShown="setAddBookShown"/>
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <book-add v-if="isAddBookShown" @cancelAddBook="setAddBookShown" @addBook="addBook"/> -->
    <book-list :books="booksToShow" @removeBook="removeBook" />
  </section>
</template>

<script>
import { bookService } from "@/services/bookService";
import BookList from "@/cmps/BookList";
import BookDetails from "@/views/BookDetails";
import BookFilter from "@/cmps/BookFilter";
import BookAdd from "@/cmps/BookAdd";

export default {
  name: "BookApp",
  data() {
    return {
      isAddBookShown: false,
    };
  },
  components: {
    BookFilter,
    BookList,
    BookDetails,
    BookAdd,
  },
  async created() {
    await this.loadBooks();
  },
  methods: {
    async loadBooks() {
      this.$store.dispatch({type: 'loadBooks'})
    },
    setFilter(filterBy) {
      this.$store.dispatch({type: 'setFilterBooks', filterBy})
    },
    setAddBookShown(val) {
      this.isAddBookShown = val;
    },
    async removeBook(id) {
      await bookService.remove(id);
      this.loadBooks();
    },
    async addBook(book) {
      this.isAddBookShown = false
      await bookService.save(book);
      this.loadBooks();
    },
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow
    },
  },
};
</script>