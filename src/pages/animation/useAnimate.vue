<script setup lang="ts">
const keyframes = ref([
  { clipPath: 'circle(20% at 0% 30%)' },
  { clipPath: 'circle(20% at 50% 80%)' },
  { clipPath: 'circle(20% at 100% 30%)' },
])

const el = ref<HTMLElement>()

const {
  isSupported,
  // animate,

  play,
  pause,
  reverse,
  finish,
  cancel,

  pending,
  playState,
  replaceState,
  startTime,
  currentTime,
  timeline,
  playbackRate,
} = useAnimate(el, keyframes, { duration: 2000, iterations: 5 })
</script>

<template>
  <div full center flex-col>
    <div flex gap-4>
      <button btn @click="play">
        play
      </button>
      <button btn @click="pause">
        pause
      </button>
      <button btn @click="reverse">
        reverse
      </button>
      <button btn @click="finish">
        finish
      </button>
      <button btn @click="cancel">
        cancel
      </button>
    </div>
    <div w-80>
      <pre>{{ JSON.stringify({ isSupported, pending, playState, replaceState, startTime, currentTime, timeline, playbackRate }, null, 2) }}</pre>
    </div>
    <div ref="el" h-80 w-80 rounded-full bg="black dark:white" />
  </div>
</template>
