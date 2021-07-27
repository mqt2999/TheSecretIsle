import React, { useEffect, useState } from 'react';
import Choice from '../Choice';

export default function ChoiceBox() {
    return (
        <div>
            <div className="row">
                <Choice>True</Choice>
                <Choice>False</Choice>
            </div>
        </div>
    )
}