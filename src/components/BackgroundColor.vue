<template>
  <div>
    <h1 class="font-bold text-xl mb-3 md:pl-3">Background Color</h1>
    <ul class="flex flex-no-wrap md:h-full md:flex-wrap overflow-x-auto max-w-full select-none">
      <li
        v-for="(color, index) in colors"
        :key="index"
        @click="setBackgroundColor(color.color)"
        class="mb-4 mr-4 h-24 option-item border hover:border-gray-800 hover:border-4t duration-500 cursor-pointer select-none"
      >
        <div
          :class="color.color"
          class="p-2 text-white shadow-sm flex items-center justify-center h-full"
        >
          <h1 class="text-6xl"></h1>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
import { mapMutations } from "vuex";
export default {
  name: "BackgroundColor",
  data() {
    return {
      colors: [
        {
          color: "bg-orange-800"
        },
        {
          color: "bg-red-800"
        },
        {
          color: "bg-gray-900"
        },
        {
          color: "bg-pink-900"
        },
        {
          color: "bg-teal-900"
        },
        {
          color: "bg-blue-900"
        },
        {
          color: "bg-red-900"
        },
        {
          color: "bg-indigo-900"
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      setBackgroundColor: "setBackgroundColor"
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


