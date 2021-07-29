import React from "react";
import { RSC_LIST, items, RSC_NAME_DESCRIPTION } from './TabConstants';
import { Table } from '@fluentui/react-northstar';

export function RSCList() {

    const filterPermType = (permType, perm) => perm.includes(permType);

    const RSCRows = RSC_LIST
        .filter(perm => filterPermType("Group", perm))
        .map(perm => ({
            key: perm,
            items: [
                {
                    content: perm,
                    truncateContent: true
                },
                {
                    content: RSC_NAME_DESCRIPTION[perm],
                    truncateContent: true,
                }
            ]
        }));

    return (
        <Table variables={{
            cellContentOverflow: 'none',
        }}
            header={{ items }}
            rows={RSCRows}
            aria-label="RSC Table" />
    );
}

