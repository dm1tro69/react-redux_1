import React from 'react'
import './style.css'
import PageAnimated from "../../components/PageAnimated/PageAnimated";


const Settings = () => {
return (
<PageAnimated>
    <div className={'settings'}>
        <div className="row">
            <div className={'block block-right'}></div>
            <div className={'block block-left'}></div>
            <div className={'block block-right'}></div>
            <div className={'block block-left'}></div>
        </div>
        <div className="row">
            <div className={'block'}></div>
            <div className={'block'}></div>
        </div>
    </div>
</PageAnimated>
)
}
export default Settings