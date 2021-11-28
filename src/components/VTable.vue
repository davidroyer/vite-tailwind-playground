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
            :class="determinedTextAlignment(value)"
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
            class="px-6 py-4 whitespace-nowrap text-gray-900 text-sm"
            :class="determinedTextAlignment(key)"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { tireActivitySummaries } from '@data/mockTable'
const { headers, tableData } = tireActivitySummaries
export default {
  data: () => ({
    headers,
    tableData
  }),

  methods: {
    determinedTextAlignment(id) {
      return id === 'summaryType' ? 'text-left' : 'text-right'
    }
  }
}
</script>

<style></style>
