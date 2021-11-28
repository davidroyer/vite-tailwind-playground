<template>
  <div class="app-wrapper">
    <header
      class="app-wrapper-child bg-blue-900 text-blue-50 font-medium text-xl"
    >
      <div class="header-container container-wrapper">Activity Dashboard</div>
    </header>

    <main class="app-wrapper-child">
      <div class="container-wrapper">
        <!-- <TableExample />

        <hr class="my-6" /> -->
        <h2 class="text-2xl text-gray-700 mb-2 mt-4">Tire Summaries</h2>
        <VTable />
      </div>
    </main>

    <footer class="app-wrapper-child bg-blue-50">
      <div class="container-wrapper">Footer Content Here</div>
    </footer>
  </div>
</template>

<script></script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="postcss">
.app-wrapper {
  @apply bg-gray-200 flex flex-col h-screen;

  main {
    @apply flex-1;
  }
}

.container-wrapper {
  @apply mx-auto container p-4;
}
</style>
