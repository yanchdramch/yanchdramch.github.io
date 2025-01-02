import { defineStore } from 'pinia'

export const languageStore = defineStore('language', {
  state: () => ({
    language: 'en',
  }),
  actions: {
    setLanguage(lang) {
      this.language = lang;
    }
  }
})