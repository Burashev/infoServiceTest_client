<template>
  <div class="container">
    <router-view/>
  </div>
  <notification-list/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f7fcff;
  font-family: Arial, sans-serif;
}
</style>

<style lang="scss">
.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
<script>
import NotificationList from "@/components/notifications/NotificationList";
export default {
  components: {NotificationList}
}
</script>
