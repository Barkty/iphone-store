import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 120px;
    background: #FFFFFF;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px){
        height: 71px;
    }
`

export const UploadContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(41, 41, 41, 0.22);
    border-radius: 5px;
    width: 483px;
    height: 466px;
    padding: 75px 49px;

    .upload_form {
        width: 100%;
        height: 325px;
        border: 1px solid #BDBDBD;
        border-radius: 4px;
        padding: 16px 24px;

        .upload_title { 
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            color: #092C4C;
            text-align: left;
            margin-bottom: 10px;
        }

        form {

            .upload_area {
                width: 100%;
                height: 175px;
                border: 1px dashed #828282;
                border-radius: 4px; 
                
                svg {
                    font-size: 96px;
                    color: #828282; 
                    cursor: pointer;
                }

                .upload_text {
                    font-family: 'Manrope', sans-serif;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 19px;
                    text-align: center;
                    color: #191D23;
                    text-align: center;
                }

                .upload_browse {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    color: #092C4C;
                    cursor: pointer;
                }

                .upload_filename_wrap {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0px;
                    gap: 12px;
                    width: 191px;
                    height: 30px;
                    margin-top: 21%;
                    margin-left: 21%;

                    .upload_filename {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 22px;
                        color: #000000;
                        position: relative;
                        top: 20px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px){
        width: 100vw;

        .upload_form {

            form {

                .upload_area {

                    svg {
                        font-size: 83px;
                    }
                }
            }
        }
    }
`

export const UploadButtonContainer = styled.div`
    width: 100%;
    height: 55.19px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20pt;
`

export const UploadButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 10px;
    width: 32px;
    height: 32px;
    background: #181F36;
    border-radius: 4px;

`