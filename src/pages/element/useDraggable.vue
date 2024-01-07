<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 400, y: 120 },
})
</script>

<template>
  <div ref="el" :style="style" bg="black dark:white" text="white dark:black" fixed cursor-pointer rounded px-5 py-4 shadow-lg>
    Drag me! I am at {{ x.toFixed(2) }}, {{ y.toFixed(2) }}
  </div>
</template>
