<template>
  <section class="chat-box">
    <slot name="header"></slot>
    <msg-list :msgs="msgs" />
    <div class="chat-input-wrapper">
      <input type="text" v-model="msg" />
      <button @click="sendMsg">Send</button>
    </div>
  </section>
</template>

<script>
import MsgList from "@/cmps/MsgList";

export default {
  data() {
    return {
      msgs: [],
      msg: "",
    };
  },
  components: {
    MsgList,
  },
  methods: {
    sendMsg() {
      if (!this.msg) return;
      this.msgs.push({ txt: this.msg, from: "user" });
      this.msg = "";
      this.addMsgFromBot();
    },
    addMsgFromBot() {
      setTimeout(() => {
        this.msgs.push({
          txt: "Support: Hey, how can I help you?",
          from: "bot",
        });
      }, 1000);
    },
  },
};
</script>
