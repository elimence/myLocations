import React from 'react'

function CategoryListRow(props) {
  return (
    <tr key={props.title}>
        <td>{props.name}</td>
        <td>
            <button className='btn btn-info '>View</button>
            <button className='btn btn-success mx-4'>Edit</button>
            <button className='btn btn-danger '>Delete</button>
        </td>
    </tr>
  )
}

export default CategoryListRow