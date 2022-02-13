import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, ADD_LOCATION, UPDATE_LOCATION, DELETE_LOCATION } from "../actions/action-types";

const initialState = {
    categories: [],
    locations: []
}


export function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: state.categories.concat(action.payload.category)
            }
        
        case UPDATE_CATEGORY:
            const updateCategories = state.categories.map(category => {
                if (category.id === action.payload.category.id) {
                    return action.payload.category
                }
                return category
            })

            return {
                ...state,
                categories: updateCategories
            }

        case DELETE_CATEGORY:
            const allCategories = [...state.categories];
            allCategories.splice(action.payload.categoryId, 1)

            return {
                ...state,
                categories: allCategories
            }

        // locations
        case ADD_LOCATION:
            return {
                ...state,
                locations: state.locations.concat(action.payload.location)
            }
        
        case UPDATE_LOCATION:
            const updateLocations = state.locations.map(location => {
                if (location.id === action.payload.location.id) {
                    return action.payload.location
                }
                return location
            })

            return {
                ...state,
                locations: updateLocations
            }

        case DELETE_LOCATION:
            const allLocations = [...state.locations];
            allLocations.splice(action.payload.locationId, 1)

            return {
                ...state,
                locations: allLocations
            }
    }
}