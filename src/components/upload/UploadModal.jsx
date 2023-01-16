import { CloudUploadOutlined } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { UploadButton, UploadButtonContainer, UploadContainer } from 'components/styles';
import { useSnackbar } from 'notistack';
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsFileEarmarkExcelFill, BsPlus } from 'react-icons/bs';
import  useFileUpload  from 'react-use-file-upload';
import { uploadGadgets } from 'services/phones.service';
import PropTypes from 'prop-types'

const UploadModal = ({ fetchRequest }) => {

  const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const { loading } = useSelector((store) => store.app)

    const handleSuccess = (message) => {
        enqueueSnackbar(message, {
            variant: "success",
            anchorOrigin: {
            vertical: "top",
            horizontal: "right",
            },
        });
    };

    const handleFail = (message) => {
        enqueueSnackbar(message, {
            variant: "error",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    };
    const {
        files,
        fileNames,
        // fileTypes,
        handleDragDropEvent,
        clearAllFiles,
        // createFormData,
        setFiles,
        // removeFile,
    } = useFileUpload();

    const inputRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOADING', payload: true})

        let data = {
            file: files[0]
        }
        try {
            const res = await uploadGadgets(data)

            if(res.success) {
                dispatch({ type: 'LOADING', payload: false})
                handleSuccess(res.message)
                clearAllFiles()
                await fetchRequest()
            }

        } catch (e) {
            dispatch({type: 'ERROR', payload: e?.message})
            handleFail(e?.message)
        }
    }

  return (
    <UploadContainer>
        <div className='upload_form'>
            <p className='upload_title'>Upload Gadgets</p>
            <form onSubmit={handleSubmit}>
                <div className='upload_area' 
                    onDragEnter={handleDragDropEvent}
                    onDragOver={handleDragDropEvent}
                    onDrop={(e) => {
                        handleDragDropEvent(e);
                        setFiles(e, 'a');
                    }}
                >
                    {fileNames.length === 0 ? (
                        <>
                            <CloudUploadOutlined />
                            <input
                                ref={inputRef}
                                type="file"
                                name='file'
                                style={{ display: 'none' }}
                                onChange={(e) => {
                                    setFiles(e, 'a');
                                    inputRef.current.value = null;
                                }}
                            />
        
                            <p className='upload_text'>Drag n Drop here</p>
                            <p className='upload_text'>Or</p>
                            <p className='upload_browse' onClick={() => inputRef.current.click()}>Browse</p>
                        </>
                    ) : (
                        <div className='upload_filename_wrap'>
                            <BsFileEarmarkExcelFill color='green' size={30}/>
                            <span className='upload_filename'>{fileNames[0]}</span>

                        </div>
                    )}
                </div>
                <UploadButtonContainer>
                    <UploadButton disabled={fileNames.length === 0} type='submit'>
                        {loading ? (<CircularProgress color="inherit" />) : <BsPlus size={10} color='#FFFFFF'/>}
                    </UploadButton>
                </UploadButtonContainer>
            </form>
        </div>
    </UploadContainer>

  )
}

export default UploadModal

UploadModal.propTypes = {
  fetchRequest: PropTypes.func
}