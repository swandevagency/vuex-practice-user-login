<template>
  <div class="container">
    <h1>Log In</h1>
    <form>
      <label>User Name:</label>
      <userInput type="text" v-model="userName"/>
      <br>
      <label>Password:</label>
      <userInput type="password" v-model="password"/>
    </form>
    <button @click="userLogin">log in</button>
    <div class="link">
      <p>If you don't have an account</p>
      <router-link to="/signUp">Sign Up Now</router-link>
    </div>
    <span>{{paragraph}}</span>
    
  </div>
</template>

<script>
import userInput from '@/components/userInput.vue'
export default {
  components: {
    userInput
  },
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  computed:{
    paragraph(){
      return this.$store.state.paragraph;
    },
    users(){
      return this.$store.state.users;
    }
  },
  methods: {
    userLogin() {
      this.$store.dispatch('userLogin', {
        userName: this.userName,
        password: this.password
      })
    }
  },
  mounted(){
    this.$store.commit('initialiseStore');
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  margin-top: 50px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  display: flex;
}
label {
  text-align: left;
  font-size: 20px;
}
button {
  margin-top: 70px;
  padding: 10px;
  font-size: 15px;
  width: 100px;
  cursor: pointer;
}
.link {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10PX;
  font-size: 15px;
}
span {
  margin-top: 10px;
  font-size: 20px;
  color: red;
}
</style>