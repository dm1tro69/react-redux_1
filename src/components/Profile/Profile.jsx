import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'

 export const Profile = () => {
    const {profile} = useSelector((state)=> state.profile)
return (
  <div className={'profile'}>
      {!!profile? <h1>{profile.name}</h1>: <h1>Not Data</h1>}
  </div>
)
}
