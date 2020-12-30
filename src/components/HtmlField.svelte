<script>
  import Btn from './Btn.svelte'
  import { extract } from '../utils/extractLinks'
  import { Links, HtmlContent } from '../store'
  let htmlInput = ''
  
  function reset() {
    htmlInput = ''
    Links.update( () => {
      return []
    })
    HtmlContent.update(() => {
      return ''
    }) 
  }
  
  function onExtract() {
    const extractedLinks = extract()
    Links.update( () => {
      return extractedLinks
    })
  }

  function updateStore() {
    HtmlContent.update(() => {
      return htmlInput
    }) 
  }
</script>

<section>
  <div class="flex justify-between">
    <h3 class="text-gray-600 text-lg half-underline">Paste your html code here</h3>
    <Btn on:click={reset}>Reset</Btn>
  </div>
  <div class="html-area">
    <div class="html-input rounded-md shadow-lg overflow-x-auto text-xs text-gray-500" contenteditable="true" bind:textContent={htmlInput} on:input={updateStore}></div>
    <div class="html-btn">
      <Btn primary={true} on:click={onExtract}>Extract</Btn>
    </div>
  </div>
</section>

<style>
  .html-area {
    display: grid;
    width: 100%;
    height: 300px;
    margin: 1rem 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 640px) {
    .html-area {
      height: 400px;
    }
  }

  .html-input {
    background-color: white;
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 1;
    padding: 1rem;
  }
  .html-btn {
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 10;
    justify-self: end;
    align-self: end;
    margin: 1.25rem;
  }
  .half-underline::after {
    content: '';
    display: block;
    height: 2px;
    width: 100px;
    margin-top: 6px;
    background-color: #64748B;
  }
</style>