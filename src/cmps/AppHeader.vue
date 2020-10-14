<template>
  <nav class="app-header flex space-between align-center">
    <user-msg :msg="msg"/>
    <h2 class="title-header">Mister Book</h2>
    <div class="nav-btn flex align-center">
      <router-link to="/" exact>Home</router-link>|
      <router-link to="/book" exact>Books</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
import UserMsg from "@/cmps/UserMsg"
import eventBus from '@/services/eventBus.service.js';

export default {
  data() {
    return {
      msg: {
        txt:'',
        type: null
      },
    };
  },
  created() {
    eventBus.$on('showMsg', (msg) => {
      this.msg = msg;
      setTimeout(() => {
        this.msg.txt = '';
        this.msg.type = null;
      }, 2000);
    });
  },
  destroyed() {
    eventBus.$off('showMsg');
  },
  components: {
    UserMsg
  },
};
</script>
