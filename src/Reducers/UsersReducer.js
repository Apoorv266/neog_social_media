export const initialUserData = {
    allUsers: [],
    profileUser: {}
}


export const userReducerFunc = (state, action) => {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, allUsers: action.payload }
        case "FOLLOW_USERS":
            return { ...state, allUsers: action.payload }
        case "PROFILE_USER":
            return { ...state, profileUser: action.payload }
        default:
            return state
    }
}