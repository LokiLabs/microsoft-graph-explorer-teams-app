import React from "react";
import "./RSCList.css";
import { RSC_LIST } from './TabConstants';

export function RSCList() {
    const RSCTableItems = RSC_LIST.map((item) => <tr key={item}>{item}</tr>);

    return (
        <div>
            <h1>RSC permissions of this app</h1>
            <table id='RSCTable'>
                <tbody>
                    {RSCTableItems}
                </tbody>
            </table>
        </div>
    );
}
