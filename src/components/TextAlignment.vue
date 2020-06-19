<template>
  <div>
    <h1 class="font-bold text-xl mb-3 md:pl-3">Text location</h1>
    <ul class="flex flex-no-wrap md:h-full md:flex-wrap overflow-x-auto max-w-full select-none">
      <li
        v-for="(alignment, index) in alignments"
        :key="index"
        @click="setTextAlignment(alignment.alignmentClass)"
        class="mb-4 mr-4 h-24 option-item text-white border hover:border-red-50 hover:border-4t duration-500 select-none cursor-pointer"
      >
        <div :class="[getStyles.backgroundColor]" class="p-2 shadow-sm h-full">
          <div :class="alignment.alignmentClass" class="text-3xl flex h-full">
            <img class="w-6 h-6" :src="alignment.icon" alt>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "TextAlignment",
  data() {
    return {
      alignments: [
        {
          alignmentClass: "items-start justify-start text-left",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-start justify-center text-center",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-start justify-end text-right",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-center justify-start text-left",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-center justify-center text-center",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-center justify-end text-right",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-end justify-start text-left",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-end justify-center text-center",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        },
        {
          alignmentClass: "items-end justify-end text-right",
          icon:
            "https://dxdx43mgf1h6b.cloudfront.net/assets/left-8f38fee28e3e1bbbad8232db6d2f224aa9d3679ebcb0970a0784684eb7f7e229.png"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getStyles"])
  },
  methods: {
    ...mapMutations({
      setTextAlignment: "setTextAlignment"
    })
  }
};
</script>
<style lang="scss" scoped>
.option-item {
  min-width: 30%;
  @media (min-width: 1024px) {
    min-width: calc(50% - 1rem);
  }
}
</style>


