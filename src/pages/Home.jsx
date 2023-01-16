import Navbar from 'components/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { ButtonCTA, ButtonDark, ButtonFilled, ButtonMobile, Container, ErrorMessage, Hero, 
    InputContainer, PhoneCard, PhoneWrap, SideFilter, StoreContent } from './styles'
import hero from 'assets/hero_image.svg'
import { motion } from 'framer-motion'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from 'components/modal/Modal'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { getGadgets } from 'services/phones.service'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { Pagination, Skeleton, Stack } from '@mui/material'
import UploadModal from 'components/upload/UploadModal'
import iphone5 from 'assets/5.png'
import iphoneX from 'assets/X.png'
import iphone5c from 'assets/5C.png'
import iphone5S from 'assets/5S.png'
import iphone11pro from 'assets/11-pro.png'
import iphone6P from 'assets/iphone_6_plus.png'
import iphone7P from 'assets/iphone_7_plus.png'
import iphone8P from 'assets/iphone_8_plus.png'
import iphone8 from 'assets/iphone_8.png'
import iphone6SP from 'assets/iphone_6s_plus.png'
import iphone6 from 'assets/iphone_6.png'
import iphone7 from 'assets/iphone_7.png'
import iphone11ProMax from 'assets/iphone_11_pro_max.png'
import iphone11 from 'assets/iphone_11.png'
import iphone6S from 'assets/iphone_6s.png'
import iphoneSE from 'assets/iphone_se.png'
import iphoneXR from 'assets/iphone_xr.png'
import iphoneXS from 'assets/iphone_xs.png'
import iphoneXSMax from 'assets/iphone_xs_max.png'
import { BsFillFilterCircleFill } from 'react-icons/bs'

