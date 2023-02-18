import React from 'react'
import Style from './App.module.scss'
import Page from '@/Page/Page'

function App (): JSX.Element {
  return (
    <div className={Style.App}>
      <Page/>
    </div>
  )
}

export default App

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line
    interface IntrinsicElements {
      [tag: string]: any
    }
  }
}
