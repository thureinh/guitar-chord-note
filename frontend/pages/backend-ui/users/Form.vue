<script setup>
import { mdiArrowLeft, mdiAccount, mdiMail, mdiTextBoxEdit } from "@mdi/js";

const form = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "",
});
</script>

<template>
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdiTextBoxEdit" title="Edit Form" main>
      <BaseButton
        to="/backend-ui/users/list"
        :icon="mdiArrowLeft"
        label="Back To List"
        color="contrast"
        rounded-full
        medium
      />
    </SectionTitleLineWithButton>
    <CardBox form @submit.prevent="submit">
      <FormField>
        <FormControl v-model="form.name" :icon="mdiAccount" />
        <FormControl v-model="form.email" type="email" :icon="mdiMail" />
      </FormField>
      <FormField label="Gender">
        <FormCheckRadioGroup
          name="Gender"
          type="radio"
          :options="{ one: 'Male', two: 'Female' }"
        />
        <FormControl
          v-model="form.phone"
          type="tel"
          placeholder="Your phone number"
        />
      </FormField>
      <FormField label="Address" help="Your question. Max 255 characters">
        <FormControl type="textarea" placeholder="Write Current Location" />
      </FormField>

      <template #footer>
        <BaseButton
          type="submit"
          color="contract"
          label="Submit"
          rounded-full
          medium
          class="mr-2"
        />
        <BaseButton
          type="reset"
          color="info"
          outline
          label="Reset"
          rounded-full
          medium
        />
      </template>
    </CardBox>
  </SectionMain>
</template>
