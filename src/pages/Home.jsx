import Navbar from 'components/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { ButtonCTA, ButtonDark, ButtonFilled, Container, Hero, InputContainer, PhoneCard, PhoneWrap, SideFilter, StoreContent } from './styles'
import hero from 'assets/hero_image.svg'
import { motion } from 'framer-motion'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Modal from 'components/modal/Modal'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { getGadgets } from 'services/phones.service'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { Pagination } from '@mui/material'

const Home = () => {
    const [active, setActive] = useState('all')
    const [storage, setStorage] = useState('all')
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const { gadgets } = useSelector((store) => store.app)

    const handleFail = (message) => {
        enqueueSnackbar(message, {
            variant: "error",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    };

    const fetchGadgets = async (request, page, limit) => {

        try {

            const res = await getGadgets(request, page, limit)
            console.log(res)
            dispatch({ type: 'GET_GADGETS', payload: res.data.result})

        } catch (e) {
            dispatch({type: 'ERROR', payload: e?.message})
            handleFail(e?.message)
        }
    }

    const handlePageChange = (e, value) => {
        setPage(value)
        fetchGadgets('', value, 10)
    }

    useEffect(() => {
        fetchGadgets('', page, 0)
    }, [page])

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
        <StoreContent>
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
                <h2 className='category'>Price Filter</h2>
                <div className='range_slider'>
                    <Slider min={0} max={200} 
                        railStyle={{ backgroundColor: '#8AA4FE'}} 
                        trackStyle={[{ backgroundColor: '#44589C' }]} 
                        handleStyle={[{ backgroundColor: '#44589C' }]}
                        count={3}/>
                        <div className='range_container'>
                            <div className='amount__card'>
                                <p>$300</p>
                            </div>
                            <div className='amount__line'></div>
                            <div className='amount__card__2'>
                                <p>$600</p>
                            </div>
                        </div>
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
            <PhoneWrap>
                <PhoneCard>
                    <div className='image__container'></div>
                    <div className='gadget__info'>
                        <div className='gadget'>
                            <p className='gadget__name'>DELL Latitude 3180</p>
                            <p className='gadget__price'>$3,000</p>
                            <p className='gadget__units'>200 units</p>

                            <div className='gadget__cta'>
                                <ButtonCTA>
                                    Buy
                                </ButtonCTA>
                            </div>
                        </div>
                    </div>
                </PhoneCard>
            </PhoneWrap>
        </StoreContent>
        <div className='pagination'>
            <Pagination count={data?.totalPages} page={page} variant="outlined" shape="rounded" color="primary" onChange={handlePageChange}/>
        </div>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>

        </Modal>
    </Container>
  )
}

export default Home