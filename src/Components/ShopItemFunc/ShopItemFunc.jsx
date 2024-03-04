import React from 'react'

export const ShopItemFunc = (props) => {
    const { good} = props;
    const { brand, title, description, descriptionFull, price, currency } = good;
  return (
    <div className='main-content'>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className='description'>{descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className='purchase-info'>
          <div className='price'>{currency}{price}</div>
          <button type='button'>{`ДОБАВИТЬ В КОРЗИНУ`}</button>
        </div>      
    </div>
  )
}
