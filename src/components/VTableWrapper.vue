<template>
  <div class="table-wrapper mb-8 py-2 sm:py-4 max-w-3xl mx-auto">
    <div class="text-xl text-gray-600 mb-2 mt-4 font-semibold" v-text="title" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style></style>
