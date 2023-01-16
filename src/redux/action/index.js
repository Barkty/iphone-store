import * as type from "./types";

export const setLoading = (loading) => (dispatch) => {
    dispatch({
      type: type.LOADING,
      payload: loading,
    });
};