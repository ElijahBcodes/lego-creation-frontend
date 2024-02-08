import React from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap'

const CreationEdit = () => {
  return (
    <Form>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" />
    </FormGroup>
    <FormGroup>
      <Label for="age">Age</Label>
      <Input type="number" name="age" />
    </FormGroup>
    <FormGroup>
      <Label for="enjoys">Enjoys</Label>
      <Input type="text" name="enjoys" />
    </FormGroup>
    <FormGroup>
      <Label for="image">Image URL</Label>
      <Input type="text" name="image" />
    </FormGroup>
  </Form>
  )
}

export default CreationEdit