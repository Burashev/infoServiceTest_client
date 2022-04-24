<template>
  <form action="#" @submit.prevent="$emit('submit')">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "AppForm",
  emits: ['submit']
}
</script>

<style lang="scss">
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

a {
  display: block;
  margin-top: 10px;
}
</style>
