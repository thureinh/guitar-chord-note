<script setup>
const { signIn } = useAuth()
const username = ref('')
const password = ref('')
</script>

<template>
  <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
    <CardBox
      :class="cardClass"
      is-form
      @submit.prevent="
        signIn({ username, password }, { callbackUrl: '/admin' })
      "
    >
      <FormField label="Login" help="Please enter your login">
        <FormControl
          v-model="username"
          :icon="mdiAccount"
          name="username"
          autocomplete="username"
        />
      </FormField>

      <FormField label="Password" help="Please enter your password">
        <FormControl
          v-model="password"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </FormField>

      <template #footer>
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Login" />
        </BaseButtons>
      </template>
    </CardBox>
  </SectionFullScreen>
</template>
