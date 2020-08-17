import * as React from "react";
import { List, EditButton, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="accountNumber" />
            <EmailField source="email" />
            <TextField source="initialBalance" />
        </Datagrid>
    </List>
);

export const PostList = props => (
    <List {...props}>

       <Datagrid>
           <TextField source="id" />
           
                <TextField source="name" />
           

            <TextField source="title" />

           <EditButton />
        </Datagrid>
    </List>
);
