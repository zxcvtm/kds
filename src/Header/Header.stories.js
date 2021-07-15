import Header from './Header.svelte'

export default {
    title: 'Header',
    component: Header,
 }

const Template = (args) => ({ Component: Header, props: args });

export const Default = Template.bind({
});
Default.args = {
    nQueuedItems: 1,
};

export const Pause = Template.bind({});
Pause.args = {
    status:'pause'
};

export const Stop = Template.bind({});
Stop.args = {
    status:'stop'
};