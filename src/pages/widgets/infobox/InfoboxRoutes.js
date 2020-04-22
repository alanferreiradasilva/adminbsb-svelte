import Infobox1 from './Infobox1.svelte';
import Infobox2 from './Infobox2.svelte';

const InfoboxRoutes = [
    { 
        name: 'infobox-1', 
        component: Infobox1 
    },
    { 
        name: 'infobox-2', 
        component: Infobox2 
    }
];

export { InfoboxRoutes };