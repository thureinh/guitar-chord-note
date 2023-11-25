<script setup>
const route = useRoute()
const buttonLabel = ref('')
const navLink = ref('')
watch(
  () => route.path,
  (path) => {
    buttonLabel.value = path.startsWith('/admin') ? 'Home' : 'Admin'
    navLink.value = path.startsWith('/admin') ? '/' : '/admin'
  },
  { immediate: true }
)
async function changeLayout() {
  await navigateTo({ path: navLink.value })
}
</script>
<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-white">Guitar Chord</a>

      <div class="flex items-center space-x-4">
        <a href="#" class="hover:text-gray-300 text-white">Home</a>
        <a href="#" class="hover:text-gray-300 text-white">About</a>
        <a href="#" class="hover:text-gray-300 text-white">Contact</a>

        <button @click="changeLayout" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full">{{
          buttonLabel }}</button>
      </div>
    </div>
  </nav>
</template>