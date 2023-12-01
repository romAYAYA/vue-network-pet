<template>
  <div class="container mx-auto py-5">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />

    <form @submit.prevent="register">
      <input v-model="email" placeholder="Email" type="text" />
      <input v-model="password" type="text" />

      <button type="button" @click="register">Register</button>

      <div v-if="authStore.isAuth">
        <p>Welcome, {{ authStore.user.email }}</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import { IPost } from './models/IPost'

import { useAuthStore } from './store/index'

const posts = ref([] as IPost[])
const email = ref('')
const password = ref('')

const createPost = (post: IPost): void => {
  posts.value.push(post)
}
const authStore = useAuthStore()

const register = () => {
  authStore.registration(email.value, password.value)
}

// const login = () => {
//   authStore.login(email.value, password.value)
// }
</script>

<!-- 46:44 -->
<!-- 1:27 -->
<style scoped></style>
