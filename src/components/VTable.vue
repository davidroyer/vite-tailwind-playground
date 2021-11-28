<template>
  <div
    class="
      shadow
      overflow-hidden
      border-b border-gray-200
      rounded-md
      overflow-x-auto
      sm:rounded-lg
      max-w-3xl
    "
  >
    <table class="table-auto min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="{ text, value } in headers"
            :key="text"
            class="
              uppercase
              tracking-wider
              text-gray-500 text-xs
              px-6
              py-3
              font-medium
              whitespace-nowrap
            "
            :class="determinedClasses(value)"
          >
            {{ text }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(rowObject, index) in tableData" :key="index">
          <td
            v-for="(item, key) in rowObject"
            :key="key"
            class="
              px-6
              py-4
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-700
            "
            :class="determinedClasses(key)"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data: () => ({
    // headers,
    // tableData
  }),

  methods: {
    isSummaryColumn(id) {
      return id === 'summaryType' ? true : false
    },

    determinedClasses(id) {
      const summaryClasses = ['text-left']

      // 'text-gray-500',
      const regularClasses = ['text-right', 'texxt-right']

      return this.isSummaryColumn(id) ? summaryClasses : regularClasses
    }
  }
}
</script>

<style lang="postcss" scoped>
tr > th:first-of-type,
td:first-of-type {
  @apply w-64;
}

td:first-of-type {
  @apply font-semibold;
}
</style>
