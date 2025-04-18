<template>
    <div class="recent_wrapper">
        <div class="recent_content">
            <div class="articles_title">
                <div class="normal">{{ pageTitle[selectedLang].normal }}</div>
            </div>
            <div class="recent_articles">
              <div class="article_card" v-for="article in newestArticles" @click="navigateToArticle(article.id)">
                <img class="card_image" :src="article.thumbnail"></img>
                <div class="card_type">{{ article.type[selectedLang] }}</div>
                <div class="card_title">{{ article.title[selectedLang] }}</div>
                <div>
                  <div class="card_date">{{ getDateForLocale(article.date, selectedLang) }}</div>
                  <div class="card_time">
                    <FontAwesomeIcon class="clock_icon" :icon="['far', 'clock']" size="lg" :style="{ color: '#2c1338' }" />
                    {{ article.length }} {{ lenText[selectedLang] }}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { articleStore } from '@/stores/articles.js';
import { languageStore } from '@/stores/language.js'
import { ref, watch } from 'vue';

const store = languageStore()
const selectedLang = ref(store.language);

watch(
  () => store.language,
  (newLang) => {
    selectedLang.value = newLang;
  }
);

const storeArticle = articleStore();
const articles = ref(storeArticle.list)
const newestArticles = ref(articles.value.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0,3));

watch(
  () => storeArticle.list,
  (newList) => {
    articles.value = newList;
    newestArticles.value = articles.value.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0,3);
  }
);

const getDateForLocale = (date:Date, language:string) => {
  const localeLangIdMap = {
    "en": "en-GB",
    "bg": "bg-BG",
    "de": "de-DE"
  }
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(localeLangIdMap[language], options);
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Aktuelle Beiträge",
          // "colored": "Artikel"
        },
        "en": {
          "normal": "Latest Uploads",
          // "colored": "Articles"
        },
        "bg": {
          "normal": "Скорошни публикации",
          // "colored": "Статии"
        }
      },
      lenText: {
        "de": "MIN",
        "en": "MIN",
        "bg": "МИН"
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

<style scoped>
.recent_wrapper {
  width: 100vw;
  background-color: #00a39e;
  justify-items: center;
  align-content: start;
  padding-bottom: 6em;
}

.recent_content {
  width: 100%;
}

.normal {
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  white-space: break-spaces;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  scroll-padding-top: 2.5rem;
  color: #2c1338;
  justify-content: center;
}

.colored {
  color: #2c1338;
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
  font-family: "Playfair Display", serif;
}

.recent_articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  align-content: center;
  justify-content: space-evenly;
  width: 100%;
}

.article_card {
  background-color: #fffdf6;
  width: 300px;
  height: 400px;
  box-shadow: 4px 4px 10px #2c133830;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  color:#2c1338;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article_card:hover {
  transform: translateY(-5px);
  box-shadow: 6px 6px 15px #2c133845;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.card_image {
  height: 45%;
  object-fit: cover;
  width: 100%;
}

.card_type {
  background-color: #2c1338;
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
  align-items: center;
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