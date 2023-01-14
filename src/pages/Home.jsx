import Navbar from 'components/navbar/Navbar'
import React, { useState } from 'react'
import { ButtonDark, ButtonFilled, Container, Hero, InputContainer, SideFilter } from './styles'
import hero from 'assets/hero_image.svg'
import { motion } from 'framer-motion'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Modal from 'components/modal/Modal'

const Home = () => {
    const [active, setActive] = useState('all')
    const [storage, setStorage] = useState('all')
    const [openModal, setOpenModal] = useState(false)

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
                            <span>All</span>
                            <HiOutlineCheckCircle style={{ display: active === 'all' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setActive('iPhone')} 
                        style={{ backgroundColor: active === 'iPhone' ? '#25315B' : 'inherit'}}>
                            <span>iPhone</span>
                            <HiOutlineCheckCircle style={{ display: active === 'iPhone' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setActive('samsung')} 
                        style={{ backgroundColor: active === 'samsung' ? '#25315B' : 'inherit'}}>
                            <span>Samsung</span>
                            <HiOutlineCheckCircle style={{ display: active === 'samsung' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setActive('iPad')} 
                        style={{ backgroundColor: active === 'iPad' ? '#25315B' : 'inherit'}}>
                            <span>iPad</span>
                            <HiOutlineCheckCircle style={{ display: active === 'iPad' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setActive('Macbook')} 
                        style={{ backgroundColor: active === 'Macbook' ? '#25315B' : 'inherit'}}>
                            <span>MacBook</span>
                            <HiOutlineCheckCircle style={{ display: active === 'Macbook' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setActive('Airpods')} 
                        style={{ backgroundColor: active === 'Airpods' ? '#25315B' : 'inherit'}}>
                            <span>Airpods</span>
                            <HiOutlineCheckCircle style={{ display: active === 'Airpods' ? 'block' : 'none'}}/> 
                    </li>
                </ul>
            </div>

            <h2 className='category'>Storage</h2>
            <div className='category__list__container'>
                <ul className='category__list'>
                    <li onClick={()=>setStorage('all')} 
                        style={{ backgroundColor: storage === 'all' ? '#25315B' : 'inherit'}}>
                            <span>All</span>
                            <HiOutlineCheckCircle style={{ display: storage === 'all' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setStorage('32GB')} 
                        style={{ backgroundColor: storage === '32GB' ? '#25315B' : 'inherit'}}>
                            <span>iPhone</span>
                            <HiOutlineCheckCircle style={{ display: storage === '32GB' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setStorage('64GB')} 
                        style={{ backgroundColor: storage === '64GB' ? '#25315B' : 'inherit'}}>
                            <span>Samsung</span>
                            <HiOutlineCheckCircle style={{ display: storage === '64GB' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setStorage('256GB')} 
                        style={{ backgroundColor: storage === '256GB' ? '#25315B' : 'inherit'}}>
                            <span>iPad</span>
                            <HiOutlineCheckCircle style={{ display: storage === '256GB' ? 'block' : 'none'}}/> 
                    </li>
                    <li onClick={()=>setStorage('512GB')} 
                        style={{ backgroundColor: storage === '512GB' ? '#25315B' : 'inherit'}}>
                            <span>MacBook</span>
                            <HiOutlineCheckCircle style={{ display: storage === '512GB' ? 'block' : 'none'}}/> 
                    </li>
                    {/* <li onClick={()=>setActive('Airpods')} 
                        style={{ backgroundColor: storage === 'Airpods' ? '#25315B' : 'inherit'}}>
                            <span>Airpods</span>
                            <HiOutlineCheckCircle style={{ display: active === 'Airpods' ? 'block' : 'none'}}/> 
                    </li> */}
                </ul>
            </div>

            <ButtonFilled type='button' onClick={()=>setOpenModal(true)}>
                Load iPhones
            </ButtonFilled>
        </SideFilter>
        <>
            
        </>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>

        </Modal>
    </Container>
  )
}

export default Home