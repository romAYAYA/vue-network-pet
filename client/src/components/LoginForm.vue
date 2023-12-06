<template>
  <input type="text" v-model="email" placeholder="email@email.email" />
  <input type="text" v-model="password" placeholder="passwordAdmin" />
  <button @click="login">Login</button>
  <button @click="register">Register</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/index'

import { ref } from 'vue'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()

const register = () => {
  authStore.registration(email.value, password.value)
}

const login = () => {
  authStore.login(email.value, password.value)
}
</script>

<style scoped></style>
