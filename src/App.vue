<template>
  <div class="app-wrapper">
    <header class="app-wrapper-child">
      <div class="header-container container-wrapper">Vite App</div>
    </header>
    <main class="app-wrapper-child">
      <div class="container-wrapper">
        <h2>Main Content Here</h2>
        <Tester />
      </div>
    </main>
    <footer class="app-wrapper-child">
      <div class="container-wrapper">Footer Content Here</div>
    </footer>
  </div>
</template>

<script>
import Tester from './components/Tester.vue'
export default { components: { Tester } }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="postcss">
.app-wrapper {
  @apply bg-gray-300 flex flex-col h-screen;

  header,
  footer {
    @apply bg-blue-100;
  }
  main {
    @apply flex-1;
  }
}

.container-wrapper {
  @apply mx-auto container p-4;
}
</style>
