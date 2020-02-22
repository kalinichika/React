import {
getPictures
} from './actions';

const fetchPictures = (dispatch, url) => {
    dispatch(getPictures());
    return fetch(url)
    .then(res=>res.json())
    .then(
        data => dispatch(),
        error => dispatch()
    )
}