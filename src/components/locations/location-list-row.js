import React, {Fragment, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useDispatch, useSelector} from 'react-redux'
import {deleteLocation, editLocation} from '../../redux/actions/actions'
import MapComponent from '../map-component'


function LocationListRow({location, category}) {
    const categories = useSelector((state) => state.categories);
    const [showDeleteModal, setshowDeleteModal] = useState(false)
    const [showUpdateModal, setshowUpdateModal] = useState(false)
    const [editNameInput, setEditNameInput] = useState(location.name)
    const [editAddressInput, setEditAddressInput] = useState(location.address)
    const {coordinates} = location;
    const [lat, long] = coordinates;

    const [editLatInput, setEditLatInput] = useState(lat);
    const [editLongInput, setEditLongInput] = useState(long);
    const [newCategoryId, setNewCategoryId] = useState(location.categoryId);

    const [showMapModal, setShowMapModal] = useState(false)

    const dispatch = useDispatch()
    const confirmDelete = () => {
        dispatch(deleteLocation(location.id))
        setshowDeleteModal(false)
    }
    const confirmUpdate = () => {
        dispatch(editLocation(location.id, {
            ...location,
            name: editNameInput,
            address: editAddressInput,
            categoryId: newCategoryId,
            coordinates: [editLatInput, editLongInput],
        }))
        setshowUpdateModal(false)
    }

    const reset = () => {
        setEditNameInput(location.name);
        setEditAddressInput(location.address);
        setEditLatInput(lat);
        setEditLongInput(long);
        setNewCategoryId(location.categoryId);
    }
    console.log({ location })

    return (
        <Fragment>
            <tr>
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.coordinates.join(', ')}</td>
                <td>{category.name}</td>
                <td>
                    <button onClick={() => setShowMapModal(true)} className='btn btn-info '>View</button>
                    <button className='btn btn-success mx-4' onClick={() => setshowUpdateModal(true)}>Edit</button>
                    <button className='btn btn-danger ' onClick={() => setshowDeleteModal(true)}>Delete</button>
                </td>
            </tr>

            <Modal show={showDeleteModal} onHide={() => setshowDeleteModal(!showDeleteModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are about to delete this location. Are you sure you want to continue?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setshowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => confirmDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showUpdateModal} onHide={() => setshowUpdateModal(!showUpdateModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-group' style={{marginBottom: 15}}>
                        <label>Name:</label> {' '}
                        <input className='form-control' value={editNameInput} onChange={e => setEditNameInput(e.target.value)}/>
                    </div>
                    <div className='form-group' style={{marginBottom: 15}}>
                        <label>Address:</label> {' '}
                        <input className='form-control' value={editAddressInput} onChange={e => setEditAddressInput(e.target.value)}/>
                    </div>
                    <div className='form-group' style={{marginBottom: 15}}>
                        <label>Latitude:</label> {' '}
                        <input className='form-control' value={editLatInput} onChange={e => setEditLatInput(e.target.value)}/>
                    </div>
                    <div className='form-group' style={{marginBottom: 15}}>
                        <label>Longitude:</label> {' '}
                        <input className='form-control' value={editLongInput} onChange={e => setEditLongInput(e.target.value)}/>
                    </div>
                    <div  className='form-group'>
                      <select className='form-control' onChange={e => setNewCategoryId(e.target.value)}>
                          <label>Category</label>
                          {categories.map(item => {
                              return (
                                  <option selected={item.id === category.id} key={item.id} value={item.id}
                                          name={item.name}>{item.name}</option>
                              );
                          })}
                          {/* <option>Foo</option> */}
                      </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        reset();
                        setshowUpdateModal(false)
                    }}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => confirmUpdate()}>
                        Confirm Update
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size='lg' show={showMapModal} onHide={() => setShowMapModal(!showMapModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Map View</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: '800px', height: '800px'}}>
                    <MapComponent center={{lat: +location.coordinates[0], lng: +location.coordinates[1]}} />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default LocationListRow
