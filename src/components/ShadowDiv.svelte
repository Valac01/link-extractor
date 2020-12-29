<script>
  import { HtmlContent } from '../store'
</script>

<div id="shadow-div" contenteditable bind:innerHTML={$HtmlContent}>
</div>

<style>
  #shadow-div {
    display: none;
  }
</style>