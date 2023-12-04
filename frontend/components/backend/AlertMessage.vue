<script setup>
import { mdiClose } from "@mdi/js";

defineProps({
  showAlertMessage: Boolean,
});
</script>
<template>
  <div
    v-show="showAlertMessage"
    class="bg-green-200 border border-green-300 black px-4 py-3 rounded relative"
    role="alert"
  >
    <span class="block sm:inline">Delete Successful</span>
    <span
      @click="$emit('closeAlertMessage')"
      class="absolute top-0 bottom-0 right-0 px-4 py-3"
    >
      <BaseIcon v-if="mdiClose" :path="mdiClose" />
    </span>
  </div>
</template>
