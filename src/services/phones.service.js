import API from 'utils/BackendAPI'

export const getGadgets = async (request, page, limit, search) => {

    try {
        
        const res = await API.get(`/request?request=${request}&page=${page}&limit=${limit}&search=${search}`)

        return res?.data

    } catch (e) {
        throw e?.response?.data
    }
}

export const uploadGadgets = async (gadgets) => {

    try {
        const res = await API.post(`/request`, gadgets, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })

        return res?.data
        
    } catch (e) {

        throw e?.response?.data
    }
}