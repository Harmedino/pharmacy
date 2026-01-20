import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/Newsletter'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div className=''>

<MainBanner/>
<Categories/>
<BottomBanner/>
<Faq/>
<Newsletter/>
    </div>
  )
}

export default Home