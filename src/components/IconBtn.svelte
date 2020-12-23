<script>
  import { mdiContentCopy, mdiDelete } from '@mdi/js'
  export let icon = 'copy'
  export let primary = false
</script>

<button class="rounded-full p-3 bg-gray-400" class:primary on:click>
  {#if icon === 'copy'}
  <svg class="text-gray-50 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={mdiContentCopy} /></svg>
  {:else if icon === 'delete'}
  <svg class="text-gray-50 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={mdiDelete} /></svg>
  {/if}
</button>

<style>
  svg {
    height: 16px;
    width: 16px;
  }
  .primary {
    background-color: #0891B2;
  }
</style>