import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const CreationEdit = ({ creations, updateCreation }) => {
  const { id } = useParams();
  let currentCreation = creations?.find((creation) => creation.id === +id);

  const [editCreation, setEditCreation] = useState({
    name: currentCreation.name,
    description: currentCreation.description,
    image: currentCreation.image,
  });
  const handleChange = (e) => {
    setEditCreation({ ...editCreation, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    updateCreation(editCreation, currentCreation.id);
    navigate("/creationindex");
  };
  const handleDelete = () => {
    deleteCreation(id);
    navigate("/creationsindex");
    console.log(currentCreation);
  };
  const deleteCreation = (id) => {
    fetch(`http://localhost:3000/creations/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.readCreation())
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={editCreation.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          onChange={handleChange}
          value={editCreation.description}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input
          type="text"
          name="image"
          onChange={handleChange}
          value={editCreation.image}
        />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Save
      </Button>
      <Button onClick={handleDelete} color="danger">
        Delete
      </Button>
    </Form>
  );
};

export default CreationEdit;
