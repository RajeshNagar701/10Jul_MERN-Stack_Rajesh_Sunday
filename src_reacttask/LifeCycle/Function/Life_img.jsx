import React, { useEffect } from 'react'

function Life_img() {

  // component load/birth
  useEffect(() => {
    console.log('DidMount')
  }, []);


  // component unload/death
  useEffect(() => {
    return (() => console.log('WillUnMount'))
  }, []);

  return (
    <>
      <div>Life_img</div>
      <img src="https://topsint.com/topserp/images/logo-tops.png" alt="" />
    </>
  )
}

export default Life_img