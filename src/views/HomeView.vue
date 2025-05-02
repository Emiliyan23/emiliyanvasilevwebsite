<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'UrlShortener',
    description: 'Description.',
    link: { name: 'url-shortener' }
  }
])
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <h1 class="text-4xl font-bold text-center mt-10">Hello, i'm Emiliyan Vasilev</h1>
    <p class="text-center text-gray-600 mt-4">This website is a work in progress.</p>
    <section id="projects">
      <h2 class="text-3xl font-semibold mb-6">My Projects</h2>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects" :key="project.id" class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
          <div class="p-6 flex flex-col flex-grow">
            <h4 class="text-xl font-bold mb-2">{{ project.title }}</h4>
            <p class="text-gray-600 flex-grow">{{ project.description }}</p>
            <RouterLink :to="project.link" class="mt-4 inline-block text-blue-500 hover:underline">
              View Project →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-white border-t py-6">
      <div class="container mx-auto px-6 text-center text-gray-600">
        {{ new Date().getFullYear() }} Emiliyan Vasilev
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>