<template>
  <div v-if="msg.txt" class="user-msg" :class="msg.type">
    <h2 >{{ msg.type }}</h2>
    <p>{{ msg.txt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: Object
  },
  computed: {
    type() {
        return this.msg.type === 'success'
    },
  },
};
</script>
