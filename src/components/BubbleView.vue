<template>
    <div class="message">
        <span v-if="message.username == name" class="my-username">You<span v-if="message.username == name" @click="deleteMessage(message.id)" class="delete">x</span></span>
        
        <span v-else class="username"> {{ message.username }} </span>
        <p :class="(message.username == name ? 'from-me' : 'from-them')">
            {{ message.text }}
        </p>
        
    </div>
</template>

<script>
export default {
    name: "BubbleView",

    props: {
            message:{
                required:true
            },
            name:{
                required:true
            }
        },
    methods: {
        deleteMessage(id){
            this.$emit("deleteMessage",id)
        }
    }
}
</script>

<style>
.message {
  background-color: #fff;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  font-family: "SanFrancisco";
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
}

.message p {
  border-radius: 1.15rem;
  line-height: 1.25;
  max-width: 75%;
  padding: 0.5rem .875rem;
  position: relative;
  word-wrap: break-word;
}


.username {
        color: #888;
        align-items: flex-start;
        font-size: 16px;
        padding-left: 15px;
        padding-right: 15px;
    }
.my-username {
        color: #888;
        align-self: flex-end;
        font-size: 16px;
        padding-left: 15px;
        padding-right: 15px;
    }
p[class^="from-"] {
  margin: 0.5rem 0;
  width: fit-content;
}
p.from-me {
  align-self: flex-end;
  background-color: #248bf5;
  color: #fff; 
}

p.from-them {
  align-items: flex-start;
  background-color: #e5e5ea;
  color: #000;
}

.message .delete {
    position: relative;
    align-self: flex-end;
    left:30px;
    top:39px;
    color:black;
    cursor: pointer;
}

</style>