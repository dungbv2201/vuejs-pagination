import ExampleComponent from './components/ExampleComponent';
import NotFound from './components/NotFound';
import DemoComponent from './components/DemoComponent';
import UserDetail from './components/UserDetail'
import UserComponent from "./components/UserComponent";

export default [
    {
        path: '/admin/users',
        component: UserComponent,
        name: 'users',
        children: [
            {
                path: '',
                component: ExampleComponent,
                name: 'users.index'
            },
            {
                path: ':id',
                component: UserDetail,
                name: 'users.show'
            }
        ]
    },
    {
        path: '/demo',
        component: DemoComponent,
        name: 'demo'
    },
    {
        path: '*',
        component: NotFound
    }
]
