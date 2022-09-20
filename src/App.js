import {Component} from 'react'

import Header from './components/Header'
import LandingSection from './components/Taskcard'
import FeaturesSection from './components/FeaturesSection'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <LandingSection />
        <FeaturesSection />
      </>
    )
  }
}

export default App
