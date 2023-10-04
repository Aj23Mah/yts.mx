
import React from 'react'
import '../../assets/scss/Footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
          <div className='mb-8 flex'>
            <div className='text-xl'>YTS@2011 - 2023 &nbsp; </div>
            <div className='text-lg'> - Blog - DMCA -API - RSS - Contact -BrowserMovies - Request - Login - Language</div>
          </div>
            <div className='mb-8 text-lg'>EZTV - YIFY Status - YTS Proxies - YTS Proxies (TOR) &nbsp; - <button>Follow @ytsyify</button></div>
            <div className='mb-8 text-base'>By using this site you agree to and accept our User Agreement, which can be read here.</div>
        </div>
    </footer>
  )
}

export default Footer