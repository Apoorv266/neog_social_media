export const initialPostData = {
    allPosts: [],
    filterBytrending: false,
    filterByDate: false
}


export const postReducerFunc = (state, action) => {
    switch (action.type) {
        case "GET_POST":
            return { ...state, allPosts: action.payload }
        case "TOGGLE_FILTER_TRENDING":
            return { ...state, filterBytrending: !state.filterBytrending , filterByDate:false}
        case "TOGGLE_FILTER_DATE":
            return { ...state, filterByDate: !state.filterByDate , filterBytrending:false}
        default:
            return state
    }
}