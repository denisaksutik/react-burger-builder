import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad', key: '1' },
    { label: 'Bacon', type: 'bacon', key: '2' },
    { label: 'Cheese', type: 'cheese', key: '3' },
    { label: 'Meat', type: 'meat', key: '4' },
];

const buildControls = (porps) => (
    <div className="BuildControls">
        <p>Curretn Price: <strong>{porps.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.key}
                label={ctrl.label}
                added={() => porps.ingredientAdded(ctrl.type)}
                removed={() => porps.ingredientRemoved(ctrl.type)}
                disabled={porps.disabled[ctrl.type]} />
        ))}
        <button
            className="OrderButton"
            disabled={!porps.purchasable}
            onClick={porps.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;