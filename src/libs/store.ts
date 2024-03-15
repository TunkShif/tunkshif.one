import { create } from "zustand"

export type GlobalStore = {
  isSideBarOpen: boolean
  closeSideBar: () => void
  toggleSideBar: () => void
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isSideBarOpen: false,
  closeSideBar: () => set({ isSideBarOpen: false }),
  toggleSideBar: () => set((state) => ({ isSideBarOpen: !state.isSideBarOpen }))
}))
