import * as React from 'react';
import { Admin, Resource, EditGuesser} from "react-admin";
import {PostList} from "./posts";
import { fetchUtils} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
};
export const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider}>
        {/* <Resource name="posts" list={PostList} />  */}
        <Resource name="posts" list={PostList} edit={EditGuesser} />
    </Admin>
);

export default App;