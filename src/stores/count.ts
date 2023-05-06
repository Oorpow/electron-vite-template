import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 3,
  }),
  actions: {
    add() {
      this.count += 1
    },
  },
})
