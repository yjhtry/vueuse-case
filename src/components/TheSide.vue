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
  <div class="h-full w-60" border="r-1 base" of-hidden>
    <ul v-for="(names, path, index) in menus" :key="path" overflow-y-auto>
      <li p-2 border="t-1 base" :class="{ 'border-t-none': !index }">
        <div bg="hover:gray/90" flex cursor-pointer items-center justify-between rounded-2 py-1 pl-4 pr-2 @click="onExpand(path)">
          {{ path }}
          <div :class="{ 'rotate-z-90': expandKeys.includes(path) }" i-carbon-chevron-right icon-btn />
        </div>
        <ul :class="{ hidden: !expandKeys.includes(path) }">
          <li
            v-for="(name, innerIdx) in names"
            :key="name" border="b-1 base"
            :class="{ 'border-b-none': innerIdx === names.length - 1 }"
            class="cursor-pointer px-4 py-1" bg="hover:gray/90"
            @click="onLink(path === '/' ? `/${name}` : `/${path}/${name}`)"
          >
            {{ name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
