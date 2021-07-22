import React from "react";
import { useTranslation } from "react-i18next";
import "./RSCList.css";
import { RSC_LIST } from './TabConstants';

export function RSCList(props) {
    const RSCTableItems = RSC_LIST.map((item) => <tr key={item}><td>{item}</td></tr>);
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('rsc-list.title')}</h1>
            <table id='RSCTable'>
                <tbody>
                    {RSCTableItems}
                </tbody>
            </table>
        </div>
    );
}

