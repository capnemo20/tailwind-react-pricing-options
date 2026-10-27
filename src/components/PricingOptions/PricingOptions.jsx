import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData);
    return (
        <div>
            <h2 className="text-5xl">Get Our Membership</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    pricingData.map(pricing=><PricingCard
                    pricing = {pricing}
                    key={pricing.id}
                    ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;