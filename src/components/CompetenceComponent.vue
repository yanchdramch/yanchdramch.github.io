<template>
    <div class="name">{{ myName[selectedLang].normal }}<div class="surname">{{ myName[selectedLang].colored }}</div>
    </div>
    <div class="competencies">
        <transition-group name="fade" tag="div">
            <div v-for="(competency, index) in competencies" :key="index" v-show="active_item === index"
                :style="{ fontWeight: '600' }" class="competency">
                {{ competency[selectedLang] }}
            </div>
        </transition-group>
    </div>
</template>

<script setup>
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

<script>
export default {
    name: "CompetenceComponent",
    mounted: function () {
        this.timer = setInterval(() => {
            this.active_item = (this.active_item + 1) % this.competencies.length;
        }, 3000)
    },

    data() {
        return {
            timer: null,
            active_item: 0,
            myName: {
                "en": { "normal": "Yana ", "colored": "Dramova" },
                "de": { "normal": "Yana ", "colored": "Dramova" },
                "bg": { "normal": "Яна ", "colored": "Драмова" },
            },
            competencies: [
                {
                    "en": "Dramatic",
                    "de": "Dramatisch",
                    "bg": "Драматична"
                },
                {
                    "en": "Pragmatic",
                    "de": "Pragmatisch",
                    "bg": "Прагматична"
                },
                {
                    "en": "Never static",
                    "de": "Nie statisch",
                    "bg": "Никога статична"
                }
            ]
        };
    },

    beforeDestroy() {
        clearInterval(this.timer);
        active_item = 0;
    }
};
</script>

<style scoped>
.name {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 3.5rem;
    display: flex;
    flex-direction: row;
    white-space: break-spaces;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin-bottom: -0.5rem;
    padding-top: 2em;
}

.surname {
    color: #FBC145;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 3.5rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: max-content;
}

@media (max-width: 400px) {
    .name {
        font-size: 2.5rem;
    }

    .surname {
        font-size: 2.5rem;
    }
}

.competencies {
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    min-height: 4rem;
    padding-top: 0.5em;
    width: 100%;
}

.competency {
    position: absolute;
    width: 100%;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease-out;
}

.fade-enter-from {
    transform: translateY(10px);
    opacity: 0;
}

.fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>