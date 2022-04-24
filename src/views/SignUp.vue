<template>
  <app-card>
    <template v-slot:title>Sign up</template>
    <template v-slot:body>
      <app-form @submit="formSubmit">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" placeholder="example@domain.com" id="email" v-model="email">
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" placeholder="***********" id="password" v-model="password">
        </div>
        <div class="input-group">
          <label for="password_repeat">Repeat Password</label>
          <input type="password" placeholder="***********" id="password_repeat" v-model="passwordRepeat">
        </div>
        <button type="submit">Sign Up</button>
        <a href="#" @click.prevent="$router.push({name: 'signIn'})">Already have an account?</a>
      </app-form>
    </template>
  </app-card>
</template>

<script>
import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";

export default {
  name: "SignUp",
  components: {AppForm, AppCard},
  data() {
    return {
      email: null,
      password: null,
      passwordRepeat: null
    }
  },
  methods: {
    formSubmit() {
      const data = {email: this.email, password: this.password, password_repeat: this.passwordRepeat};
      this.$store.dispatch('user/signUp', data).then(() => {
        this.$router.push({name: 'index'});
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 400px;
  background-color: #fff;
  border-radius: 7px;
  padding: 20px;

  &__title {
    margin-bottom: 15px;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
}

button {
  padding: 10px 15px;
  background-color: #1d80ff;
  color: white;
  border: none;
  font-size: inherit;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color ease .3s;

  &:hover {
    background-color: #186fde;
  }
}
</style>
