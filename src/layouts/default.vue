<template>
  <div h-screen w-screen flex flex-col color-base>
    <TheNav />
    <div flex grow>
      <TheSide />
      <RouterView />
    </div>
  </div>
</template>
