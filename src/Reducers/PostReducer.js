export const postData = {
    id: "",
    content: "",
    fileTitle: "",
    fileUrl: "",
    media: null,
}

export const initialPostData = {
    allPosts: [],
    bookmarkPosts: [],
    userProfilePosts: [],
    filterBytrending: false,
    filterByDate: false,
    postData: postData
}


export const postReducerFunc = (state, action) => {
    switch (action.type) {
        case "GET_POST":
            return { ...state, allPosts: action.payload }
        case "ADD_POST":
            return { ...state, allPosts: action.payload }
        case "EDIT_POST":
            return { ...state, allPosts: action.payload }
        case "TOGGLE_FILTER_TRENDING":
            return { ...state, filterBytrending: !state.filterBytrending, filterByDate: false }
        case "TOGGLE_FILTER_DATE":
            return { ...state, filterByDate: !state.filterByDate, filterBytrending: false }
        case "LIKE_POST":
            return { ...state, allPosts: action.payload }
        case "DISLIKE_POST":
            return { ...state, allPosts: action.payload }
        case "DELETE_POST":
            return { ...state, allPosts: action.payload }
        case "GET_BOOKMARK":
            return { ...state, bookmarkPosts: action.payload }
        case "ADD_BOOKMARK":
            return { ...state, bookmarkPosts: action.payload }
        case "REMOVE_BOOKMARK":
            return { ...state, bookmarkPosts: action.payload }
        case "ADD_COMMENT":
            return { ...state, allPosts: action.payload }
        case "DELETE_COMMENT":
            return { ...state, allPosts: action.payload }
        case "ADD_USER_POST":
            return { ...state, userProfilePosts: action.payload }
        case "POST_CONTENT":
            return { ...state, postData: action.payload }
        case "ADD_POST_CONTENT":
            return { ...state, postData: { ...state.postData, content: action.payload } }
        case "ADD_POST_MEDIA":
            return { ...state, postData: { ...state.postData, media: action.payload } }
        case "REMOVE_ALL_MEDIA":
            return {
                ...state, postData: {
                    ...state.postData, media: null, fileTitle: "",
                    fileUrl: ""
                }
            }
        default:
            return state
    }
}