<template>
  <div class="select-none">
    <div class="microcontent pt-10 px-4 h-full">
      <div class="flex justify-between items-center my-3" @click="download">
        <div>
          <router-link class="font-semibold" to="/">
            <i class="fas fa-arrow-left"></i> Edit more
          </router-link>
        </div>
        <div class="p-2 border-solid border-2 ml-4">
          <span class="pr-4">Download</span>
          <i class="fas fa-download"></i>
        </div>
      </div>

      <div
        id="downloadimg"
        style="max-width: 400px; height: 400px"
        class="select-none w-full preview-content flex text-white p-6 relative font-sans overflow-hidden mx-auto"
        :class="[getStyles.backgroundColor, getStyles.textAlignment]"
      >
        <div style="text-align: inherit; overflow: hidden;" class="flex flex-col max-w-xs">
          <div
            class="leading-snug"
            :class="getStyles.fontSize.title"
            style="text-align: inherit"
          >{{ microfableForm.title }}</div>
          <div
            :class="getStyles.fontSize.body"
            style="text-align: inherit; white-space: break-spaces;"
          >{{ microfableForm.body }}</div>
        </div>
        <p
          style="font-size: 10px"
          class="absolute bottom-0 left-0 pl-4 pb-2 font-regular"
        >{{ microfableForm.website }}</p>
        <p
          style="font-size: 10px"
          class="absolute top-0 right-0 pr-4 pt-2 font-regular"
        >by {{ microfableForm.name }}</p>
      </div>
    </div>
    <EditBar/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditBar from "../components/EditBar";
import htmlToImage from "html-to-image";

export default {
  components: {
    EditBar
  },
  computed: {
    ...mapGetters(["microfableForm", "getStyles"])
  },
  methods: {
    download() {
      var node = document.getElementById("downloadimg");
      htmlToImage.toJpeg(node, { quality: 1 }).then(function(dataUrl) {
        var link = document.createElement("a");
        link.download = `${new Date().getTime()}.png`;
        link.href = dataUrl;
        link.click();
      });
    }
  }
};
</script>
<style lang="scss">
.microcontent {
  @media (min-width: 1024px) {
    padding-left: 600px;
  }
}
</style>

