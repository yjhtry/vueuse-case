<script setup lang="ts">
const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  // eslint-disable-next-line no-console
  console.log(files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/svg+xml', 'image/png'],
})
</script>

<template>
  <div full center flex-col>
    <div mb-20>
      <img src="/favicon.svg" width="80">
    </div>
    <div ref="dropZoneRef" min-h-20 min-w-80 rounded p-6 shadow text="white center dark:black" bg="black dark:white">
      Drop Svg files here
      <div> {{ isOverDropZone ? '👍' : '👎' }}</div>
    </div>
  </div>
</template>
