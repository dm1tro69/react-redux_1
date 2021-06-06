import React from 'react'
import './style.css'
import {paths} from "../../constans";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {animateAction} from "../../store/animate/actions";

const Navbar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClickLink = (path) => (e)=> {
        e.preventDefault()
        dispatch(animateAction.setStartAnimate(true))
        const animateTimeout = setTimeout(()=> {
            dispatch(animateAction.setStartAnimate(false))
            history.push(path)
            clearTimeout(animateTimeout)
        }, 700)
    }
return (
<div className={'navbar'}>
    <a href='#' className={'navbar-link'} onClick={handleClickLink(paths.main)}>Main</a>
    <a href='#' className={'navbar-link'} onClick={handleClickLink(paths.about)}>About</a>
    <a href='#' className={'navbar-link'} onClick={handleClickLink(paths.settings)}>Settings</a>
</div>
)
}
export default Navbar