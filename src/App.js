import React, { Fragment } from 'react'
import BottomSection from './components/BottomSection'
import Header from './components/Header'
import MidSection from './components/MidSection'

const App = () => {
  return (
    <Fragment>
      <Header/>
      <MidSection/>
      <BottomSection/>
    </Fragment>
  )
}

export default App
