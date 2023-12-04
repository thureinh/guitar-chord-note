<script setup>
import { mdiViewList, mdiPlus } from "@mdi/js";
let isShowModal = ref(false);
let deleteId = ref(null);
let showAlertMessage = ref(false);
const dataList = ref([
  {
    id: 1,
    name: "User",
    email: "user@gmail.com",
    phone: "09761051414",
    gender: 1,
  },
  {
    id: 2,
    name: "Admin",
    email: "admin@gmail.com",
    phone: "09761051414",
    gender: 0,
  },
  {
    id: 3,
    name: "Co leader",
    email: "coleader@gmail.com",
    phone: "09761051414",
    gender: 1,
  },
  {
    id: 4,
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "09761051414",
    gender: 0,
  },
  {
    id: 5,
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    phone: "09761051414",
    gender: 1,
  },

  {
    id: 6,
    name: "User 6",
    email: "user6@gmail.com",
    phone: "09761051414",
    gender: 1,
  },
  {
    id: 7,
    name: "User 7",
    email: "user7@gmail.com",
    phone: "09761051414",
    gender: 1,
  },
  {
    id: 8,
    name: "User 8",
    email: "user8@gmail.com",
    phone: "09761051414",
    gender: 0,
  },
  {
    id: 9,
    name: "User 9",
    email: "user9@gmail.com",
    phone: "09761051414",
    gender: 0,
  },
  {
    id: 10,
    name: "User 10",
    email: "user10@gmail.com",
    phone: "09761051414",
    gender: 1,
  },
]);

const dataLabels = ref([
  { id: 1, name: "name", type: "string" },
  { id: 2, name: "email", type: "string" },
  { id: 3, name: "phone", type: "string" },
  { id: 4, name: "gender", type: "radio" },
  { id: 5, name: "action", type: "action" },
]);

// fetch with id and go to form view
const editUser = (id) => {
  console.log(id, "edit user");
};

const deleteUser = (id) => {
  deleteId.value = id;
  isShowModal.value = true;
};

const closeModal = (id) => {
  //delete item
  if (id) {
    showAlertMessage.value = true;
  }
  isShowModal.value = false;
};

const closeAlertMessage = () => {
  showAlertMessage.value = false;
};
</script>

<template>
  <SectionMain>
    <BackendAlertMessage
      :show-alert-message="showAlertMessage"
      @closeAlertMessage="closeAlertMessage"
    />
    <SectionTitleLineWithButton :icon="mdiViewList" title="User List" main>
      <BaseButton
        to="/backend-ui/users/form"
        :icon="mdiPlus"
        label="Create New"
        color="contrast"
        rounded-full
        medium
      />
    </SectionTitleLineWithButton>

    <CardBox class="mb-6 shadow" has-table>
      <BackendTable
        :data-labels="dataLabels"
        :data-list="dataList"
        @delete-data="deleteUser"
        @edit-data="editUser"
      />
    </CardBox>
  </SectionMain>
  <BackendDeleteModal
    :id="deleteId"
    :is-show-modal="isShowModal"
    @closeModal="closeModal"
  />
</template>