const Home = () => {
    const [active, setActive] = useState('all')
    const [storage, setStorage] = useState('all')
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [openModal, setOpenModal] = useState(false)
    const [search, setSearch] =useState('')
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const { gadgets } = useSelector((store) => store.app)
    const images = [iphone5, iphone5c, iphone5S, iphone11pro, iphone6P, iphone6, iphone6SP, 
        iphone6S, iphone8P, iphone7P, iphone7, iphone8, iphone11ProMax, iphone11, iphoneX, iphoneXR, iphoneXS, iphoneXSMax, iphoneSE]

    const handleFail = (message) => {
        enqueueSnackbar(message, {
            variant: "error",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    };

    const fetchGadgets = async (request, page, limit, search) => {

        try {

            const res = await getGadgets(request, page, limit, search)
            dispatch({ type: 'GET_GADGETS', payload: res.data.docs})
            setData(res.data)

        } catch (e) {
            dispatch({type: 'ERROR', payload: e?.message})
            handleFail(e?.message)
        }
    }

    const handlePageChange = (e, value) => {
        setPage(value)
        fetchGadgets('', value, 12, search)
    }

    useEffect(() => {
        fetchGadgets('', page, 12, search)
    }, [page, search])

    let num = 0

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
                            <InputContainer type='text' placeholder='Search products' value={search} onChange={(e) => setSearch(e.target.value)}/>
                            <ButtonDark type='button' onClick={()=>{ fetchGadgets('buy', page, 12, search)}}>
                                Search
                            </ButtonDark>
                        </div>
                    </div>
                    <div className='hero__image'>
                        <img src={hero} alt='Hero Laptop'/>
                    </div>
                </div>
            </Hero>
            <div className='mobile_'>
                <ButtonMobile typpe='button' onClick={()=>setOpenModal(true)}>
                   <FaPlusCircle/> Load iPhone
                </ButtonMobile>
                <BsFillFilterCircleFill color='#FF5C00' size={28}/>
            </div>
        </motion.div>
        <StoreContent>
            <SideFilter>
                <h2 className='category'>Category</h2>
                <div className='category__list__container'>
                    <ul className='category__list'>
                        <li onClick={()=>{setActive('all'); fetchGadgets('buy', page, 12, search)}} 
                            style={{ backgroundColor: active === 'all' ? '#25315B' : 'inherit'}}>
                                <span>All</span>
                                <HiOutlineCheckCircle style={{ display: active === 'all' ? 'block' : 'none'}}/> 
                        </li>
                        <li onClick={()=>{setActive('iPhone'); fetchGadgets('sell', page, 12, search)}} 
                            style={{ backgroundColor: active === 'iPhone' ? '#25315B' : 'inherit'}}>
                                <span>Sell</span>
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
                        <li onClick={()=>{setStorage('all'); fetchGadgets('buy', page, 12, ` ,${search}, `)}} 
                            style={{ backgroundColor: storage === 'all' ? '#25315B' : 'inherit'}}>
                                <span>All</span>
                                <HiOutlineCheckCircle style={{ display: storage === 'all' ? 'block' : 'none'}}/> 
                        </li>
                        <li onClick={()=>{setStorage('32GB'); fetchGadgets('buy', page, 12, ` ,${search}, ${storage}`)}} 
                            style={{ backgroundColor: storage === '32GB' ? '#25315B' : 'inherit'}}>
                                <span>32GB</span>
                                <HiOutlineCheckCircle style={{ display: storage === '32GB' ? 'block' : 'none'}}/> 
                        </li>
                        <li onClick={()=>{setStorage('64GB'); fetchGadgets('buy', page, 12, ` ,${search}, ${storage}`)}} 
                            style={{ backgroundColor: storage === '64GB' ? '#25315B' : 'inherit'}}>
                                <span>64GB</span>
                                <HiOutlineCheckCircle style={{ display: storage === '64GB' ? 'block' : 'none'}}/> 
                        </li>
                        <li onClick={()=>{setStorage('128GB'); fetchGadgets('buy', page, 12, ` ,${search}, ${storage}`)}} 
                            style={{ backgroundColor: storage === '128GB' ? '#25315B' : 'inherit'}}>
                                <span>128GB</span>
                                <HiOutlineCheckCircle style={{ display: active === '128GB' ? 'block' : 'none'}}/> 
                        </li>
                        <li onClick={()=>{setStorage('256GB'); fetchGadgets('buy', page, 12, ` ,${search}, ${storage}`)}} 
                            style={{ backgroundColor: storage === '256GB' ? '#25315B' : 'inherit'}}>
                                <span>256GB</span>
                                <HiOutlineCheckCircle style={{ display: storage === '256GB' ? 'block' : 'none'}}/> 
                        </li>
                        <li onClick={()=>{setStorage('512GB'); fetchGadgets('buy', page, 12, ` ,${search}, ${storage}`)}} 
                            style={{ backgroundColor: storage === '512GB' ? '#25315B' : 'inherit'}}>
                                <span>512GB</span>
                                <HiOutlineCheckCircle style={{ display: storage === '512GB' ? 'block' : 'none'}}/> 
                        </li>
                    </ul>
                </div>

                <ButtonFilled type='button' onClick={()=>setOpenModal(true)}>
                    Load iPhones
                </ButtonFilled>
            </SideFilter>
            <PhoneWrap>
                <div className='phone__wrap'>
                    {data?.docs?.length === 0 && (
                        <ErrorMessage>
                            There is no gadget with `{search}` found
                        </ErrorMessage>
                    )}
                    <div className='skeleton__wrap'>
                        {gadgets.length === 0 && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                            <div className='skeleton_border' key={num}>
                                <Stack spacing={2} width='100%' height='253px' >
                                    <Skeleton variant="rounded" width='100%' height={123} sx={{backgroundColor: 'grey', marginLeft: '1%'}}/>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: 'grey' }}/>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: 'grey'}}/>
                                </Stack>
                            </div>
                        ))}
                    </div>
                    {gadgets?.length > 0 && gadgets?.map(gadget => (

                        <PhoneCard key={gadget?._id}>
                            <div className='image__container'>
                                <img src={images[num++]} alt='Gadget Image'/>
                            </div>
                            <div className='gadget__info'>
                                <div className='gadget'>
                                    <p className='gadget__name'>{gadget?.name}</p>
                                    <p className='gadget__name'>{gadget?.storage}</p>
                                    <p className='gadget__price'>${gadget?.price}</p>
                                    <p className='gadget__units'>{gadget?.status} {gadget?.condition}</p>
        
                                    <div className='gadget__cta'>
                                        <ButtonCTA>
                                            Buy
                                        </ButtonCTA>
                                    </div>
                                </div>
                            </div>
                        </PhoneCard>
                    ))}
                </div>
                <div className='pagination'>
                    <Pagination count={data?.totalPages} page={page} variant="outlined" shape="rounded" color="primary" onChange={handlePageChange}/>
                </div>
            </PhoneWrap>
        </StoreContent>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <UploadModal fetchRequest={fetchGadgets}/>
        </Modal>
    </Container>
  )
}

export default Home