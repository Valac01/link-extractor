<script>
import IconBtn from "./IconBtn.svelte"
import { Links } from '../store'
export let id = ''
export let title = ''
export let link = ''

function copyLinkToClipboard() {
  console.log({link})
}

function onDelete(id) {
  Links.update(currentLinks => {
    return currentLinks.filter( currentLink => currentLink.id != id)
  })
}
</script>

<div class="list-item bg-white rounded-md shadow-lg flex justify-between items-center px-4 py-2 my-4">
  <div class="text-lg text-gray-600 truncate">
    <div>
      { title }
    </div>
    <div class="text-xs truncate text-gray-400">
      { link }
    </div>
  </div>
  <div class="list-item--controls flex-shrink-0 ml-2">
    <IconBtn icon="copy" primary={true} on:click={copyLinkToClipboard}/>
    <IconBtn icon="delete" on:click={() => onDelete(id)}/>
  </div>
</div>

<style>
  .list-item {
    height: 4rem;
  }
</style>