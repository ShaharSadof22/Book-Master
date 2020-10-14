<template>
  <div class="msg-list">
    <div v-for="(msg, idx) in msgs" :key="idx">
      <p :class="msgFrom(msg.from)" class="chat-msg-wrapper">{{ msg.txt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msgs: Array,
  },
  methods: {
    msgFrom(from) {
      if (from === "user") {
        return "chat-user-msg";
      } else {
        return "chat-bot-msg";
      }
    },
  },
};
</script>
