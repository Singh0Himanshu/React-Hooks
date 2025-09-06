import React,{memo} from 'react'

const Header = () => {
    console.log("Header");
  return (
    <>
      <p>Header</p>
    </>
  )
}

export default memo(Header) // we are using memo here because to avoid unnecessary render of the components when chanages only occur in app components.
