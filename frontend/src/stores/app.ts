import { defineStore } from 'pinia';

export type AppState = {
  counter: number;
};

export type AppGetters = {
  doubleCount: (state: AppState) => number;
};

export type AppActions = {
  increment: () => void;
};

const useAppStore = defineStore<string, AppState, AppGetters, AppActions>(
  'counter',
  {
    state: () => ({
      counter: 0,
    }),

    getters: {
      doubleCount(state) {
        return state.counter * 2;
      },
    },

    actions: {
      increment() {
        this.counter++;
      },
    },
  }
);

export default useAppStore;
