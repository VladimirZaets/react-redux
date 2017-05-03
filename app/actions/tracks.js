var data = [
    {
        id: 1,
        name: 'Enter sandman'
    },
    {
        id: 2,
        name: 'Helcome home'
    },
    {
        id: 3,
        name: 'I not afraid'
    },
    {
        id: 4,
        name: 'Lose your self'
    },
    {
        id: 5,
        name: 'The way i am'
    },
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: data})
    }, 2000);
};