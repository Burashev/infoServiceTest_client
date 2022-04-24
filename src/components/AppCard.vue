<template>
  <div class="card">
    <div class="card__title">
      <h2>
        <slot name="title"></slot>
      </h2>
    </div>
    <div class="card__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard"
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
</style>
