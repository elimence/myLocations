const  KEY = 'MAPPER_APP'

export function saveToLocalStorage(state) {
    try {
        const deserialized = JSON.stringify(state)
        localStorage.setItem(KEY, deserialized)
    } catch (ex) {
        console.log('error saving to local storage', { ex })
    }
}


export function retrieveFromLocalStorage() {
    try {
        const data = localStorage.getItem(KEY)
        if (!data) {
            return undefined
        }
        const serialized = JSON.parse(data)
        
        return serialized
    } catch (ex) {
        console.log('error reading from local storate', { ex })
    }
}