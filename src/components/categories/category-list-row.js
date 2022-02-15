import React, { Fragment, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { deleteCategory, editCategory } from '../../redux/actions/actions'


function CategoryListRow(props) {
    const [showDeleteModal, setshowDeleteModal] = useState(false)
    const [showUpdateModal, setshowUpdateModal] = useState(false)
    const [userInput, setUserInput] = useState(props.name)

    const dispatch = useDispatch()
    const confirmDelete = () => {
        dispatch(deleteCategory(props.id))
        setshowDeleteModal(false)
    }
    const confirmUpdate = () => {
        dispatch(editCategory(props.id, userInput))
        setshowUpdateModal(false)
    }

    const navigate = useNavigate()

  return (
    <Fragment>
        <tr>
            <td>{props.name}</td>
            <td>
                <button onClick={() => navigate(`/locations/${props.id}`) } className='btn btn-info '>View</button>
                <button className='btn btn-success mx-4' onClick={() => setshowUpdateModal(true)}>Edit</button>
                <button className='btn btn-danger ' onClick={() => setshowDeleteModal(true)}>Delete</button>
            </td>
        </tr>

        <Modal show={showDeleteModal} onHide={() => setshowDeleteModal(!showDeleteModal)}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setshowDeleteModal(false)}>
                Close
            </Button>
            <Button variant="danger" onClick={() => confirmDelete()}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showUpdateModal} onHide={() => setshowUpdateModal(!showUpdateModal)}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input className='form-control' value={userInput} onChange={e => setUserInput(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setshowUpdateModal(false)}>
                Close
            </Button>
            <Button variant="danger" onClick={() => confirmUpdate()}>
                Confirm Update
            </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>
  )
}

export default CategoryListRow