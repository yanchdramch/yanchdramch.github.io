<template>
    <div class="detail_icon">
        <FontAwesomeIcon :icon="[detailSet, detailIcon]" class="icon" size="xl" @click="handleClick()"/>
        <Transition>
            <div class="alert_box" v-if=showCopyText>
                Copied to Clipboard!
            </div>
        </Transition>
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
        'link': String,
        'copy': Boolean,
    },

    data() {
        return {
            detailText: this.text,
            detailIcon: this.icon,
            detailSet: this.set,
            detailURL: this.link,
            copyToClipboard: this.copy,
            showCopyText: false,
        };
    },
    methods: {
        handleClick() {
            if (this.copyToClipboard) {
                navigator.clipboard.writeText(this.detailURL);
                this.showCopyText = true;
                setTimeout(() => {this.showCopyText = false}, 1250);
            }
            else {
                window.open(this.detailURL, "_blank")
            }
        }
    }
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
    display: flex;
    flex-direction: column;
}

.alert_box {
    font-size: 0.85em;
    margin-top: 2em;
    position: absolute;
    align-self: center;
    color: #00a39e;
}

.icon {
    color: #fffdf6;
    transition: color 450ms ease-in;
}

.icon:hover {
    color: #00a39e;
    transition: color 250ms linear;
    cursor: pointer;
}

.v-enter-active {
    transition: opacity 1s ease-in-out;
}

.v-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

</style>