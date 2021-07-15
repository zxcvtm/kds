<script>
	export let company = 'Default company name'
  export let userList = ['11.111.111-1','22.222.222-2', '33.333.333-3']
  export let onLogin = (param) => alert('login ' + param)
  
  let userSelected = ''
  let submit = (event) => {
    if (event.key === 'Enter')
      onLogin(userSelected)
  }
  let init = element => element.focus()
</script>

<svelte:options tag="kds-login"/>
<main>
  <form on:submit|preventDefault={onLogin(userSelected)}>	  
    <h1>{company}</h1>
    <div class="form-inputs">
      <input list='users' bind:value={userSelected} on:keydown={submit} use:init >
      <datalist id='users'>
        {#each userList as user}
        <option value={user}>
        {/each}
      </datalist>
      <button>Login</button>
    </div>
  </form>
</main>

<style src="./Login.css">
</style>
