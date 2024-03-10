export const isActiveRoute = (current: string, route: string) => {
  const isIndex = route === "/"
  return current === route || (!isIndex && current.startsWith(route))
}
