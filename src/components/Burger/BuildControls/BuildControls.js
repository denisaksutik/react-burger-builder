import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (porps) => (
    <div className="BuildControls">
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.key}
                label={ctrl.label}
                added={() => porps.ingredientAdded(ctrl.type)}
                removed={() => porps.ingredientRemoved(ctrl.type)}
                disabled={porps.disabled[ctrl.type]} />
        ))}
    </div>
);

export default buildControls;