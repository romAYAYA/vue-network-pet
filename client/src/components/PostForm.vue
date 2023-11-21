<template>
  <div>
    <form @submit.prevent class="flex flex-col gap-3">
      <input
        v-model="post.title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text"
        placeholder="Title"
      />
      <input
        v-model="post.body"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text"
        placeholder="Description"
      />
      <button
        class="self-end bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="createPost"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      post: {
        id: 0,
        title: '',
        body: '',
      },
    }
  },

  methods: {
    createPost(): void {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        id: 0,
        title: '',
        body: '',
      }
    },
  },
})
</script>

<style scoped></style>
