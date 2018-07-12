import axios from 'axios';
import queryString from 'query-string';

export const getLabelList = () => axios.get('/labels');
export const createLabel = (title) => axios.post('labels',title)