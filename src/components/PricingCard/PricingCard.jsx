import React from 'react';
import "./PricingCard.css"
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features, currency} = pricing;
    return (
        <div className="border bg-cyan-800 rounded-3xl m-2 p-1">
            {/* card header */}
            <div className="p-2">
                <h1 className="text-5xl">{name}</h1>
                <h4 className="text-2xl">{currency}{price}</h4>
            </div>
            {/* card body */}
            <div className="bg-amber-600 rounded-lg p-4 mt-4 mb-2">
                <p>{description}</p>
                {
                    features.map((feature, index)=><PricingFeature 
                    feature={feature}
                    key={index}
                    ></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;