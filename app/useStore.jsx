import { create } from 'zustand';

const useStore = create((set) => ({
  screen: 'loading',
  prevScreen: [],
  setScreen: (scr) => set((state) => ({ screen: scr, prevScreen: [...state.prevScreen, state.screen] })),
  goBack: () => set((state) => {
    const newPrevScreen = [...state.prevScreen];
    const lastScreen = newPrevScreen.pop();
    return { screen: lastScreen || state.screen, prevScreen: newPrevScreen };
  }),
}));

export default useStore;
