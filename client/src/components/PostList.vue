<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <h2
      class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl"
    >
      {{ post.title }}
    </h2>
    <p class="text-lg font-normal text-gray-500 lg:text-xl">{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

import { IPost } from '../models/IPost'

export default defineComponent({
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
