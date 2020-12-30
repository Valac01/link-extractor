<script>
import IconBtn from "./IconBtn.svelte"
import { Links } from '../store'
import { copy } from '../utils/copy'
export let id = ''
export let title = ''
export let link = ''

async function copyLinkToClipboard() {
  await copy(link)
}

function onDelete(id) {
  Links.update(currentLinks => {
    return currentLinks.filter( currentLink => currentLink.id != id)
  })
}
</script>

<div class="list-item bg-white dark:bg-gray-600 rounded-md shadow-lg flex justify-between items-center px-4 py-2 my-4">
  <div class="text-lg text-gray-600 dark:text-gray-200 truncate">
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