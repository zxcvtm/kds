<script>
  export let columns=[]
</script>

<svelte:options tag="kds-list"/>
<section>
  <div class='list'>
    <div class='table'>
      {#each columns as column}
        <div class='column'>
          <div class='row'>
            <h3>{column.name}</h3>
          </div>
          {#each column.items as item}
            <div class='row'>
              <span>{item.name}</span>
              {#each item.subItems as subitem}
                <div>
                  <span>{`-->${subitem}`}
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
  
<style src="./List.css">
</style>
