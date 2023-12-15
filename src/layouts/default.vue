<script setup lang="ts">
import { menus } from '~/modules/routes'

const router = useRouter()

const expandKeys = ref<string[]>([])

function onExpand(key: string) {
  const index = expandKeys.value.findIndex(value => value === key)
  if (index > -1)
    expandKeys.value.splice(index, 1)

  else
    expandKeys.value.push(key)
}

function onLink(path: string) {
  router.replace(path)
}
</script>

<template>
  <div h-full flex>
    <div class="h-full w-45" border="r-1 #eee" overflow-hidden>
      <ul v-for="(paths, key) in menus" :key="key" overflow-y-auto>
        <li p-2 border="t-1 #eee">
          <div bg="hover:#eee" flex cursor-pointer items-center justify-between rounded-2 py-1 pl-4 pr-2 @click="onExpand(key)">
            {{ key }}
            <div :class="{ 'rotate-z-90': expandKeys.includes(key) }" i-carbon-chevron-right icon-btn />
          </div>
          <ul :class="{ hidden: !expandKeys.includes(key) }">
            <li v-for="path in paths" :key="path" class="cursor-pointer rounded-2 px-4 py-1" bg="hover:#eee" @click="onLink(`/${key}/${path}`)">
              {{ path }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <RouterView />
  </div>
</template>
