<template>
  <div class>
    <div class="max-w-sm mx-auto font-sans">
      <div>
        <div class="text-center max-w-screen-md mx-auto py-10 px-4">
          <h1 class="font-bold text-3xl md:text-4xl">Vuote maker</h1>
          <h3 class="font-regular text-gray-500 text-xl">Start making quotes</h3>
          <div class="text-2xl mt-2">
            <span class="pr-2">
              <i class="fab fa-github-square"></i>
            </span>
            <span class="pr-2">
              <i class="fab fa-twitter"></i>
            </span>
          </div>
        </div>
      </div>
      <form class="p-4">
        <div class="pb-10">
          <div class="mt-1 rounded-md shadow-sm">
            <label for="title" class="block text-lg font-medium text-gray-700 leading-5 my-2">Title*</label>
            
            <input
              id="title"
              name="title"
              type="text"
              v-model="microfableForm.title"
              required
              autofocus
              placeholder="Title"
              class="appearance-none block w-full px-3 py-2 border-none rounded-md placeholder-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-lg sm:leading-5"
            >
          </div>
          <div class="mt-4 rounded-md shadow-sm">
            <label
              for="title"
              class="block text-lg font-medium text-gray-700 leading-5 my-2"
            >Content*</label>
            
            <textarea
              rows="8"
              cols="50"
              name="content"
              v-model="microfableForm.body"
              required
              placeholder="Content"
              class="appearance-none block w-full px-3 py-2 border-none rounded-md placeholder-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-lg sm:leading-5"
            ></textarea>
          </div>
          <div class="mt-4 rounded-md shadow-sm">
            <label for="title" class="block text-lg font-medium text-gray-700 leading-5 my-2">Name*</label>
            
            <input
              id="name"
              name="name"
              type="text"
              v-model="microfableForm.name"
              required
              autofocus
              placeholder="Name"
              class="appearance-none block w-full px-3 py-2 border-none rounded-md placeholder-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-lg sm:leading-5"
            >
          </div>
          <div class="mt-4 rounded-md shadow-sm">
            <label
              for="title"
              class="block text-lg font-medium text-gray-700 leading-5 my-2"
            >Website*</label>
            
            <input
              id="website"
              name="website"
              type="text"
              v-model="microfableForm.website"
              required
              autofocus
              placeholder="Website"
              class="appearance-none block w-full px-3 py-2 border-none rounded-md placeholder-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-lg sm:leading-5"
            >
          </div>
          <div class="inline-flex rounded-md shadow mt-10">
            <router-link
              to="/microfable"
              class="px-5 py-1 pb-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              <span>Continue →</span>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters(["microfableForm"])
  }
};
</script>
