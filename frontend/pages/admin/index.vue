<script setup lang="js">
  const route = useRoute()
  const { signOut } = useAuth()
  definePageMeta({
    layout: 'admin',
    middleware: 'auth',
  })
</script>

<template>
  <div>
    <h1 class="mb-5">Login Successful, Welcome to Admin Page!</h1>
    <UButton
      @click="signOut({ callbackUrl: '/' })"
      icon="i-heroicons-pencil-square"
      size="sm"
      color="primary"
      variant="solid"
      label="Logout"
      :trailing="false"
    />
  </div>
</template>