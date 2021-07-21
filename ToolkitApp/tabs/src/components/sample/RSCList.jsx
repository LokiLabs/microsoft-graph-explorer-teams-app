import React from "react";
import "./RSCList.css";
import { RSC_LIST } from './TabConstants';
import { Table } from '@fluentui/react-northstar'

export function RSCList() {
    const header = {
        items: ['Permissions', 'Descriptions'],
    }

    const filterPermType = (permType, perm) => perm.includes(permType);

    const RSCRows = RSC_LIST
        .filter(perm => filterPermType("Chat", perm))
        .map(perm => ({ key: perm, items: [perm, 'Description'], }));

    return (
        <Table header={header} rows={RSCRows} aria-label="RSC Table" />
    );
}
