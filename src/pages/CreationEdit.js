import React, {  useState, } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams  } from 'react-router-dom'

const CreationEdit = ({ creations, updateCreation }) => {
  const { id } = useParams()
  let currentCreation = creations?.find((creation) => creation.id === +id)

  const [editCreation, setEditCreation] = useState({
    name: currentCreation.name,
    description: currentCreation.description,
    image: currentCreation.image
  })
  const handleSubmit = (e) => {
    setEditCreation({ ...editCreation, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateCat(editCreation, currentCreation.id)
    navigate("/creationindex")
  }





       return (
    <Form>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="text" name="description" />
    </FormGroup>
    <FormGroup>
      <Label for="enjoys">Enjoys</Label>
      <Input type="text" name="enjoys" />
    </FormGroup>
    <FormGroup>
      <Label for="image">Image URL</Label>
      <Input type="text" name="image" />
    </FormGroup>
    <Button onClick={handleSubmit} name="submit">
          Save
        </Button>
  </Form>
  )
}

export default CreationEdit