<script setup lang="js">
  definePageMeta({
    layout: 'admin',
  })
  const { signIn } = useAuth()
  const username = ref('')
  const password = ref('')
</script>

<template>
    <UCard @submit.prevent="signIn({username, password}, { callbackUrl: '/admin' })" class="w-96 mx-auto">
        <template #header>
          <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Login
          </p>
        </template>

        <UFormGroup label="Name" name="name" class="mb-3">
          <UInput v-model="username" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="password" />
        </UFormGroup>

        <template #footer>
          <UButton type="submit" color="black">
            Login
          </UButton>
        </template>
    </UCard>
</template>

