import {postActionType} from "./actions";


const initialState = {
    loading: false,
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case postActionType.SET_POSTS:
            return{...state, posts: action.payload}
        case postActionType.SET_LOADING:
            return {...state, loading: action.payload}
        case postActionType.CLEAR:
            return {...state, posts: []}
        default:
            return state
    }
}