import { defineStore } from 'pinia'

export const articleStore = defineStore('articles', {
  state: () => ({
    list: [],
  }),
  actions: {
    setArticles(articles) {
      this.list = articles;
    }
  }
})