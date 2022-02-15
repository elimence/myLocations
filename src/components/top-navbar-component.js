import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const tabs = [{
    route: "/",
    icon: faLayerGroup,
    label: "Categories"
}, {
    route: "/locations",
    icon: faLocation,
    label: "Locations"
}]

const TopNavbarComponent = ({children}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyLocations</a>
                    <Nav className="ml-auto">
                        {children}
                    </Nav>
                </div>
            </nav>

            {/* Bottom Tab Navigator*/}
            <nav className="navbar fixed-bottom navbar-light" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) => (
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.route} className="nav-link" activeClassName="active">
                                        <div
                                            className="row d-flex flex-column justify-content-center align-items-center">
                                            <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                            <div>{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
};

export default TopNavbarComponent;