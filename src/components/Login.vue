<template>
    <div class="view login">
        <h3>Join Chat</h3>
        <label for="username">userName</label>
        <br />
        <input  type="text" v-model="userName" />
        <br />
        <button @click="updateUsername">Join Chat</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return{
                userName: "",
            };
        },
    
    methods: {
        updateUsername() {
            this.$emit("updateUsername",this.userName);
        }
    }
    }
</script>

<style scoped>
.login {
    background-color: antiquewhite;
}

input {
    width:30%;
}
</style>