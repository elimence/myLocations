import React, { Fragment } from 'react'
import  Table  from 'react-bootstrap/Table'
import TopNavbarComponent from '../top-navbar-component'
import CategoryListRow from './category-list-row'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'

const dummyData = [
  {
    id: nanoid(),
    name: 'Bar'
  },
  {
    id: nanoid(),
    name: 'Resturant'
  },
  {
    id: nanoid(),
    name: 'Roads'
  }
]

function Categories() {
  const allCategories = useSelector((state) => state.categories)
  return (
    <Fragment>
      <TopNavbarComponent>
        <div title="Add Category"  action={() => console.log('cat')} />
        {/* <div title="Add Location"  action={() => console.log('log')} /> */}
      </TopNavbarComponent>
      <main className='container'>
        <Table>
<thead>
    <tr>
      <th>#</th>
      <th>Name</th>
    </tr>
</thead>
<tbody>
  {dummyData.map(category => <CategoryListRow id={category.id} name={category.name}  />)}
</tbody>
        </Table>
      </main>
    </Fragment>
  )
}

export default Categories