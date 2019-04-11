import ExampleComponent from './components/ExampleComponent';
import NotFound from './components/NotFound';
export default [
    {
        path:'/list-users',
        component:ExampleComponent

    },
    {
        path: '*',
        component: NotFound
    }
]
