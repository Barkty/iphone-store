import styled from "styled-components";

export const ModalContainer = styled.div`
    display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background: rgb(165, 161, 161, 0.4);
`

export const ModalWrap = styled.div`
    width: auto;
    height: auto;
    border-radius: 20px;
    position: absolute;
    top: 51%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    text-align: center;

    .close__modal {
        position: relative;
        top: 0.5em;
        z-index: 1;
        float: right;
        right: 0.5em;
        color: grey;
        cursor: pointer;
    }
`

export const ModalContent = styled.div`
    height: auto;
    padding: 0;
    margin: 0;
    position: relative;
`