<script>
  export let status = ''
  export let nQueuedItems = 0
</script>

<svelte:options tag="kds-header"/>
<header>
  <h1>Nº Pedidos</h1>
  <div class='queue'>
    <h2>{nQueuedItems}</h2>
  </div>
  {#if status === 'pause'}
  <div class='pause'>
    <h2>En Pausa</h2>
  </div>
  {:else if status === 'stop'}
  <div class='stop'>
    <h2>Fin de Pedidos</h2>
  </div>
  {/if}
</header>

<style src="./Header.css">
</style>
