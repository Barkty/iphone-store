import API from 'utils/BackendAPI'

export const getGadgets = async (request, page, limit) => {

    try {
        
        const res = await API.get(`/request?request=${request}&page=${page}&limit=${limit}`)

        return res?.data
        
    } catch (e) {
        throw e?.response?.data
    }
}