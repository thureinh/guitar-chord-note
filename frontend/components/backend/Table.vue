<script setup>
import { mdiPencil, mdiDeleteAlert } from "@mdi/js";
defineProps({
  dataList: Array,
  dataLabels: Array,
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th
          v-for="itemLabel in dataLabels"
          :key="itemLabel.id"
          class="uppercase"
        >
          {{ itemLabel.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in dataList" :key="item.id">
        <td>
          {{ key + 1 }}
        </td>

        <td v-for="itemLabel in dataLabels" :key="itemLabel.id">
          <v-template v-if="itemLabel.name == 'action'">
            <BaseButton
              :icon="mdiPencil"
              label="Edit"
              color="contract"
              rounded-full
              small
              class="mr-2"
              @click="$emit('edit-data', item.id)"
            />
            <BaseButton
              :icon="mdiDeleteAlert"
              label="Delete"
              color="contract"
              rounded-full
              small
              @click="$emit('delete-data', item.id)"
            />
          </v-template>
          <v-template v-else-if="itemLabel.name == 'gender'">
            {{ item[itemLabel.name] == 1 ? "Male" : "Female" }}
          </v-template>
          <v-template v-else>{{ item[itemLabel.name] }}</v-template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
