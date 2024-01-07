<template>
    <div class="main" id="sideBar">
        <div class="button toggle" :class="{ 'sidebar-open': toggleSidebar }"
            @click="stateStore.ToggleSidebar(toggleSidebar ? false : true)" v-if="!inMd">
            <div class="icon" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="catalog" :class="{ 'sidebar-open': toggleSidebar }">
            <div class="aside-container">
                <a class="heading" @click="scrollToTop()">{{ router.currentRoute.value.name }}</a>
                <div class="heading-container">
                    <div v-for="(heading, index) in headings" :key="index" class="headings-h1">
                        <div class="heading-h1" :class="{ current: convertToLink(heading.text) == currentHeading }">
                            <a class="heading-link" :href="'#' + convertToLink(heading.text)">{{
                                heading.text
                            }}</a>
                        </div>
                        <div v-for="(subHeading, subindex) in heading.subHeading" :key="subindex" class="heading-h2"
                            :class="{ current: convertToLink(subHeading.text) == currentHeading }">
                            <div class="heading-h2">
                                <a class="heading-link" :href="'#' + convertToLink(subHeading.text)">{{
                                    subHeading.text
                                }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { convertToLink, useStatusStore } from '@/use'
import { storeToRefs } from 'pinia'
import router from '@/main'

const stateStore = useStatusStore()
const { headings, currentHeading, toggleSidebar, inMd } = storeToRefs(stateStore)
function scrollToTop() {
    window.scrollTo({ top: 100, behavior: 'smooth' })
}

watch(inMd, (val) => {
    if (val) {
        stateStore.ToggleSidebar(false)
    }
})

</script>

<style>
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}

/* 1234567890 */

.heading {
    font-weight: 700;
    line-height: 2rem;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.4px;
    color: var(--has-text-black);
    cursor: pointer;
}

.headings-h1,
.headings-h2 {
    margin-bottom: 4px;
    margin-top: 4px;
    padding-left: 0;
}

.heading-h2 {
    padding-left: 0.35rem;
}

.heading-h1 {
    font-size: 1.2rem;
}

.heading-h1.current,
.heading-h2.current {
    display: block;
    border-left: 3px solid var(--has-text-success);
    transform: scale(1.1);

    a {
        color: var(--has-text-black);
    }
}

.heading-h1,
.heading-h2 {
    transition: all 0.15s ease-out;
    border-left: 2px solid transparent;
    margin-bottom: 3px;
    margin-top: 3px;

    a {
        font-weight: 700;
        font-size: 0.85rem;

    }
}

.heading-h2 {
    a {
        font-size: 0.75rem;
    }
}
</style>
