import React from 'react'
import { useSelector} from 'react-redux'
import './style.css'

 export const Profile = () => {
    const {profile} = useSelector((state)=> state.profile)
     const profileName = !!profile && !!profile.name && profile.name.length > 0 ? profile.name: 'Not Name'
     const profileLastName = !!profile && !!profile.lastName && profile.lastName.length > 0 ? profile.lastName: 'Not Last Name'
return (
  <div className={'profile'}>
      {!!profile? (
          <div>
              <h1>{profileName}</h1>
              <h1>{profileLastName}</h1>
          </div>
      ): <h1>Not Data</h1>}
  </div>
)
}
