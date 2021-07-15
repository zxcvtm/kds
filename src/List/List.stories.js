import List from './List.svelte'

export default { title: 'List' }
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

export const Default = () => ({
  Component: List,
  props: {
    columns
  }
})
