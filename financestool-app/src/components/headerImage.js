import React from 'react'

import HomeHeader from '../assets/home-header.png'

class HeaderImage extends React.Component {
  render() {
    return (
      <div className="home-header">
        <img
          src={HomeHeader}
          alt='Banner with 2 people standing besides site logo and the phrase "Comece agora!"'
        />
      </div>
    )
  }
}

export default HeaderImage
