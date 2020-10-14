<template>
  <footer class="app-footer flex space-between align-center">
    <p>Mister book</p>
    <div>
      <chat-box v-if="isChatShown">
        <div slot="header" class="char-header flex space-between align-center">
          <h3>Chat Support</h3>
          <button @click="setChatShown" class="esc-btn">Esc</button>
        </div>
      </chat-box>

      <button v-if="!isChatShown" @click="setChatShown">Start a chat</button>
    </div>
  </footer>
</template>



<script>
import ChatBox from "@/cmps/ChatBox";

export default {
  data() {
    return {
      isChatShown: true,
    };
  },
  components: {
    ChatBox,
  },
  methods: {
    setChatShown() {
      this.isChatShown = !this.isChatShown;
    },
  },
};
</script>
