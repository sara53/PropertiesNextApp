'use client'
import ClipLoader from 'react-spinners/ClipLoader'
const Loading = () => {
    const override = {
        displat: 'block',
        margin: '100px auto'
    }
    return (
        <ClipLoader color='#3b82f6' cssOverride={override} size={150} aria-label='Loading Spinner' />
    );
}

export default Loading;