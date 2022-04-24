<template>
  <app-card>
    <template v-slot:title>Sign in</template>
    <template v-slot:body>
      <app-form @submit="formSubmit">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" required placeholder="example@domain.com" id="email" v-model="email">
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" required placeholder="***********" id="password" v-model="password">
        </div>
        <button type="submit">Sign In</button>
        <a href="#" @click.prevent="$router.push({name: 'signUp'})">Not registered yet?</a>
      </app-form>
    </template>
  </app-card>
</template>

<script>
import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";

export default {
  name: "SignIn",
  components: {AppForm, AppCard},
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    formSubmit() {
      const data = {email: this.email, password: this.password};
      this.$store.dispatch('user/signIn', data).then(() => {
        this.$router.push({name: 'index'});
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
