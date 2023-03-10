import styled from "styled-components";


export const Container = styled.div`
    background: #FFFFFF;

    .mobile_ {
        width: 50%;
        position: relative;
        float: right;
        display: flex;
        align-items: flex-start;
        position: relative;
        top: -3rem;
        justify-content: space-around;

    }

    @media screen and (min-width: 769px){

        .mobile_ {
            display: none;
        }
    }
`

export const ButtonMobile = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 122px;
    height: 32px;
    background: #FF5C00;
    border-radius: 2px;

    border: none;
    outline: none;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #E9EEFF;
`

export const Hero = styled.div`
    width: 100%;
    padding: 0 6%;

    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 11%;
        width: 100%;
        height: 290px;

        .hero__introduction {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 23px;

            flex: none;
            order: 0;
            flex-grow: 0;
            width: 50%;

            h1 {
                font-style: normal;
                font-weight: 400;
                font-size: 36px;
                line-height: 44px;
                color: #181F36;
                flex: none;
                order: 0;
                flex-grow: 0;
            }
            .search_bar {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 0px;
                gap: 18px;

                width: 100%;
                height: 53px;
                flex: none;
                order: 1;
                flex-grow: 0;
            }
        }

        .hero__image {
            flex: none;
            order: 1;
            flex-grow: 0;
            margin-top: 1.9rem;
            min-width: 20%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 768px){
        padding: 0 1rem;

        .hero {
            gap: 0px;

            .hero__introduction {

                h1 {
                    font-size: 24px;
                    line-height: 29px;
                }

                .search_bar {
                    width: 253px;
                    height: 33px;
                }
            }

            .hero__image {
                width: 125px;
                height: 79px;
                margin-top: -3rem;
                margin-left: -3rem;
            }
        }
    }
`

export const InputContainer = styled.input`
    width: 412px;
    height: 53px;
    background: #FFFFFF;
    border: 2px solid #8E8E8E;
    border-radius: 3px;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #A6A6A6;
    padding-left: 22px;

    @media screen and (max-width: 768px){
        width: 148.5px;
        height: 33px;

        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
    }
`

export const ButtonDark = styled.button`
    width: 149px;
    height: 53px;
    background: #181F36;
    cursor: pointer;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #F4F4F4;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        width: 92.5px;
        height: 33px;

        font-size: 13px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.05em;
    }
`

export const ButtonFilled = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    gap: 10px;
    width: 258px;
    height: 50px;
    background: #FF5C00;
    border-radius: 2px;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 39px;
    color: #E9EEFF;
    border: none;
    outline: none;
    margin-bottom: 34px;
    white-space: nowrap;
    margin-left: 100px;
`
export const StoreContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const SideFilter = styled.div`
    width: 493px;
    height: auto;
    background: #181F36;
    border: 1px solid #181F36;
    padding: 27px 0 0 0;
    display: block;

    .category {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #E9EEFF;
        margin-left: 100px;
        margin-bottom: 0.45rem;
    }

    .category__list__container {
        /* padding: 0 200px 0 0; */
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: inherit;

        .category__list {
            width: 100%;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            background-color: inherit;

            li {
                display: flex;
                column-gap: 35px;
                width: 100%;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #E9EEFF;
                padding-left: 100px;
                cursor: pointer;
                margin-bottom: 23px;

                span {
                    position: relative;
                    left: 0;
                }
            }
        }
    }

    .range_slider {
        width: 100%;
        padding: 0 2rem 0 8rem;
        position: relative;
        left: -2rem;
        margin-bottom: 3rem;

        .range_container {
            width: 100%;
            display: flex;
            align-items: row;
            justify-content: space-around;
            position: relative;
            top: 1.2rem;

            .amount__card {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 10px;
                gap: 10px;
                width: 75px;
                height: 15px;
                background: #8AA4FE;
                border-radius: 5px 0px 0px 5px;

                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 15px;
                    color: #181F36;
                }
            }
            .amount__card__2 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 10px;
                gap: 10px;
                width: 75px;
                height: 15px;
                background: #8AA4FE;
                border-radius: 0px 5px 5px 0px;

                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 15px;
                    color: #181F36;
                }
            }

            .amount__line {
                width: 14px;
                height: 0px;
                border: 1px solid #FFFFFF;
                position: relative;
                top: 5px;
            }
        }
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const PhoneWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    min-height: 587px;
    background: linear-gradient(0deg, #F1F6FD 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%);

    .phone__wrap {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        min-height: 587px;
        margin-bottom: 1rem;

        .skeleton__wrap {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;

            .skeleton_border {
                width: 30%;
                height: 253px;
                margin: 0 .5rem 1rem 0;
            }
        }
    }

    .pagination {
        width: 32%;
        position: relative;
        float: right;
        top: 0px;
        right: -65%;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px){

        .pagination {
            width: 100%;
            right: 0;
        }
    }

`

export const PhoneCard = styled.div`
    width: 30%;
    height: 283px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 9px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 0 .5rem 1rem 0;

    .image__container {
        width: 100%;
        height: 123px;
        background: #181F36;
        border-radius: 10px 10px 0px 0px;

        img {
            width: 100%;
            object-fit: contain;
            height: 100%;
        }
    }

    .gadget__info {
        width: 100%;
        padding: 9px 7px;

        .gadget {
            padding: 0px;
            width: 100%;
            height: 121px;

            .gadget__name {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
                color: #2F2C4A;
                text-align: left;
            }

            .gadget__price {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 30px;
                color: #3C3C3C;
                margin-bottom: 0.2rem;
            }

            .gadget__units {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #3C3C3C;
            }

            .gadget__cta {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 10px;
            }
        }
    }

    @media screen and (max-width: 768px){
        width: 45%;
    }
`

export const ButtonCTA = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 80px;
    gap: 10px;
    width: 122px;
    height: 25px;
    background: #181F36;
    border-radius: 2px;
    cursor: pointer;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #A6A6A6;

    @media screen and (max-width: 768px){
        width: 85px;
        padding: 5px 10px;
    }
`

export const ErrorMessage = styled.span`
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    letter-spacing: 2px;

`
export const StyledThumb = styled.div`
    height: 20px;
    line-height: 25px;
    width: 20px;
    text-align: center;
    background-color: #44589C;
    border-color: #fff;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    margin-top: -5px;
`;

export const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#8AA4FE' : props.index === 1 ? '#44589C' : '#8AA4FE')};
    border-radius: 999px;
`;