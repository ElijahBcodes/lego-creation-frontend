import React from 'react'
import { useParams } from 'react-router-dom'


const CreationShow = ({creations, updateCreation}) => {
const {id} = useParams()
console.log(id)
const currentCreation = creation


  
  return (
    <div>CreationShow</div>
  )
}

export default CreationShow