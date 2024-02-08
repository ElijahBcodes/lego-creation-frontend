import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <Link to="/creationindex"  className="btn btn-ghost text-xl">Lego Creations</Link>
</div>
  )
}

export default navbar