export const isActiveRoute = (currentRoute: string, activeRoute: string) => {
  const isIndexRoute = activeRoute === "/"
  const isCurrentRoute = currentRoute === activeRoute
  return isCurrentRoute || (!isIndexRoute && currentRoute.startsWith(activeRoute))
}
