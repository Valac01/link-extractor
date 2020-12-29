<script>
  import { flip } from 'svelte/animate'
  import { fly, fade } from 'svelte/transition'
  import Btn from './Btn.svelte'
  import ListItem from './ListItem.svelte'
  import { Links } from '../store'
  import { copyAll } from '../utils/copy'

  function deleteAllLinks() {
    Links.update(() => [])
  }

  function copyAllLinks() {
    const unsub = Links.subscribe( async links => {
      await copyAll(links)
    })

    unsub()
  }
</script>

<section class="mt-8">
  <div class="flex justify-between mb-2">
    <h3 class="text-gray-600 text-lg half-underline">Links</h3>
    <div class="controls">
      <Btn primary={true} on:click={copyAllLinks}>Copy All</Btn>
      <Btn on:click={deleteAllLinks}>Delete All</Btn>
    </div>
  </div>

  {#each $Links as { id, title, link } (id) }
    <div out:fly={{x: -100, duration: 200}} in:fade animate:flip={{duration: 300}}>
      <ListItem id={id} title={title} link={link}/>
    </div>
  {:else}
    <div>
      No links to copy
    </div>
  {/each}
</section>

<style>
  .half-underline::after {
    content: '';
    display: block;
    height: 2px;
    width: 1rem;
    margin-top: 6px;
    background-color: #64748B;
  }
</style>