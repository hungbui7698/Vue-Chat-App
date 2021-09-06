<template>
  <div id="app">
    <div v-if="!name">
      <Login @updateUsername="updateUsername"/>
    </div>

    <div class="view chat" v-else>
      <ChatView :userName="userName" :name="name" @Logout="Logout"/>
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