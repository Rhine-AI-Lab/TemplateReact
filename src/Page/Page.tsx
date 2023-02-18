import React from 'react'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'

function Page (): JSX.Element {
  return (
    <div className='Order'>
      <md-outlined-button label="Back"></md-outlined-button>
      <md-filled-button label="Next"></md-filled-button>
    </div>
  )
}

export default Page
