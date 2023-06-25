export const initialUserData = {
    allUsers: []
}


export const userReducerFunc = (state, action) => {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, allUsers: action.payload }
        case "FOLLOW_USERS":
            return { ...state, allUsers: action.payload }
        default:
            return state
    }
}