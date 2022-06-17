import React from 'react'
import HomeFoodList from './HomeFoodList'
import './Home.css'
const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home'>
        <HomeFoodList/>
      </div>
    </div>
  )
}

export default Home