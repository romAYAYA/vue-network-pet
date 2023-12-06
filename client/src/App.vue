<template>
  <div v-if="authStore.isLoading">Loading...</div>
  <div v-else class="container mx-auto py-5">
    <div>
      <h1 v-if="authStore.isAuth">
        User authorized {{ authStore.user.email }}
        <button @click="authStore.logout">Logout</button>
      </h1>
      <h1 v-else><LoginForm /></h1>
    </div>
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import LoginForm from './components/LoginForm.vue'
import { IPost } from './models/IPost'
import { useAuthStore } from './store/index'

const posts = ref([] as IPost[])

const authStore = useAuthStore()

const createPost = (post: IPost): void => {
  posts.value.push(post)
}

if (localStorage.getItem('token')) {
  authStore.checkAuth()
}
</script>

<style scoped></style>
