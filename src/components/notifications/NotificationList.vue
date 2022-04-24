<template>
  <div class="notification-list">
    <transition-group name="list">
      <notification-item v-for="notification in notifications"
                         :text="notification.text"
                         :error="notification.error"
                         :key="notification.text"
      />
    </transition-group>
  </div>
</template>

<script>
import NotificationItem from '@/components/notifications/NotificationItem'
import {mapState} from 'vuex'

export default {
  name: 'NotificationList',
  components: {NotificationItem},
  computed: {
    ...mapState('notification', ['notifications'])
  }
}
</script>

<style lang="scss" scoped>
.notification-list {
  position: fixed;
  bottom: 30px;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 200;
}

.list-enter-active,
.list-leave-active {
  transition: all .6s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
