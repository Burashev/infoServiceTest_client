<template>
  <app-card>
    <template v-slot:title>Sign up</template>
    <template v-slot:body>
      <app-form>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" placeholder="example@domain.com" id="email">
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" placeholder="***********" id="password">
        </div>
        <div class="input-group">
          <label for="password_repeat">Repeat Password</label>
          <input type="password" placeholder="***********" id="password_repeat">
        </div>
        <button type="submit">Sign Up</button>
      </app-form>
    </template>
  </app-card>
</template>

<script>
import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";

export default {
  name: "SignUp",
  components: {AppForm, AppCard}
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
