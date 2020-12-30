<script>
  export let primary = false
</script>

<button 
  class="dark:bg-gray-800 bg-gray-400 px-5 lg:px-6 py-1 lg:py-2 text-gray-200 rounded-md"
  class:dark:bg-cyan-600={ primary === true }
  class:bg-cyan-600={ primary === true }
  on:click
>
  <slot></slot>
</button>
