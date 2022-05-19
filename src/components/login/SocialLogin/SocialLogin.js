import React from 'react';
// import google from '../../../images/social/google.png';
// import facebook from '../../../images/social/facebook.png';
// import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className=''>
            <div className='d-flex align-items-center'>
            
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary text-warning fs-3 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src='' alt="" />
                    <span className=''><i class="fa-brands fa-google"></i></span>
                </button>
                
               
            </div>
        </div>
    );
};

export default SocialLogin;