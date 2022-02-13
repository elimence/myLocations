import React from 'react'

function TopNavbarComponent({ children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand" href="#">MyLocations</a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            {children && children.map(child => {
                console.log(child)
                return (<li className="nav-item active" key={child.title}>
                    <a className="nav-link" onClick={child.props.action}>{child.props.title}</a>
                </li>)
            })}
        </ul>
        </div>
    </nav>
  )
}

export default TopNavbarComponent