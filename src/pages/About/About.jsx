import React from 'react'
import './style.css'
import PageAnimated from "../../components/PageAnimated/PageAnimated";

const About = () => {
return (
<PageAnimated>
  <div className="about">
   <div className="row">
     <div className={'block block-left'}></div>
     <div className={'block block-right'}></div>
   </div>
    <div className="row">
      <div className={'block block-left'}></div>
      <div className={'block block-right'}></div>
      <div className={'block block-right'}></div>
    </div>
  </div>
</PageAnimated>
)
}
export default About