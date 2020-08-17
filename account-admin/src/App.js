import * as React from "react";
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './accounts';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import {data} from './data.js'

const dataProvider = jsonServerProvider('http://localhost:8080/api');
console.log(data);

//jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList} />
          <Resource crossorigin name="accounts" list={PostList} edit={PostEdit} create={PostCreate} test />
          
      </Admin>
  );

export default App;