<template>
    <div class="detail_wrapper">
        <div class="detail_icon">
            <FontAwesomeIcon :icon="[detailSet, detailIcon]" size="xl" :style="{ color: '#66B95C' }" />
        </div>
        <div v-if="detailURL" class="detail_link">
            <a :href=detailURL>{{ detailText }}</a>
        </div>
        <div v-else class="detail_text">
            {{ detailText }}
        </div>
    </div>
</template>


<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<script lang="ts">
export default {
    name: "DetailComponent",
    props: {
        'text': String,
        'icon': String,
        'set': String,
        'link': String
    },

    data() {
        return {
            detailText: this.text,
            detailIcon: this.icon,
            detailSet: this.set,
            detailURL: this.link
        };
    },
};
</script>

<style scoped>
.detail_wrapper {
    display: flex;
    flex-direction: row;
    width: 95%;
    flex-wrap: nowrap;
    text-wrap: nowrap;
    background-color: #222;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1.5rem;
}

.detail_icon {
    width: 2.5rem;
}
</style>