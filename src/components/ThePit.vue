<template>
    <div class="pit_wrapper">
        <div class="pit_content">
            <div class="pit_title">
                <div class="normal">{{ pageTitle[selectedLang].normal }}</div>
            </div>
            <div class="the_pit">
                <div class="col leftcol"> 
                    <p class="strophe">
                        Hi, I'm Yana – loud and bright,<br>
                        Dramatic by name, chaotic by right.<br>
                        Born in Sofia, now in the Ruhr,<br>
                        Studying media, politics – nerdy for sure.
                    </p>
                    <p class="strophe"> 
                        A geek for words, artistic flair,<br>
                        Too many passions? Yep, I’m aware.<br>
                        Not diagnosed, just wired to be,<br>
                        Always in motion – welcome to me!<br>
                    </p>
                </div>
                <div class="col rightcol"> 
                    <p class="strophe">
                        Juggling projects – world is shifting,<br>
                        Yet memories sink, I’m constantly sifting.<br>
                        I hoard & I weave, I twist & I burn,<br>
                        I bury them here – now you can learn.
                    </p>
                    <p class="strophe">
                        Plenty to hear, plenty to see,<br>
                        Come take a dive right here with me.<br>
                        Already hooked? Drop me a line,<br>
                        Critique’s welcome, just keep it fine.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
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
</script>

<script lang="ts">
export default {
  data() {
    return {
      pageTitle: {
        "de": {
          "normal": "Welcome to My Pit",
          // "colored": "Artikel"
        },
        "en": {
          "normal": "Welcome to My Pit",
          // "colored": "Articles"
        },
        "bg": {
          "normal": "Welcome to My Pit",
          // "colored": "Статии"
        }
      }
    };
  },
};
</script>

<style scoped>
.pit_wrapper {
  width: 100vw;
  background-color: #fffdf6;
  justify-items: center;
  align-content: start;
  padding-bottom: 2em;
}

.pit_content {
  width: 100vw;
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
  color: #2f2061;
  justify-content: center;
}

.colored {
  color: #2f2061;
  font-weight: 700;
  font-size: 2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: max-content;
}

.pit_title {
  margin-bottom: 3em;
  padding-top: 2em;
  justify-self: center;
}

.the_pit {
  display: flex;
  color: #2f2061;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  width: 90%;
  place-self: anchor-center;
  padding-bottom: 1em;
  font-size: 1.25em;
}

.col {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  text-align: center;
}

.strophe {
    padding-bottom: 1em;
    font-size: 1.25em;
    font-weight: 500;
}
</style>