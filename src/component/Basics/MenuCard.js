import React from 'react'
import logo from './logo-png.png';

const MenuCard = ({ menuData }) => {
  return (
    <>
        <div className='title-bar'>
            <img className='logo-img' src={logo} />
            <div className='title'>
                <p className='heading'><strong>PUZZLES</strong></p>
                <p className='tagline'>BRO CODE APPROVED</p>
            </div>
        </div>
        <section className='main-card--cointainer'>
        {menuData.map((curEle) => {
            const { id, name, category, image, description } = curEle;
            return(
                <>
                <div className='card-container' key={id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{id}</span>
                            <span className='card-type subtle'>{category}</span>
                            <h2 className='card-title'>{name}</h2>
                            <span className='card-description subtle'>
                                {description}
                            </span>
                            <div className='card-read'>More</div>
                        </div>
                        <img src={image} className='card-media' />
                        <span className='card-tag subtle'>Add item</span>
                    </div>
                </div>
            </>
            );
        })}
        </section>
    </>
  );
};

export default MenuCard