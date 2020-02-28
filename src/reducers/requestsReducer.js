import {
    REQUESTS_LOADING,
    REQUESTS_OK,
    REQUESTS_X
} from '../actions/types'

const initialState = {
    requests: [],
    loading: false
  };

  export default function(state = initialState, action) {
      switch(action.type) {
          case REQUESTS_LOADING:
              return {
                  ...state,
                  loading: true,
              };
              case REQUESTS_OK:
                  return {
                    ...state,
                    requests: action.payload,
                    loading: false,
                  };
                  case REQUESTS_X:
                      return {
                          ...state,
                          loading: true,
                      };
                      default:
                          return state;
      }
  }