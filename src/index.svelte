<svelte:options tag="svelte-custom-element" />

<script>
  import { onDestroy, onMount } from 'svelte'
  import List from './List/List.svelte'
  import Header from './Header/Header.svelte'
  import Footer from './Footer/Footer.svelte'

  export let title = 'Hello from component!!'
  let initialized = false
  const fontStyleNode = document.createElement('link')

  onMount(() => {
    // HACK: Font import doesn't work inside shadow-dom.
    // Read more: https://stackoverflow.com/questions/55382081/using-google-fonts-with-shadow-dom
    fontStyleNode.type = 'text/css'
    fontStyleNode.rel = 'stylesheet'
    fontStyleNode.href =
      '//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap'
    document.head.appendChild(fontStyleNode)

    initialized = true
  })

  onDestroy(() => {
    // HACK: Font import doesn't work inside shadow-dom.
    document.head.removeChild(fontStyleNode)
  })

  const columns = [{
    name: 'Nº orden: 123456',
    items: [{
      name: 'Element 1',
      subItems: ['subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']
    }, {
      name: 'Element 2',
      subItems: ['subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']
    }]
  }, {
    name: 'Nº orden: 654321',
    items: [{
      name: 'Element 1',
      subItems: ['subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']
    }, {
      name: 'Element 2',
      subItems: ['subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']
    }]
  }];
</script>
<div class="body">
    <Header status='stop'/>
    <List columns={columns}/>
    <div class="footer">
        <Footer name='Renacin Smapina' />
    </div>
</div>

<style global type="text/scss" lang="scss" src="./index.scss">
.body {
   height: 100vh;
   display:flex;
   flex-direction: column;
}
.footer {
  margin-top:auto;
}
</style>
