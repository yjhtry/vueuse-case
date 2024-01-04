<script setup lang="ts">
const containerRef = ref<HTMLElement | null>(null)
const { x, y } = useMouse({ target: containerRef })
</script>

<template>
  <div ref="containerRef" full>
    {{ x }}, {{ y }}
  </div>
</template>
