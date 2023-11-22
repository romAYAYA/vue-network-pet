<template>
  <div>
    <input type="text" v-model="email" placeholder="email@email.email" />
    <input type="text" v-model="password" placeholder="passwordAdmin" />
    <button>Login</button>
    <button>Register</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
    }
  },
})
</script>

<style scoped></style>
