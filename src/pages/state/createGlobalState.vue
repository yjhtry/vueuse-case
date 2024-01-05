<script setup lang="ts">
const useState = createGlobalState(() =>
  useStorage('vue-use-locale-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium',
  }))

const state = useState()
</script>

<template>
  <div full center>
    <div flex flex-col items-center text="black" space-y-8>
      <input v-model="state.name" w-50 type="text">
      <input v-model="state.color" w-50 type="text">
      <input v-model="state.size" w-50 type="text">

      <pre lang="yaml">{{ JSON.stringify(state) }}</pre>
    </div>
  </div>
</template>
