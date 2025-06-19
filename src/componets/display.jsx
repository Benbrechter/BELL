import React from 'react';

const Display = () => {
    return (
        <div className='Display'>
            <img src="null" alt="this will be a large TV" className='tv' />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis sequi molestias in dicta repudiandae placeat deserunt perferendis eligendi, omnis optio, iusto mollitia accusamus sunt. Et suscipit quaerat quos possimus vitae?</p>
            <div className='buttons'>
               <button>left</button>
                <button>right</button> 
            </div>
            
        </div>
    );
};

export default Display;