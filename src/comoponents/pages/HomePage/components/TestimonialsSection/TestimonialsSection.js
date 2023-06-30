    import React from 'react';
    import './TestimonialsSection.css';
    import CustomerReview from './components/CustomerReview/CustomerReview';
    const TestimonialsSection = () => {
    return (
        <>
        <div className='Testimonials'>
        <h1 className='testimonials-title'>TESTIMONIALS</h1>
        <p className='testimonials-description'>What Our Customers Are Saying</p>
        </div>
        <CustomerReview/>
        </>
    );
    }

    export default TestimonialsSection;
