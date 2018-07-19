import axios from 'axios';

export const getLabelList = () => axios.get('/labels');
export const enrollNewLabel = (title) => axios.post('/labels',{title})
export const deleteLabel = (id) => axios.delete(`/labels/${id}`)
export const editLabel = (id,title) => axios.put(`/labels/${id}`,{title})
export const getAllMemoList = () => axios.get('/memos')
export const createMemo = (title,content) => axios.post('/memos',{title,content})
export const addLabelToMemo = (labelId,memoIds) => axios.post(`/labels/${labelId}/memos`,{memoIds})
export const deleteMemo = (memoId) => axios.delete(`/memos/${memoId}`)
export const editMemo = (title, content, memoId) => axios.put(`memos/${memoId}`,{title,content})