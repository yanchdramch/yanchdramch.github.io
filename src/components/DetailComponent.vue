<template>
    <div class="detail_icon">
        <FontAwesomeIcon :icon="[detailSet, detailIcon]" size="xl" :style="{ color: '#FBC145' }" />
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
    font-size: 1.5em;
    padding: 1em;
}
</style>