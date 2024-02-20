import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CreationNew = ({ createCreation }) => {
  const navigate = useNavigate();
  const [newCreation, setNewCreation] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewCreation({ ...newCreation, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    createCreation(newCreation);
   
  }
  return (
    <div>
      Save a Creation
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={newCreation.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            onChange={handleChange}
            value={newCreation.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Image</Label>
          <Input
            type="img"
            name="image"
            onChange={handleChange}
            value={newCreation.image}
          />
        </FormGroup>
       <Button onClick={handleSubmit} name="submit">
          Save
        </Button>
      </Form> 
    </div>
  );
};

export default CreationNew;
