import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = ({onSubmit}) => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        todo:''
      }}
      onSubmit={(values) => {onSubmit(values)}}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm
