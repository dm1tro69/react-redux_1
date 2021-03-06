import React, {useMemo} from 'react'
import {useSelector} from "react-redux";

const PageAnimated = ({children}) => {
  const {startAnimate} = useSelector((state)=> state.animate)

  const classes = useMemo(()=> startAnimate? 'animate': '', [startAnimate])

return (
  <div className={classes}>
      {children}
  </div>
)
}
export default PageAnimated