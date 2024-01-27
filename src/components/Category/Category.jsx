import React from 'react'
import './Category.scss';

const Category = ({handleCategoryClick, businessActive, personalActive}) => {

    
    return (
        <div className='category'>
            <h2 className="category__title">Pick a category</h2>
            <div className="category__items">
                <div className="category__item-container category__item-business-container" onClick={() => handleCategoryClick('business')}>
                    <div className={`category__item category__item-business ${businessActive ? 'active' : ''}`} onClick={() => handleCategoryClick('business')}></div>
                    <p className="category__pick">Business</p>
                </div>
                <div className="category__item-container category__item-personal-container" onClick={() => handleCategoryClick('personal')}>
                    <div className={`category__item category__item-personal ${personalActive ? 'active' : ''}`} onClick={() => handleCategoryClick('personal')}></div>
                    <p className="category__pick">Personal</p>
                </div>
            </div>
        </div>
    )
}

export default Category
