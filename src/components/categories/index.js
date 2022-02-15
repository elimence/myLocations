import React, {Fragment, useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import TopNavbarComponent from '../top-navbar-component'
import CategoryListRow from './category-list-row'
import {nanoid} from 'nanoid'
import {useSelector, useDispatch} from 'react-redux'
import {add_category} from '../../redux/actions/actions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


function Categories() {
    const allCategories = useSelector((state) => {
        return state.categories;
    })
    console.log({allCategories})
    const dispatch = useDispatch()

    const [showAddCategoryModal, setshowAddCategoryModal] = useState(false)
    const [userInput, setUserInput] = useState('')

    const canSaveNewCategory = Boolean(userInput);

    const addNewCategory = () => {
        dispatch(add_category({id: nanoid(), name: userInput}))
        setshowAddCategoryModal(false)
        setUserInput('')
    }

    return (
        <Fragment>
            <TopNavbarComponent>
                <NavItem>
                    <NavLink to='' onClick={() => setshowAddCategoryModal(true)} className="nav-link">
                        Add Category
                    </NavLink>
                </NavItem>
            </TopNavbarComponent>
            <main className='container'>
                <Table>
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allCategories && allCategories.map(category => <CategoryListRow key={category.id} id={category.id}
                        name={category.name}/>)}
                    </tbody>
                </Table>
            </main>

            <Modal show={showAddCategoryModal} onHide={() => setshowAddCategoryModal(!showAddCategoryModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='form-control' value={userInput} onChange={e => setUserInput(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setshowAddCategoryModal(false)}>
                        Close
                    </Button>
                    <Button disabled={!canSaveNewCategory} variant="primary" onClick={() => addNewCategory()}>
                        Add Category
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default Categories