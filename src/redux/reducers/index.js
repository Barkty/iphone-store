import * as type from "../action/types";

const initialState = {
    loading: false,
    error: null,
    gadgets: {},
}

const app = ( state = initialState, action ) => {

    switch (action.type) {
        case type.LOADING:
          return {
            ...state,
            loading: action.payload,
          };

        case type.ERROR:
            return {
                ...state,
                error: action.payload,
            };
        
        case type.GET_GADGETS:
            return {
                ...state,
                gadgets: action.payload
            }
        
        default:
            return { ...state };
    }
}

export default app