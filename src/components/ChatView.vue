<template>
    <div>
        <header>
        <h3>Chat</h3>
        <h5>Welcome {{ name }}!</h5>
        <button @click="Logout" >Log out</button>
        </header>

        <ul class="card-body">
            <li
            :class="(message.username == name ? 'message current-user' : 'message')"
            v-for="message in messages"
            :key="message.key"
            >
                <div>
                    <span v-if="message.username == name" class="username">You</span>
                    <span v-else class="username"> {{ message.username }} </span>
                    <p :class="(message.username == name ? ' current-content' : 'content')">{{ message.text }}</p>
                </div>
            </li>
        </ul>
        <footer>
        <input v-model="showMessage" type="text"/>
        <button @click="sendMessage">Send</button>
        </footer>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-chat-scroll/dist/vue-chat-scroll.min.js"></script>
<script>


import fire from "../fire.js";
    export default {
        name: "ChatView",
        data() {
            return {
            showMessage: "",
            messages:[],
            };
        },
        props: {
            userName:{
                required:true
            },
            name:{
                required:true
            }
        },

        methods: {
            sendMessage() {
                const message = {
                    text: this.showMessage,
                    username: this.name
                };
                console.log(this.showMessage);
                if (this.showMessage !=="" && this.showMessage !== null){
                    fire
                    .database()
                    .ref("messages")
                    .push(message);
                    this.showMessage = "";
                }
            },
            Logout(){
                this.$emit("Logout")
            }
        },
        mounted() {
            const itemsRef = fire.database().ref("messages");
            itemsRef.on("value", snapshot => {
            let data = snapshot.val();
            let messages = [];
            Object.keys(data).forEach(key => {
                messages.push({
                id: key,
                username: data[key].username,
                text: data[key].text
                });
            });
            this.messages = messages;
            });
         }
    }
</script>
<style>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;

}
.card-body {
  width: 50%;
  height: 50vh;
  overflow-y: auto;
}
.message {
  display: flex;
  margin-bottom: 15px;
  max-width:90%;
}
.username {
        color: #888;
        font-size: 16px;
        margin-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
    }
.content {		
    padding: 10px 20px;
    background-color: #F3F3F3;
    border-radius: 9px;
    color: #333;
    font-size: 18px;
    word-break: break-word;
    max-width:100%;
}
.current-content{					
    padding: 10px 20px;
    background-color: #5b87da;
    border-radius: 9px;
    color: #333;
    font-size: 18px;
    word-break: break-word;
    max-width:100%;
}
</style>
