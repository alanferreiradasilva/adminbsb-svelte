import { CardRoutes } from './cards/CardRoutes';
import { InfoboxRoutes } from './infobox/InfoboxRoutes';

const WidgetsRoutes = [
    {
        name: 'widgets',
        nestedRoutes:[
            {
                name: 'cards',
                nestedRoutes:[
                    ...CardRoutes
                ]
            },
            {
                name: 'infobox',
                nestedRoutes:[
                    ...InfoboxRoutes
                ]
            },
        ]
    }
];

export { WidgetsRoutes };