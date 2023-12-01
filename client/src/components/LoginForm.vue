<template>
  <div>
    <input type="text" v-model="email" placeholder="email@email.email" />
    <input type="text" v-model="password" placeholder="passwordAdmin" />
    <button>Login</button>
    <button>Register</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<style scoped></style>
