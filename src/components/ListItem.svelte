<script>
import IconBtn from "./IconBtn.svelte"
export let title = ''
export let link = ''

function copyLinkToClipboard() {
  console.log({link})
}
</script>

<div class="list-item bg-white rounded-md shadow-lg flex justify-between items-center px-4 py-2 my-4">
  <div class="text-lg text-gray-600 truncate">{ title }</div>
  <div class="list-item--controls flex-shrink-0 ml-2">
    <IconBtn icon="copy" primary={true} on:click={copyLinkToClipboard}/>
    <IconBtn icon="delete"/>
  </div>
</div>

<style>
  .list-item {
    height: 4rem;
  }
</style>