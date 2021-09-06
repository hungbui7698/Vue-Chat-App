<template>
    <div class="chatbox">
        <header>
        <h3>Chat</h3>
        <h5>Welcome {{ name }}!</h5>
        <button @click="Logout" >Log out</button>
        </header>

        <div class="card-body">
            <div
            v-for="message in messages"
            :key="message.id"
            >
                <BubbleView :message="message" :name="name" @deleteMessage="deleteMessage"/>
            </div>
        </div>
        <div class="sendmessage" :onsubmit="sendMessage">
            <input v-model="showMessage" type="text" value="Send message..."/>
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
import BubbleView from "./BubbleView.vue"
import fire from "../fire.js";
    export default {
        components: { BubbleView },
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
            deleteMessage(id){
                fire.database().ref("messages").child(id).remove();
            },

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
                if(data){
                
                Object.keys(data).forEach(key => {
                    messages.push({
                    id: key,
                    username: data[key].username,
                    text: data[key].text
                    });
                });
                }
                this.messages = messages;
            });
         }
    }
</script>
<style>
.chatbox{
    width: 50%;
    height: 600px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
}

.card-body {
    flex: auto;
    overflow: auto;
}

.sendmessage{
    flex: 0 0 auto;
    height: 60px;
    background: #e5e5ea;
    border-top: 1px solid #2671ff;
    box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
}

.sendmessage input{
    height: 59px;
    line-height: 60px;
    outline: 0 none;
    border: none;
    width: calc(100% - 60px);
    color: black;
    text-indent: 10px;
    font-size: 12pt;
    padding: 0;
    background: #e5e5ea;
}
.sendmessage button {
    float: right;
    border: none;
    background: #248BF5;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 2px 0 0 0;
    margin: 10px;
    cursor: pointer;
}
.sendmessage button:hover {
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>
