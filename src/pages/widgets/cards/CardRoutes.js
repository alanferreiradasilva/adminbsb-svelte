import Basic from './Basic.svelte';
import Colored from './Colored.svelte';
import NoHeader from './NoHeader.svelte';

const CardRoutes = [
    {
        name: 'basic',
        component: Basic
    },
    {
        name: 'colored',
        component: Colored
    },
    {
        name: 'no-header',
        component: NoHeader
    }
];

export { CardRoutes };