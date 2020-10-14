<template>
  <div class="add-book-wrapper">
    <md-field>
      <label>Book Name</label>
      <md-input v-model="title"></md-input>
    </md-field>
    <md-field>
      <label>Book image</label>
      <md-input v-model="thumbnail"></md-input>
    </md-field>

    <div class="flex input-container">
      <md-field>
        <label>Published Date</label>
        <md-input v-model="publishedDate"></md-input>
      </md-field>
      <md-field>
        <label>Number of pages</label>
        <md-input v-model="pageCount"></md-input>
      </md-field>
    </div>
    <div class="flex input-container">
      <md-field>
        <label>Price</label>
        <md-input v-model="listPrice.amount"></md-input>
      </md-field>
      <md-field>
        <label>Is the book on sale? (yes / no)</label>
        <md-input v-model="listPrice.isOnSale"></md-input>
      </md-field>
    </div>
    <md-field>
      <label>Description</label>
      <md-textarea v-model="description"></md-textarea>
    </md-field>

    <div class="review-btn-wrapper">
      <md-button class="md-raised" @click="addBook"><router-link to="/book">ADD</router-link>
</md-button>
      <md-button class="md-raised" @click="cancelAddBook"><router-link to="/book">CANCEL</router-link>
</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Books Reader",
      publishedDate: "",
      pageCount: "",
      thumbnail: "",
      description: null,
      listPrice: {
        amount: 0,
        isOnSale: "no",
      },
    };
  },
  methods: {
    cancelAddBook() {
      this.$emit("cancelAddBook", false);
    },
    addBook() {
      const book = {
        title: this.title,
        publishedDate: this.publishedDate ? this.publishedDate : "2020",
        pageCount: this.pageCount,
        thumbnail: this.thumbnail
          ? this.thumbnail
          : "https://res.cloudinary.com/cloudinary-img/image/upload/v1602586854/Mister%20book%20vue/book_b6wrac.jpg",
        description: this.description
          ? this.description
          : "There is no description for this book.",
        listPrice: {
          amount: this.listPrice.amount ? this.listPrice.amount : 222,
          isOnSale: this.isBookOnSale,
        },
      };
      this.$emit("addBook", book);
    },
  },
  computed: {
    isBookOnSale() {
      if (this.listPrice.isOnSale.toLowerCase() === "yes") {
        return true;
      }
      return false;
    },
  },
};
</script>
