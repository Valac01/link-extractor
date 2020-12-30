<script>
  import { mdiThemeLightDark } from '@mdi/js'
  import { toggleDarkmode } from '../utils/darkmode'

  function ontoggleDarkmode() {
    toggleDarkmode()
  }
</script>

<nav class="bg-white dark:bg-gray-500 shadow-md absolute inset-x-0 top-0">
  <div class="container h-full flex items-center justify-between px-2 sm:px-0">
    <div class="brand font-medium text-2xl text-gray-600 dark:text-gray-200">Link<span class="font-bold">Extractor</span></div>

    <button class="rounded-full p-2 bg-gray-100 dark:bg-gray-600" on:click={ontoggleDarkmode}>
      <svg class="text-gray-500 dark:text-gray-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
    </button>
  </div>
</nav>

<style>
  nav {
    height: 60px
  }
  svg {
    height: 1.5rem;
  }
</style>