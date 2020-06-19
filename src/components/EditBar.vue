<template>
  <div
    class="editbar h-auto md:h-full w-full flex flex-col-reverse md:flex-row overflow-hidden fixed bottom-0 left-0 md:top-0"
  >
    <!-- section body side nav -->
    <nav
      aria-label="side bar"
      aria-orientation="vertical"
      class="flex-none flex flex-row md:flex-col items-start text-center bg-white"
    >
      <ul class="flex overflow-auto md:flex-col editbar-items w-full">
        <li v-for="(options, index) in sidebarOptions" :key="index">
          <button
            @click="setCurrentItem(options.componentName)"
            class="focus:outline-none flex-grow px-4 py-4 cursor-pointer edit-items-button md:text-md focus:bg-red0 transition ease-out duration-700 w-full"
            :class="{ 'bg-gray-900 text-white': currentItem === options.componentName}"
          >
            <i :class="options.icon"></i>
            <p class="text-base font-serif">{{ options.tooltip}}</p>
          </button>
        </li>
      </ul>
    </nav>
    <div v-if="currentItem" class="md:flex-1 flex flex-col">
      <section
        class="edit-items flex flex-col w-full md:max-w-sm flex-none bg-gray-200 h-full overflow-auto"
      >
        <transition name="slide-fade">
          <component :is="currentItem"/>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import FontSize from "./FontSize.vue";
import FontSizeTitle from "./FontSizeTitle.vue";
import BackgroundColor from "./BackgroundColor.vue";
import TextAlignment from "./TextAlignment.vue";

export default {
  data() {
    return {
      currentItem: "",
      sidebarOptions: [
        {
          tooltip: "Title",
          icon: "icofont-heading",
          componentName: "FontSizeTitle"
        },
        {
          tooltip: "Content",
          icon: "icofont-small-cap",
          componentName: "FontSize"
        },
        {
          tooltip: "Background",
          icon: "icofont-paint-brush",
          componentName: "BackgroundColor"
        },
        {
          tooltip: "Alignment",
          icon: "icofont-align-center ",
          componentName: "TextAlignment"
        }
      ]
    };
  },
  components: {
    FontSize,
    BackgroundColor,
    TextAlignment,
    FontSizeTitle
  },
  methods: {
    setCurrentItem(item) {
      if (this.currentItem !== item) {
        this.currentItem = item;
      } else {
        this.currentItem = "";
      }
    }
  }
};
</script>
<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}

.slide-fade-leave-to {
  position: absolute;
  opacity: 0;
}

.slide-fade-enter {
  transform: translateY(10px);
  opacity: 0;
}

.editbar {
  max-width: 500px;

  nav {
    ul {
      justify-content: space-evenly;
    }

    @media (min-width: 1024px) {
      padding-top: 60px;
    }
  }
}

.edit-items {
  padding: 20px 20px 0 20px;
  @media (min-width: 1024px) {
    padding: 100px 20px 0 20px;
  }
}

.editbar-items {
  li {
    width: 25%;
    @media (min-width: 1024px) {
      width: 100%;
    }
  }
}

.edit-items-button {
  &:not(:last-child) {
    border-right: 2px solid #1a202c;
  }

  @media (min-width: 1024px) {
    border-right: none;
    border-bottom: 2px solid #1a202c;
  }
}
</style>
