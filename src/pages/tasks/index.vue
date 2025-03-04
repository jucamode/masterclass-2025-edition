<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { tasksWithProjectsQuery, type TaksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TaksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)
  tasks.value = data
}
await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
