import React from 'react'
import {useDispatch} from "react-redux";
import './style.css'
import {profileActions} from "../../store/profile";

const LoginForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        const profile = {
            name: form['name'].value,
            lastName: form['lastname'].value
        }
        dispatch(profileActions.setProfile(profile))
    }
return (
<form onSubmit={handleSubmit} className="form form-login">
    <div className="field">
        <input type="text" name={'name'} autoComplete={'off'}/>
    </div>
    <div className="field">
        <input type="text" name={'lastname'} autoComplete={'off'}/>
    </div>
    <div>
        <button type="submit">Submit</button>

    </div>
</form>
)
}
export default LoginForm