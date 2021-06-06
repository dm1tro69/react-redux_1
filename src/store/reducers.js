import {combineReducers} from 'redux'
import {profileReducer as profile} from "./profile";
import {animateReducer as animate} from './animate/reducer'
import {postsReducer as posts} from "./posts/reducer";


export const reducers = combineReducers({
   profile,
   animate,
   posts

})