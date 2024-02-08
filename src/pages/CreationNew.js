import React, {useState} from 'react'
import { Form, FormGroup, Input, Label } from "reactstrap"
import { useNavigate } from 'react-router-dom'

const CreationNew = ( {createCreation }) => {
  const navigate = useNavigate()
  const [newCreation, setNewCreation] = useState({
    name: "",
    description: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCreation({ ...newCreation, [e.target.name]: e.target.value} 
      )
  }
  const handleSubmit = () => {
    createCreation(newCreation)
    navigate("/CreationIndex")
  }

  return (
    <div>Create a Creation
    <Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" />
  </FormGroup>
  <FormGroup>
    <Label for="description">Description</Label>
    <Input type="text" name="description" />
  </FormGroup>
</Form>
</div>
  )
}

export default CreationNew