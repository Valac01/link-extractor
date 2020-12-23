<script>
  export let primary = false
</script>

<button class="bg-gray-400 px-5 lg:px-6 py-1 lg:py-2 text-gray-200 rounded-md" class:primary on:click>
  <slot></slot>
</button>

<style>
  .primary {
    background-color: #0891B2;
  }
</style>