<template>
     <nav :class="`menu`" ref="nav">
    <div :class="`ribbon ${isFloat}`"></div>
    <ul class="nav-items">
      <li
        :class="`indicator ${isFloat}`"
        :style="{
          left: `${indicator_X}px`,
          top: `${indicator_Y}px`,
          width: `${indicator_W}px`
        }"
      ></li>
      <div class="col-24">
        <li class="nav-logo">
        <Logo class="logo" />
      </li>
      </div>
        <li v-for="(heading, index) in headings" :key="index" class="nav-item" ref="HeadingElements">
        <div
          v-if="typeof heading == 'object'"
          class="col-24 nav-link toggle"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave()"
        >
          {{ index }}
        </div>
        <ul
          v-if="typeof heading == 'object'"
          class="nav-items-2"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave()"
        >
          <li v-for="(_, subIndex) in heading" :key="subIndex" :class="`nav-item-2`">
            <router-link
              :to="'/' + profile.teamName + '/' + convertToLink(subIndex)"
              class="nav-link-2"
              >{{ subIndex }}
            </router-link>
          </li>
        </ul>
        <router-link
          v-if="typeof heading == 'string'"
          :to="'/' + profile.teamName + '/' + (index == 'Home' ? '' : convertToLink(index))"
          class="nav-link"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave()"
          >{{ index }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Logo from './logowithname.vue'
import router from '@/router'
import { useElementSize } from '@vueuse/core'
import { ref, onMounted, watch, computed } from 'vue'
import { Headings as headings } from '@/router'
import { useWindowScroll } from '@vueuse/core'
import { profile, convertToLink } from '@/use'
import { currentRoute } from '@/router'
const HeadingElements = ref()
const { y } = useWindowScroll()
const nav = ref()
const { width } = useElementSize(nav)

const indicator_X = ref(0)
const indicator_Y = ref(0)
const indicator_W = ref(0)

let H: any = headings
const headingMap = {} as { [key: string]: number }

let index = 0
for (let key in H) {
  if (typeof H[key] !== 'string') {
    headingMap[key] = index
    for (let key2 in H[key]) {
      headingMap[key2] = index
    }
  } else {
    headingMap[key] = index
  }
  index++
}

function reset_position() {
  try {
    indicator_X.value = HeadingElements.value[headingMap[currentRoute.value]]['offsetLeft']
    indicator_Y.value = HeadingElements.value[headingMap[currentRoute.value]]['offsetTop']+10
    indicator_W.value = HeadingElements.value[headingMap[currentRoute.value]]['offsetWidth']
  } catch (e) {
  }
}

onMounted(() => {
  watch([router.currentRoute, width], () => {
    reset_position()
  })
})

const isFloat = computed(() => {
  if (y.value > 1) {
    return 'float'
  } else {
    return ''
  }
})

function handleMouseEnter(index: string) {
  indicator_X.value = HeadingElements.value[headingMap[index]]['offsetLeft']
  indicator_Y.value = HeadingElements.value[headingMap[index]]['offsetTop']
  indicator_W.value = HeadingElements.value[headingMap[index]]['offsetWidth']
}

function handleMouseLeave() {
  reset_position()
}
</script>

<style>
.menu {
  position: sticky;
  top: 0;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff00;
  height: 60px;
  width: 100%;
  left: 0;
  z-index: 12;

  .ribbon {
    top: 0;
    background-image: linear-gradient(to top, rgba(224, 211, 187, 0.265) , rgba(255, 237, 200, 0.832));
    position: absolute;
    height: 0px;
    width: 100%;
    left: 0;
    transition:
      width 0.2s ease,
      height 0.2s ease,
      top 0.2s ease,
      left 0.2s ease;
  }

  .ribbon.float {
    height: 120px;
  }
}

.nav-items {
  flex-wrap: wrap;
  display: flex;
  list-style: none;
  height: 60px;
  margin-right:0 ;
}

.nav-logo {
  position: relative;
  margin: auto;
  padding: 8px;

  .logo {
    height: 100%;
    font-size: 1rem;
    max-width: initial;
  }
}

.nav-item {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.switcher {
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;
  transition: margin 0.2s ease;
  width: 40px;
}

.nav-link.toggle::after {
  content: '';
  display: inline-block;
  margin-left: 0.355em;
  vertical-align: 0.15em;
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.nav-link {
  display: block;
  padding: 0 20px;
  color: #dcf6ffdd;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
}

@media (max-width: 1160px) {
  .nav-items {
    .nav-link {
      font-size: 16px;
      padding: 0 10px;
    }

    .nav-logo {
      align-items: center;
      padding: 13px;

      .logo {
        height: 100%;
        font-size: 1rem;
      }
    }

    .indicator {
      height: 33px;
      bottom: 13px;
    }
  }
}

.nav-item:hover {
  .nav-items-2 {
    display: block;
  }
}

.nav-items-2 {
  display: none;
  position: absolute;
  top: calc(100% - 10px);
  left: 0;
  padding: 0.35rem 0;
  margin: 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.nav-item-2:hover {
  background-color: #f2f2f2;
}

.nav-item-2 {
  display: block;
  padding: 0 0;
  clear: both;
  font-weight: 400;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: 0.25rem;

  .nav-link-2 {
    box-sizing: border-box;
    width: 100%;
    display: block;
    padding: 0.25rem 1rem;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    color: #212529;
    border-radius: 0.25rem;
  }
}

.indicator {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 60px;
  height: 50px;
  border-radius: 5px;
  transform: translateX(0);
  transition:
    left 0.2s cubic-bezier(0.33, 0.13, 0, 1),
    width 0.2s cubic-bezier(0.33, 0.13, 0, 1),
    background-color 0.2s cubic-bezier(0.33, 0.13, 0, 1);
  animation: none 1.5s ease 0 1 normal;
}

html.dark .indicator {
  --color-indicator: rgba(83, 83, 83, 0.5);
}

html .indicator {
  --color-indicator: rgba(0, 61, 107, 0.928);
}

.indicator {
  background-color: var(--color-indicator);
}

.indicator.float {
  background-color: rgba(0, 61, 107, 0.928);
}
</style>