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
            const { id, newName } = action.payload;
            // const category = state.categories.find(category => category.id === id);
            const categoryIndex = state.categories.findIndex(category => category.id === id);

            const newCategoriesList = [...state.categories.slice(0, categoryIndex), { id, name: newName }, ...state.categories.slice(categoryIndex+1)]

            // const updatedCategories = 
            // const updateCategories = state.categories.map(category => {
            //     if (category.id === action.payload.id) {
            //         return action.payload.category
            //     }
            //     return category
            // })

            return {
                ...state,
                categories: newCategoriesList
            }

        case DELETE_CATEGORY:
            const index = state.categories.findIndex(category => category.id === action.payload.categoryId);
            const allCategories = [...state.categories];
            allCategories.splice(index, 1)

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
            const { locationId, changes } = action.payload;
            const changeIndex = state.locations.findIndex(location => location.id === locationId);
            const newList = [...state.locations.slice(0, changeIndex), { ...changes }, ...state.locations.slice(changeIndex+1)]

            return {
                ...state,
                locations: newList
            }

        case DELETE_LOCATION:
            const targetIndex = state.locations.findIndex(location => location.id === action.payload.locationId);
            const allLocations = [...state.locations];
            allLocations.splice(targetIndex, 1)

            return {
                ...state,
                locations: allLocations
            }
        default:
            return state;
    }
}