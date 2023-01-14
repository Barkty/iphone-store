import Navbar from 'components/navbar/Navbar'
import React, { useState } from 'react'
import { ButtonDark, Container, Hero, InputContainer, SideFilter } from './styles'
import hero from 'assets/hero_image.svg'
import { motion } from 'framer-motion'
import { HiOutlineCheckCircle } from 'react-icons/hi'

const Home = () => {
    const [active, setActive] = useState('all')

  return (
    <Container>
        <Navbar/>
        <motion.div layout 
            transition={{
                layout: { duration: 0.3 }
            }}>
            <Hero>
                <div className='hero'>
                    <div className='hero__introduction'>
                        <h1>Shop Our latest <br/>Available stock here</h1>
                        <div className='search_bar'>
                            <InputContainer type='text' placeholder='Search products'/>
                            <ButtonDark type='button'>
                                Search
                            </ButtonDark>
                        </div>
                    </div>
                    <div className='hero__image'>
                        <img src={hero} alt='Hero Laptop'/>
                    </div>
                </div>
            </Hero>
        </motion.div>
        <SideFilter>
            <h2 className='category'>Category</h2>
            <div className='category__list__container'>
                <ul className='category__list'>
                    <li onClick={()=>setActive('all')} 
                        style={{ backgroundColor: active === 'all' ? '#25315B' : 'inherit'}}>
                            <HiOutlineCheckCircle style={{ display: active === 'all' ? 'block' : 'none'}}/> 
                            <span style={{ left: active === 'all' ? '0' : '57px'}}>All</span>
                    </li>
                    <li onClick={()=>setActive('iPhone')} 
                        style={{ backgroundColor: active === 'iPhone' ? '#25315B' : 'inherit'}}>
                            <HiOutlineCheckCircle style={{ display: active === 'iPhone' ? 'block' : 'none'}}/> 
                            <span style={{ left: active === 'iPhone' ? '0' : '57px'}}>iPhone</span>
                    </li>
                    <li onClick={()=>setActive('samsung')} 
                        style={{ backgroundColor: active === 'samsung' ? '#25315B' : 'inherit'}}>
                            <HiOutlineCheckCircle style={{ display: active === 'samsung' ? 'block' : 'none'}}/> 
                            <span style={{ left: active === 'samsung' ? '0' : '57px'}}>Samsung</span>
                    </li>
                    <li onClick={()=>setActive('iPad')} 
                        style={{ backgroundColor: active === 'iPad' ? '#25315B' : 'inherit'}}>
                            <HiOutlineCheckCircle style={{ display: active === 'iPad' ? 'block' : 'none'}}/> 
                            <span style={{ left: active === 'iPad' ? '0' : '57px'}}>iPad</span>
                    </li>
                    <li onClick={()=>setActive('Macbook')} 
                        style={{ backgroundColor: active === 'Macbook' ? '#25315B' : 'inherit'}}>
                            <HiOutlineCheckCircle style={{ display: active === 'Macbook' ? 'block' : 'none'}}/> 
                            <span style={{ left: active === 'Macbook' ? '0' : '57px'}}>MacBook</span>
                    </li>
                    <li onClick={()=>setActive('Airpods')} 
                        style={{ backgroundColor: active === 'Airpods' ? '#25315B' : 'inherit'}}>
                            <HiOutlineCheckCircle style={{ display: active === 'Airpods' ? 'block' : 'none'}}/> 
                            <span style={{ left: active === 'Airpods' ? '0' : '57px'}}>Airpods</span>
                    </li>
                </ul>
            </div>
        </SideFilter>
        <>
            
        </>
    </Container>
  )
}

export default Home