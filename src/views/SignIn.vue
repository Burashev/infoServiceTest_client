<template>
  <app-card>
    <template v-slot:title>Sign in</template>
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
          <button type="submit">Sign In</button>
      </app-form>
    </template>
  </app-card>
</template>

<script>
import AppCard from "@/components/AppCard";
import AppForm from "@/components/AppForm";
export default {
  name: "SignIn",
  components: {AppForm, AppCard}
}
</script>

<style lang="scss" scoped>

</style>
