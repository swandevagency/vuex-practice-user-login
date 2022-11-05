<template>
  <div class="container">
    <h1>Sign Up</h1>
    <form>
      <label>User Name:</label>
      <userInput type="text" v-model="newUser.userName"/>
      <br>
      <label>Password:</label>
      <userInput type="password" v-model="newUser.password"/>
      <router-link to="/">
      <button @click="signup">sign up</button>
      </router-link>
    </form>
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
      newUser: {userName: '', password: ''}
    }
  },
  computed:{
  },
  methods: {
    signup() {
      this.$store.dispatch('signup', {
        newUser: this.newUser
      })
    }
  }
}
</script>

<style>

</style>