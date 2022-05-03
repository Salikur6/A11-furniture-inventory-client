import React from 'react';

const About = () => {
    return (
        <div className='bg-dark text-white'>
            <div className='container'>
                <div className='my-4 pt-5'>
                    <div className='text-center'>
                        <h2 className='fw-bold'>About</h2>
                        <p className='fw-bold'> The ‘game-changer’ in Bangladesh’s furniture industry.</p>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div style={{ height: '2px', width: '20%' }} className='bg-danger'>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div style={{ height: '2px', width: '15%' }} className='bg-danger my-1'>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div style={{ height: '2px', width: '10%' }} className='bg-danger'>
                        </div>
                    </div>
                </div>

                <div className='w-75 mx-auto pt-4 pb-5'>
                    <p className='lh-lg'>Through our world-class furniture werehouse, buzzing community, and step-by-step growing. We've helped thousands of amazing people by giving our furniture stokes. We believe creativity as one of the major forces of progress. People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilization and continues today in some households/campsites. Archaeological research shows that from around 30,000 years ago, people started to construct and carve their own furniture, using wood, stone, and animal bones. </p>
                </div>
            </div>
        </div>
    );
};

export default About;