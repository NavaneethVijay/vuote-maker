<template>
  <div>
    <h1 class="font-bold text-xl mb-3 md:pl-3">Title Font Size</h1>
    <ul class="flex flex-no-wrap md:h-full md:flex-wrap overflow-x-auto max-w-full select-none">
      <li
        v-for="(fontsize, index) in FontSizes"
        :key="index"
        @click="setFontsizeTitle(fontsize.size)"
        class="mb-4 mr-4 h-20 md:h-24 option-item duration-500 cursor-pointer select-none"
      >
        <div
          :class="{'bg-gray-900 text-white': getStyles.fontSize.title === fontsize.size}"
          class="p-2 transition select-none ease-out duration-700 border-2 border-gray-900 shadow-sm flex items-center justify-center h-full"
        >
          <h1>{{ fontsize.text }}</h1>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FontSize",
  data() {
    return {
      FontSizes: [
        {
          size: "text-lg",
          text: "Large"
        },
        {
          size: "text-xl",
          text: "H6"
        },
        {
          size: "text-2xl",
          text: "H5"
        },
        {
          size: "text-3xl",
          text: "H4"
        },
        {
          size: "text-4xl",
          text: "H3"
        },
        {
          size: "text-5xl",
          text: "H2"
        },
        {
          size: "text-6xl",
          text: "H1"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getStyles"])
  },
  methods: {
    ...mapMutations({
      setFontsizeTitle: "setFontsizeTitle"
    })
  }
};
</script>
<style lang="scss">
.option-item {
  min-width: 30%;
  @media (min-width: 1024px) {
    min-width: calc(50% - 1.5rem);
  }
}
</style>


