export const menus = {} as Record<string, string[]>

export function install() {
  Object.keys(import.meta.glob('../pages/**/*.vue', { eager: true }))
    .map(path => path.replace('../pages/', ''))
    .filter(path => !['[...all].vue', 'index.vue'].includes(path))
    .map(path => path.split('/'))
    .forEach((paths) => {
      let [path, name] = paths
      if (!name)
        [name, path = '/'] = [path, name]

      name = name.slice(0, -4)
      if (!menus[path])
        menus[path] = [name]
      else
        menus[path].push(name)
    })
}
