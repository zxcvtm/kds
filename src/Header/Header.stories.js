import Header from './Header.svelte'

export default {
    title: 'Header',
    component: Header,
    argTypes: {
        status: {
            options: ['none', 'pause', 'stop'],
            control: { type: 'select' }
        }
    }
 }

const Template = (args) => ({ Component: Header, props: args });

export const Default = Template.bind({
});
Default.args = {
    status: '',
    nQueuedItems: 1
};