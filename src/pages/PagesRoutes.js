import Home from '../pages/Home.svelte';
import Typography from '../pages/Typography.svelte';
import HelperClasses from '../pages/HelperClasses.svelte';
import ChangeLogs from '../pages/ChangeLogs.svelte';

const PagesRoutes = [
    {
        name: '/',
        component: Home
    },
    {
        name: '/home',
        component: Home
    },
    {
        name: '/typography',
        component: Typography
    },
    {
        name: '/helper-classes',
        component: HelperClasses
    },
    {
        name: '/changelogs',
        component: ChangeLogs
    }
];

export { PagesRoutes };