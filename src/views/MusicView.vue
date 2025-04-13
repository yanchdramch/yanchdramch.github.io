<template>
  <div class="music_page">
    <div>
      <div class="music_title">
        <div class="normal">{{ pageTitle[selectedLang].normal }}<div class="colored">{{ pageTitle[selectedLang].colored }}
          </div>
        </div>
      </div>
      <div class="music">
        <div class="music_project">
          <div class="normal">Elfinator</div>
          <div class="vid_gallery">
            <iframe src="https://www.youtube.com/embed/_yhv03vtlX0?si=rrN_FILJML2TEAYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/AdlbH9Ug0io?si=E5u8qrkNpeSCGg1L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- <CustomFooter></CustomFooter> -->
  </div>
</template>

<script setup>
import CustomFooter from '@/components/CustomFooter.vue';
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
</script>

<script>
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Meine ",
          "colored": "Musik"
        },
        "en": {
          "normal": "My ",
          "colored": "Music"
        },
        "bg": {
          "normal": "Моята ",
          "colored": "Музика"
        }
      }
    };
  }
};
</script>

<style>
.music_page {
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
  width: 90vw;
  flex-direction: column;
  max-height: 85vh;
  box-sizing: border-box;
  margin-top: 0;
  justify-content: space-between;
}

.music_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.music_project {
  color: #fffdf6;
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
  color: #00a39e;
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

.music {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 4em;
}

.vid_gallery {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
}

iframe {
  position: relative;
  min-width: 40vw;
  min-height: 35vh;
  max-width: 100%;
  max-height: 60vh;
  border: 2px solid #fffdf6;
}

</style>
