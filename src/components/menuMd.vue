<template>
  <nav :class="`menu`">
    <div :class="`ribbon`"></div>
    <ul class="nav-items" :class="{ 'nav-items-inMd': inMd }">
      <li class="nav-first">
        <div class="toggle-sidebar-button" :class="{ 'sidebar-open': sidebarOpen }"
          @click="sidebarOpen = sidebarOpen ? false : true">
          <div class="icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </li>
      <li class="nav-center">
        <Logo class="logo" />
      </li>
    </ul>
    <div class="sidebar-mask" :class="{ 'sidebar-close': !sidebarOpen }" @click="sidebarClose"></div>
    <div class="sidebar-menu" :class="{ 'sidebar-close': !sidebarOpen }">
      <menu>
        <ul>
          <li v-for="(heading, index) in Hs" :key="index">
            <div v-if="typeof heading == 'object'" class="nav-link-top toggle">{{ index }}</div>
            <ul v-if="typeof heading == 'object'">
              <li v-for="(_, subIndex) in heading" :key="subIndex">
                <router-link :to="'/' + profile.teamName + '/' + convertToLink(subIndex)" @click="sidebarClose"
                  class="nav-link">{{ subIndex }}
                </router-link>
              </li>
            </ul>
            <router-link v-if="typeof heading == 'string'" class="nav-link-top"
              :to="'/' + profile.teamName + '/' + (index == 'Home' ? '' : convertToLink(index))" @click="sidebarClose">{{
                index }}
            </router-link>
          </li>
        </ul>
      </menu>
      <aside>
        <div v-for="(heading, index) in headings" :key="index" class="headings-h1" v-show="currentRoute != 'Home'">
          <div class="heading-h1">
            <a @click="sidebarClose" class="heading-link" :href="'#' + convertToLink(heading.text)"
              :class="{ current: convertToLink(heading.text) == currentHeading }">{{ heading.text }}</a>
          </div>
          <div v-for="(subHeading, subindex) in heading.subHeading" :key="subindex" class="headings-h2">
            <div class="heading-h2">
              <a @click="sidebarClose" class="heading-link" :href="'#' + convertToLink(subHeading.text)"
                :class="{ current: convertToLink(subHeading.text) == currentHeading }">{{ subHeading.text }}</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from './logowithname.vue'
import { currentRoute } from '@/router'
import { useStatusStore, profile, convertToLink } from '@/use'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { Headings as Hs } from '@/router'

const stateStore = useStatusStore()
const { inMd } = storeToRefs(stateStore)
const sidebarOpen = ref(false)

function sidebarClose() {
  sidebarOpen.value = false
}

const { headings, currentHeading } = storeToRefs(stateStore)
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu {
  position: sticky;
  top: 0;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 60px;
  width: 100%;
  left: 0;
  z-index: 2;

  .ribbon {
    top: 0;
    background-color: #333;
    position: absolute;
    height: 60px;
    width: 100%;
    left: 0;
    transition:
      width 0.2s ease,
      height 0.2s ease,
      top 0.2s ease,
      left 0.2s ease;
  }

  .ribbon.float {
    height: 40px;
    top: 10px;
    width: 70%;
    left: 15%;
    border-radius: 5px;
  }

  .sidebar-mask {
    position: absolute;
    height: calc(100vh - 60px);
    width: 100%;
    top: 60px;
    background: transparent;
    transition:
      transform 0.2s ease,
      width 0.2s ease;
  }

  .sidebar-menu {
    position: absolute;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    width: fit-content;
    background: rgb(0, 23, 40);
    border-right: 2.5px solid;
    transition: transform 0.2s ease;
    overflow-y: auto;

    a {
      text-decoration: none;
    }

    menu {
      box-sizing: border-box;
      padding: 0;

      .nav-link-top.toggle::before {
        display: inline-block;
        margin-right: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }

      .nav-link,
      .nav-link-top {
        display: block;
        font-weight: 600;
        margin-bottom: 4px;
        color: rgb(158, 158, 158);
        margin: 0.5rem 0.7rem 0.5rem 0.7rem;
      }

      .nav-link,
      .nav-link-top:not(.toggle) {
        color: var(--them-h2);
        text-decoration: underline;
      }

      .nav-link {
        font-size: 1.1rem;
        margin-left: 1.8rem;
      }

      .nav-link-top {
        font-size: 1.1rem;
        font-weight: 900;
      }
    }

    menu:after {
      display: block;
      content: '';
      height: 2.5px;
      background-color: rgb(157, 157, 157);
      width: 100%;
      margin-top: 1rem;
    }

    aside {
      a {
        color: rgb(157, 157, 157);
      }

      .heading-h1,
      .heading-h2 {
        font-weight: 800;
        margin-bottom: 4px;
        font-size: 0.9rem;
        margin: 0.7rem 0 0.7rem 0;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
      }

      .heading-h2 {
        padding-left: 1.3rem;
      }

      .heading-link {
        transition: transform 0.15s ease-in-out;
      }

      .current {
        color: rgb(159, 226, 255);
        display: block;
        transform: scale(1.05);
      }
    }
  }

  .sidebar-mask.sidebar-close {
    width: 50%;
    transform: translateX(-100%);
  }

  .sidebar-menu.sidebar-close {
    transform: translateX(-100%);
  }
}

.nav-items {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  margin-left: 15%;
  margin-right: 15%;
  padding: 0;
  width: 100%;
  height: 60px;

  .nav-first {
    margin-top: 10px;
  }

  .nav-center {
    position: relative;
    height: 100%;
    padding: 13px;      

    .logo {
      height: 100%;
      font-size: 1rem;
    }
  }

  .toggle-sidebar-button {
    height: 40px;
    border-radius: 50%;
    width: 40px;
    transition:
      background-color 0.2s ease,
      border-radius 0.2s ease;

    .icon {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 1.25rem;
      height: 1.25rem;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      span {
        display: inline-block;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: #00244a;
        transition: transfrgb(0, 40, 72)0.3s ease;
      }

      span:nth-child(2) {
        margin: 6px 0;
      }
    }
  }

  .toggle-sidebar-button:hover {
    background-color: #444;
    border-radius: 40%;

    .icon {
      filter: drop-shadow(0 0 0.75rem #7ddcc7);
    }
  }

  .toggle-sidebar-button.sidebar-open {
    .icon {
      span:nth-child(1) {
        transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
      }

      span:nth-child(2) {
        transform: scale3d(0, 1, 1);
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translate3d(6px, -6px, 0);
      }

      span:nth-child(1),
      span:nth-child(3) {
        transform-origin: center;
      }
    }
  }
}

html.dark {
  .toggle-sidebar-button:hover {
    .icon {
      filter: drop-shadow(0 0 0.75rem #ffffff);
    }
  }
}

.nav-items-inMd {
  margin-left: 6%;
  margin-right: 6%;
}
</style>
