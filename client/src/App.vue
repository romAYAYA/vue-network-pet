<template>
  <div class="container mx-auto py-5">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
    <div>
      <p>Count: {{ authStore.count }}</p>
      <p>Name: {{ authStore.name }}</p>
      <p>Double Count: {{ authStore.doubleCount }}</p>
      <button @click="authStore.increment">Increment</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import { IPost } from './models/IPost'

import { useAuthStore } from './store/index'

const posts = ref([] as IPost[])

const createPost = (post: IPost): void => {
  posts.value.push(post)
}

const authStore = useAuthStore()
</script>

<!-- 46:44 -->
<!-- 1:27 -->
<style scoped></style>
