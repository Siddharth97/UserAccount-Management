import * as React from "react";
import { SimpleForm, FormDataConsumer, BooleanInput, TextInput, SelectInput, Create, Edit, ReferenceInput, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
export const PostList = props => (
    <List {...props}>

       <Datagrid>
           <TextField source="name" />
           
                <TextField source="accountNumber" />
           

            <TextField source="currentBalance" />

           <EditButton />
        </Datagrid>
    </List>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
           
                <TextInput source="Name"  />
                <TextInput source="Initial Balance"  />
            <TextInput source="Account Number" />
            <SelectInput source="Account Type" choices={[
                { id: 'chequing', name: 'Chequing', value: 'withdraw' },
                { id: 'savings', name: 'Savings' , value: 'deposit' },
               ]} />
        </SimpleForm>
    </Create>
);

const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };


    export const PostEdit = props => (
        <Edit {...props}>
            <SimpleForm>
               <TextInput source="accountNumber" />
               
               <BooleanInput source="isTransfer" />
               <SelectInput source="category" choices={[
                { id: 'withdraw', name: 'Withdraw', value: 'withdraw' },
                { id: 'deposit', name: 'Deposit' , value: 'deposit' },
                { id: 'transfer', name: 'Transfer' , value: 'transfer', }
            ]} />
   
            <FormDataConsumer>
                 {({ formData, ...rest }) => formData.isTransfer &&
                      <TextInput source="Transfer to Account Number" {...rest} />
                 }
             </FormDataConsumer>
             
                <TextInput source="Amount" />
               
            </SimpleForm>
        </Edit>
    );