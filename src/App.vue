<template>
  <div id="app">
    <!-- Login section -->
    <div v-if="!name">
      <Login @updateUsername="updateUsername"/>
    </div>

    <!-- Chat section -->
    <div class="view chat" v-else>
      <chat-view :userName="userName" :name="name" @Logout="Logout"/>
    </div>
  </div>
</template>

<script>
import ChatView from './components/ChatView.vue';
import Login from "./components/Login.vue";
export default {
  components: { Login, ChatView },
  name: "App",
  data() {
    return {
      userName: "",
      name: null,
    };
  },
  methods: {
    updateUsername(userName) {
      this.name = userName;
      this.userName = "";
    },
    Logout() {
      this.name="";
    }, 
  },
}
</script>

<style>

</style>