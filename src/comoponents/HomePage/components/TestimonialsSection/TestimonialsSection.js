    import React from 'react';
    import './TestimonialsSection.css';
    import Fade from 'react-reveal/Fade';
    import CustomerReview from './components/CustomerReview/CustomerReview';
    const TestimonialsSection = () => {
    return (
        <>
        <div className='Testimonials'>
        <Fade bottom>
        <h1 className='testimonials-title'>TESTIMONIALS</h1>
        </Fade>
        <p className='testimonials-description'>What Our Customers Are Saying</p>
        </div>
        <CustomerReview/>
        </>
    );
    }

    export default TestimonialsSection;
