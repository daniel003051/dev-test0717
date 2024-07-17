<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import type { Record, Records } from './types'
import { computed } from 'vue';

const inputValue = ref<string>('')
const records = ref<Record[]>([])

const serach  = async () => {
  try {
    const response = await axios.get<Records>('/k/v1/records.json', {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }, 
      params: {
        app: 98,
        query: `city in ("${inputValue.value}")`
      }
    })
    records.value = response.data.records
    console.log(records.value )
  } catch(e) {
    console.log(e)
  }
}

const total = computed(() => {
  return records.value.reduce((prev, curr) => {
    return prev += Number(curr.amount.value)
  }, 0)
})


</script>

<template>
  <div class="content">
    <input @keypress.enter="serach" v-model="inputValue" type="text">
    <p>{{ total }}</p>
    <ul>
      <li v-for="record in records" :key="record.name">
        <p>{{ record.name.value }}</p>
        <p>{{ record.amount.value }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list {
  list-style: none;
}
li {
  display: flex;
}
p {
  display: flex;
  padding: 0 4px;
}
</style>
