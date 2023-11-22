<template>
  <div class="container mx-auto py-5">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

import { IPost } from './models/IPost'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
      posts: [] as IPost[],
    }
  },

  methods: {
    createPost(post: IPost): void {
      this.posts.push(post)
    },
  },
})
</script>

<style scoped></style>
