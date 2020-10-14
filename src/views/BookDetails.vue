<template>
  <section>
    <div>
      <div class="book-details flex align-center space-between" v-if="book">
        <div class="details-container">
          <h4><span>Name:</span> {{ book.title }}</h4>
          <p><span>Published Date -</span> {{ book.publishedDate }}</p>
          <p><span>Number of page -</span> {{ book.pageCount }}</p>
          <p><span>Price -</span> {{ book.listPrice.amount }}$</p>
          <p><span>Tags - </span>{{ tags }}</p>
          <p><span>Description -</span> {{ book.description }}</p>

          <div class="reviews-container" v-if="book.reviews">
            <div v-for="review in book.reviews" :key="review._id">
              <review-preview :review="review" @removeReview="removeReview" />
            </div>
          </div>

          <add-review @addReview="addReview" />
        </div>
        <div class="img-container">
          <img :src="book.thumbnail" alt="img" />
        </div>
      </div>

      <div v-else class="loading flex justify-center align-center">
        <img src="@/assets/img/loading.svg" />
      </div>
      <div class="flex space-between change-book-page">
        <md-button class="md-raised" @click="nextBook(-1)"
          >PREVUEW BOOK</md-button
        >
        <md-button class="md-raised" @click="nextBook(1)">NEXT BOOK</md-button>
      </div>
    </div>
  </section>
</template>

<script>
import { bookService } from "@/services/bookService.js";
import AddReview from "@/cmps/AddReview";
import ReviewPreview from "@/cmps/ReviewPreview";


export default {
  name: "BookDetails",
  data() {
    return {
      book: null,
    };
  },
  components: {
    AddReview,
    ReviewPreview,
  },
  created() {
    setTimeout(async () => {
      const { id } = this.$route.params;
      this.book = await bookService.get(id);
    }, 500);
  },
  computed: {
    tags() {
      return this.book.categories && this.book.categories.join(", ");
    },
  },
  methods: {
    async addReview(review) {
      if (this.book.reviews) {
        this.book.reviews.push(review);
      } else {
        this.book.reviews = [review];
      }
      this.book = await bookService.save(this.book);
    },
    async removeReview(reviewId) {
      this.book.reviews = this.book.reviews.filter(
        (review) => review.id !== reviewId
      );
      await bookService.save(this.book);
    },
    async nextBook(type) {
      const bookId = await bookService.getNextBookId(this.book._id, type);
      if (!bookId) return;
      this.$router.push(`/book/${bookId}`);
    },
  },
  watch: {
    async "$route.params.id"(newId) {
      this.book = await bookService.get(newId);
    },
  },
};
</script>
