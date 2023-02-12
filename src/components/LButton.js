import React from 'react'




const LButton = (props) => {
  return (
    <props.bname onClick={props.click} className={props.className} variant="contained" disableRipple>
        {props.title}
      </props.bname>
  )
}

export default LButton