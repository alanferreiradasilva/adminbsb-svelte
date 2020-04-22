//https://github.com/jorgegorka/svelte-router
import { PagesRoutes } from '../pages/PagesRoutes';
import { WidgetsRoutes } from '../pages/widgets/WidgetsRoutes.js';

const routes = [
    ...PagesRoutes,
    ...WidgetsRoutes
];

export { routes };