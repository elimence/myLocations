import { ADD_CATEGORY, ADD_LOCATION, DELETE_CATEGORY, DELETE_LOCATION, UPDATE_CATEGORY, UPDATE_LOCATION } from "./action-types";

export function add_category (category) {
    return {
        type: ADD_CATEGORY,
        payload: {
            category
        }
    }
}

export function deleteCategory (categoryId) {
    return {
        type: DELETE_CATEGORY,
        payload: {
            categoryId
        }
    }
}

export function editCategory (categoryId, newName) {
    return {
        type: UPDATE_CATEGORY,
        payload: {
            id: categoryId,
            newName
        }
    }
}

export function addLocation (location) {
    return {
        type: ADD_LOCATION,
        payload: {
            location
        }
    }
}

export function deleteLocation (locationId) {
    return {
        type: DELETE_LOCATION,
        payload: {
            locationId
        }
    }
}

export function editLocation (locationId, changes) {
    console.log('HEYA', changes)
    return {
        type: UPDATE_LOCATION,
        payload: {
            locationId,
            changes
        }
    }
}