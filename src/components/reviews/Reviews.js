import React from 'react';

import useReviews from '../../hooks/useReviews';
import IndividualReview from '../individualreview/IndividualReview';

import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReviews();
  

    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">What Other Says About Us</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                     reviews.length === 0 ?
                     <img className="img-fluid w-25 rounded-3 mx-auto" src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" alt="" />
                     :
                    reviews.map(review => <IndividualReview
                        key={review._id}
                        review={review}
                    ></IndividualReview>)
                }
                </div>
                
                </div>
            </div>
  </div>
    )}     


export default Reviews;