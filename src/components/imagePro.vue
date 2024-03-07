<template>
  <div class="image-pro" ref="imagePro_dom" :style="{ height: imageProHeight }">
    <span v-if="Loading" class="loading-text">Loading image...</span>
    <span v-if="Error" class="warn">Error loading image </span>
    <div
      v-if="!Loading"
      class="image-wrap"
      @click="imag_click"
      ref="image_wrap"
      :style="{ width: imageWrapWidth }"
    >
      <img :src="link" ref="img" alt="" />
    </div>
    <component :is="note" :class="noteClass" />
  </div>
</template>

<script setup lang="ts">
import { computed, h, onMounted, ref, useAttrs, useSlots, watch } from 'vue'
import { useElementSize, useImage, useWindowSize } from '@vueuse/core'

const slot = useSlots()
const attrs = useAttrs()
const link = ref('')
const note = ref()
const noteClass = ref('')

const imagePro_dom = ref()
const image_wrap = ref()
const img = ref()

const Loading = ref(true)
const Error = ref(false)

const IsInFullView = ref(false)
const imageProHeight = ref('')

const imageWrapWidth = ref('100%')

const { height: getImageProHeight } = useElementSize(imagePro_dom)
const { height: getWindowHeight } = useWindowSize()
const widthWhenToHeigh = computed(() => {
  if (getImageProHeight.value > getWindowHeight.value) {
    const ratio = img.value.naturalWidth / img.value.naturalHeight
    return 'calc(' + ratio + ' * ' + getWindowHeight.value + 'px + 5px )'
  }
  return '100%'
})
watch(widthWhenToHeigh, (val) => {
  if (imageWrapWidth.value != '') {
    imageWrapWidth.value = val
  }
})

onMounted(() => {
  link.value = attrs.src as string
  if (slot.default && slot.default()[0] && slot.default()[0]) {
    note.value = h(slot.default()[1], { class: 'note' })
    link.value = (slot.default()[0] as any).props.src
  }
  const { isLoading, error } = useImage({ src: link.value })
  watch(isLoading, () => {
    Loading.value = isLoading.value
  })
  watch(error, (val : any) => {
    if (val.type == "error") {
      Error.value = true
    }
  })
  window.addEventListener('resize', () => {
    if (!IsInFullView.value) return
    let debounce: any
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      updateStyle()
    }, 5)
  })
})

let width_full = 0
let height_full = 0
let width_actual = 0

function getFullViewPosition() {
  img.value.className = 'full-view final-position'
  width_full = img.value.width
  height_full = img.value.height
  width_actual = (img.value.naturalWidth / img.value.naturalHeight) * height_full
  img.value.className = ''
  img.value.style.width = ''
  img.value.style.height = ''
}

function updateStyle() {
  img.value.style.width = ''
  img.value.style.height = ''
  img.value.className = 'full-view final-position'
  img.value.style.top = img.value.style.left = ''
  width_full = img.value.width
  height_full = img.value.height
  width_actual = (img.value.naturalWidth / img.value.naturalHeight) * height_full
  img.value.className = 'full-view'
  img.value.style.top = `calc(50% - ${height_full}px / 2)`
  img.value.style.left = `calc(50% - ${width_actual}px / 2)`
  img.value.style.width = width_actual + 'px'
  img.value.style.height = height_full + 'px'
}

async function imag_click() {
  if (!img.value) return
  if (!IsInFullView.value && img.value.className == 'full-view animation') {
    return
  }
  if (IsInFullView.value == false) {
    imageWrapWidth.value = ''
    imageProHeight.value = `${getImageProHeight.value}px`
    noteClass.value = 'toBottom'
    let BoundingClient = img.value.getBoundingClientRect()
    let top_full = BoundingClient.top
    let left_full = BoundingClient.left
    let width_full_origin = window.getComputedStyle(img.value).width
    let height_full_origin = window.getComputedStyle(img.value).height
    getFullViewPosition()
    image_wrap.value.className = 'image-wrap full-view'
    img.value.className = 'full-view'
    img.value.style.top = top_full + 'px'
    img.value.style.left =
      'calc(' +
      left_full +
      'px + (' +
      width_full_origin +
      ' - (' +
      img.value.naturalWidth / img.value.naturalHeight +
      '*' +
      height_full_origin +
      '))/2)'
    img.value.style.width =
      'calc(' + img.value.naturalWidth / img.value.naturalHeight + '*' + height_full_origin + ')'
    img.value.style.height = height_full_origin
    setTimeout(() => {
      img.value.className = 'full-view animation'
      img.value.style.top = `calc(50% - ${height_full}px / 2)`
      img.value.style.left = `calc(50% - ${width_actual}px / 2)`
      img.value.style.width = width_actual + 'px'
      img.value.style.height = height_full + 'px'
      setTimeout(() => {
        IsInFullView.value = true
        img.value.className = 'full-view'
      }, 300)
    })
  } else {
    image_wrap.value.className = 'image-wrap'
    IsInFullView.value = false
    img.value.className = ''
    img.value.style.width = img.value.style.height = ''
    img.value.style.top = img.value.style.left = ''
    imageWrapWidth.value = widthWhenToHeigh.value
    imageProHeight.value = ''
    noteClass.value = ''
  }
}
</script>

<style lang="scss">
.row {
  .image-pro {
    margin-bottom: 1em;
    p {
      margin-bottom: 0;
    }
  }
}
.image-pro {
  margin-left: auto;
  margin-right: auto;
  position: relative;

  p {
    margin: 1em 0;
  }

  p.toBottom {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .image-wrap {
    margin-left: auto;
    margin-right: auto;
    padding: 0.17rem;
    border-radius: 0.35rem;
    cursor: zoom-in;
    transition: none;
  }

  .image-wrap.full-view {
    transition: background-color 0.3s ease-in-out;
    cursor: zoom-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    z-index: 9999;
    background-color: rgba(116, 116, 116, 0.5);
  }

  img {
    // width: 100%;

    object-fit: contain;
    display: block; 
    max-width: min(60vw, 100%);
    border-radius: 0.35rem;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--bg-float);
  }

  @media (max-width: 768px) {
    img {
      max-width: min(85vw , 100%);
    }
  }

  img.full-view {
    max-width: initial;
    position: fixed;
    height: auto;
  }

  img.animation {
    transition: all 0.3s ease-in-out;
  }

  img.full-view-final {
    max-width: initial;
    position: fixed;
  }

  img.final-position {
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
    width: 95vw;
    max-height: 95vh;
    max-width: initial;
  }
}
</style>
