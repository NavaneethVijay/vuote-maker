import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    microfable: {
      title: "Salvador Dali",
      body: "'Have no fear of perfection—you’ll never reach it.'",
      caption: "Sarah Rose, Front End Manager at Northern Commerce",
      name: "Navaneeth",
      website: "welcome.com"
    },
    styles: {
      fontSize: {
        title: "text-xl",
        body: "text-md"
      },
      backgroundColor: "bg-teal-900",
      textAlignment: "items-center justify-center"
    }
  },
  getters: {
    microfableForm(state) {
      return state.microfable;
    },
    getStyles(state) {
      return state.styles;
    }
  },
  mutations: {
    setFontsizeTitle(state, size) {
      state.styles.fontSize.title = size;
    },
    setBackgroundColor(state, color) {
      state.styles.backgroundColor = color;
    },
    setFontsize(state, size) {
      state.styles.fontSize.body = size;
    },
    setTextAlignment(state, alignment) {
      state.styles.textAlignment = alignment;
    }
  }
})
