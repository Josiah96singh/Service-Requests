import { 
REQUESTS_LOADING,
REQUESTS_OK,
REQUESTS_X,
ADDED_REQUEST_OK,
ADDED_REQUEST_X 
} from './types'
import fireMethods from '../util/firebaseInit'

export const getRequestsData = () => dispatch => {
    dispatch({type: REQUESTS_LOADING});
    fireMethods.dataBase.collection('serviceRequests').get()
    .then(snapshot => {
        const data = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        dispatch({type: REQUESTS_OK, payload: data})
    })
    .catch(err => {
        dispatch({type: REQUESTS_X})
    })
}

export const createRequest = (requestData) => dispatch => {
    fireMethods.dataBase.collection('serviceRequests').add(requestData)
    .then(dispatch({type: ADDED_REQUEST_OK}))
    .catch(err => {
        dispatch({type: ADDED_REQUEST_X})
    })
}
