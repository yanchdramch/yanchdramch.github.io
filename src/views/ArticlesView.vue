<template>
  <div class="publications_page">
    <div class="articles_title">
      <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">{{ pageTitle[selectedLang].colored }}
        </div>
      </div>
    </div>
    <div class="publications">
      <div class="article_card" v-for="article in sortedArticles" @click="navigateToArticle(article.id)">
        <img class="card_image" :src="article.thumbnail"></img>
        <div class="card_type">{{ article.type }}</div>
        <div class="card_title">{{ article.title }}</div>
        <div>
          <div class="card_date">{{ getDateForLocale(article.date, selectedLang) }}</div>
          <div class="card_time">
            <FontAwesomeIcon class="clock_icon" :icon="['far', 'clock']" size="lg" :style="{ color: '#2f2061' }" />
            {{ article.length }} MIN READ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { articleStore } from '@/stores/articles.js';
import { languageStore } from '@/stores/language.js'
import { ref, watch, onMounted } from 'vue';

const store = languageStore();
const selectedLang = ref(store.language);

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);

const storeArticle = articleStore();
const articles = ref(storeArticle.list)
const sortedArticles = ref(articles.value.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()));

watch(
  () => storeArticle.list,
  (newList) => {
    articles.value = newList;
    sortedArticles.value = articles.value.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
);

const getDateForLocale = (date, language) => {
  const localeLangIdMap = {
    "en": "en-GB",
    "bg": "bg-BG",
    "de": "de-DE"
  }
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(localeLangIdMap[language], options);
}
</script>

<script>
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Alle ",
          "colored": "Schriften"
        },
        "en": {
          "normal": "All ",
          "colored": "Writings"
        },
        "bg": {
          "normal": "Всички ",
          "colored": "Писания"
        }
      }
    };
  },
  methods: {
    navigateToArticle(id) {
      this.$router.push(`article/${id}`)
    }
  },
};
</script>

<style>
.publications_page {
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
  width: 90vw;
  flex-direction: column;
  max-height: 85vh;
  box-sizing: border-box;
  margin-top: 0;
}

.articles_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.normal {
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  white-space: break-spaces;
  justify-content: left;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  scroll-padding-top: 2.5rem;
}

.colored {
  color: #FBC145;
  font-weight: 700;
  font-size: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}

.articles_title {
  margin-bottom: 3em;
  padding-top: 2em;
  justify-self: center;
}

.publications {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  align-content: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 4em;
}

.article_card {
  background-color: #fffdf6;
  width: 300px;
  height: 400px;
  box-shadow: 4px 4px 10px #2f206130;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  color:#2f2061;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article_card:hover {
  transform: translateY(-5px);
  box-shadow: 6px 6px 15px #2f206145;
  transition: 0.3s ease-in-out;
}

.card_image {
  height: 45%;
  object-fit: cover;
  width: 100%;
}

.card_type {
  background-color: #2f2061;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 10px;
  align-self: center;
  margin-top: 10px;
}

.card_title {
  min-height: 60px;
  display: flex;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  padding: 10px 15px;
  color: #222;
  align-items: flex-start; 
  justify-content: center;
  line-height: 1.2;
}

.card_date {
  font-size: 16px;
  color: gray;
  text-align: center;
}

.card_date:first-letter {
  text-transform: uppercase;
}

.card_time {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #eee;
  display: flex;
  align-items: anchor-center;
  justify-content: center;
  gap: 10px;
  color: #333;
}

.clock_icon {
  font-weight: bold;
  padding-top: 2px;
}

</style>
