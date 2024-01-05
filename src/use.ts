export function convertToLink(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}

import { defineStore } from "pinia";
import { onMounted } from "vue";
import { ref,computed } from "vue";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
export const useStatusStore = defineStore("status", () => {
  const headings = ref(
    [] as { text: string; subHeading: { text: string }[] }[]
  );
  const headingOffsetTop = ref({} as { [key: string]: number });

  function updateHeadings() {
    let Headings = [] as { text: string; subHeading: { text: string }[] }[];
    let HeadingOffsetTop = {} as { [key: string]: number };
    let headingElements = document.querySelectorAll("h2,h3");
    headingElements.forEach((heading) => {
      // heading.id = convertToLink(heading.innerHTML.replace(/<[^>]+>/g, ''));

      HeadingOffsetTop[heading.id] =
        (heading as HTMLElement).offsetTop +
        ((heading as HTMLElement).offsetParent as HTMLElement).offsetTop;
      if (heading.nodeName == "H2") {
        Headings.push({
          text: heading.innerHTML.replace(/<[^>]+>/g, ""),
          subHeading: [],
        });
      } else {
        if (Headings.length) {
          Headings[Headings.length - 1].subHeading.push({
            text: heading.innerHTML.replace(/<[^>]+>/g, ""),
          });
        }
      }
    });
    headingOffsetTop.value = HeadingOffsetTop;
    headings.value = Headings;
    console.log(Headings);
  }
  const currentHeading = computed(() => {
    let currentHeading = "";
    for (let heading in headingOffsetTop.value) {
        if (y.value + 65 > headingOffsetTop.value[heading]) {
            currentHeading = heading;
        }
    }
    return currentHeading;
  });

  onMounted(() => {
    updateHeadings();
  });
  return { headings, headingOffsetTop, currentHeading, y, updateHeadings }
});
