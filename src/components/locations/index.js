import React, {Fragment, useEffect, useMemo, useState} from 'react'
import Table from 'react-bootstrap/Table'
import TopNavbarComponent from '../top-navbar-component'
import LocationListRow from './location-list-row'
import {nanoid} from 'nanoid'
import {useSelector, useDispatch} from 'react-redux'
import {addLocation} from '../../redux/actions/actions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { NavItem } from 'reactstrap';
import { NavLink, useParams } from 'react-router-dom';


function Locations() {
  const state = useSelector((state) => state);
  const allLocations = state.locations;
  const allCategories = state.categories;

    const dispatch = useDispatch()

    const [showAddLocationModal, setshowAddLocationModal] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [addressInput, setAddressInput] = useState('')
    const [latInput, setLatInput] = useState('')
    const [longInput, setLongInput] = useState('')
    const [categoryInput, setCategoryInput] = useState(allCategories[0].id)

    const { categoryId } = useParams()

    const addNewLocation = () => {
        dispatch(addLocation({
          id: nanoid(), 
          name: nameInput,
          address: addressInput,
          coordinates: [latInput, longInput],
          categoryId: categoryInput,
        }))
        setshowAddLocationModal(false);
        resetAddLocationForm();
    }

    const resetAddLocationForm = () => {
      setNameInput('');
      setAddressInput('');
      setLatInput('');
      setLongInput('');
      setCategoryInput(allCategories[0].id);
    }

    const [filteredLocations, setFilteredLocations] = useState(allLocations)

    useEffect(() => {
      if (categoryId) {
        const data = allLocations.filter(loc => loc.categoryId === categoryId);
        setFilteredLocations((data))
      } else {
        setFilteredLocations(allLocations)
      }
    }, [categoryId])

    const canSaveNewLocation = Boolean(nameInput && addressInput && latInput && longInput && categoryInput);


    return (
        <Fragment>
            <TopNavbarComponent>
                <NavItem>
                    <NavLink to='' onClick={() => setshowAddLocationModal(true)} className="nav-link">
                        Add Location
                    </NavLink>
                </NavItem>
            </TopNavbarComponent>
            <main className='container'>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Coordinates</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredLocations && filteredLocations.map(location => {
                      const category = allCategories.find(category => category.id === location.categoryId);
                      return <LocationListRow key={location.id} location={location} category={category} />
                    })}
                    </tbody>
                </Table>
            </main>

            <Modal show={showAddLocationModal} onHide={() => setshowAddLocationModal(!showAddLocationModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='form-group' style={{ marginBottom: 15 }}>
                  <label>Name:</label> {' '}
                  <input className='form-control' value={nameInput} onChange={e => setNameInput(e.target.value)} />
                </div>
                <div className='form-group' style={{ marginBottom: 15 }}>
                  <label>Address:</label> {' '}
                  <input className='form-control' value={addressInput} onChange={e => setAddressInput(e.target.value)} />
                </div>
                <div className='form-group' style={{ marginBottom: 15 }}>
                  <label>Latitude:</label> {' '}
                  <input className='form-control' value={latInput} onChange={e => setLatInput(e.target.value)} />
                </div>
                <div className='form-group' style={{ marginBottom: 15 }}>
                  <label>Longitude:</label> {' '}
                  <input className='form-control' value={longInput} onChange={e => setLongInput(e.target.value)} />
                </div>
                <div className='form-group'>
                  <select className='form-control' onChange={e => setCategoryInput(e.target.value)}>
                    <label>Category</label>
                    {allCategories.map((item, index) => {
                      return (
                        <option selected={item.id === categoryInput} key={item.id} value={item.id} name={item.name}>{item.name}</option>
                      );
                    })}
                  </select>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setshowAddLocationModal(false)}>
                        Close
                    </Button>
                    <Button disabled={!canSaveNewLocation} variant="primary" onClick={addNewLocation}>
                        Add Location
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default Locations