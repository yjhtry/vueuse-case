<template>
  <nav border="b-1 base" class="flex items-center gap-2 px6 py-2">
    <div mr-auto text="#f55 xl" font="900 mono">
      Flex
    </div>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
    <a
      href="https://github.com/yjhtry/css-start-over"
      target="_blank"
      class="rounded p-1"
      hover="bg-gray/30"
    >
      <div i-carbon-logo-github text="xl" />
    </a>
  </nav>
</template>
