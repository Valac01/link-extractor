<script>
  import Btn from './Btn.svelte'
  import ListItem from './ListItem.svelte'
  const linkList = [
    {title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere qui magni, accusamus dolore consectetur quos delectus molestias distinctio nisi velit quibusdam adipisci maiores et ea aliquid quaerat, vel fuga quas?', link: 'https://plucreo.com'},
    {title: 'Episode 2', link: 'https://plucreo.com'},
    {title: 'Episode 3', link: 'https://plucreo.com'},
    {title: 'Episode 4', link: 'https://plucreo.com'},
  ]
</script>

<section class="mt-8">
  <div class="flex justify-between mb-2">
    <h3 class="text-gray-600 text-lg half-underline">Links</h3>
    <div class="controls">
      <Btn primary={true}>Copy All</Btn>
      <Btn>Delete All</Btn>
    </div>
  </div>

  {#each linkList as { title, link }}
    <ListItem title={title} link={link}/>
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