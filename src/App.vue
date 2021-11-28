<template>
  <div class="app-wrapper">
    <header
      class="app-wrapper-child bg-blue-900 text-blue-50 font-medium text-xl"
    >
      <div class="header-container container-wrapper">Activity Dashboard</div>
    </header>

    <main class="app-wrapper-child">
      <div class="container-wrapper">
        <VTableWrapper title="Tire Summaries">
          <VTable
            :headers="tireActivitySummaries.headers"
            :table-data="tireActivitySummaries.tableData"
          />
        </VTableWrapper>

        <VTableWrapper title="Vehicle Summaries">
          <VTable
            :headers="vehicleActivitySummaries.headers"
            :table-data="vehicleActivitySummaries.tableData"
          />
        </VTableWrapper>
      </div>
    </main>

    <footer class="app-wrapper-child bg-blue-50">
      <div class="container-wrapper">Footer Content Here</div>
    </footer>
  </div>
</template>

<script>
import {
  tireActivitySummaries,
  vehicleActivitySummaries
} from '@data/mockTable'
// const { headers, tableData } = tireActivitySummaries

export default {
  data: () => ({
    tireActivitySummaries,
    vehicleActivitySummaries
  })
}
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-wrapper {
  @apply bg-gray-200 flex flex-col min-h-screen;

  main {
    @apply flex-1;
  }
}

.container-wrapper {
  @apply mx-auto container p-4;
}
</style>
