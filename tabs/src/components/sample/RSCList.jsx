import React from "react";
import "./RSCList.css";
import { RSC_LIST } from './TabConstants';
import { Table } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';

export function RSCList() {

    const filterPermType = (permType, perm) => perm.includes(permType);
    const { t } = useTranslation();

    const RSCRows = RSC_LIST
        .filter(perm => filterPermType("Group", perm))
        .map(perm => ({ key: perm, items: [perm, t("RSC Descriptions." + perm)], }));

    const items = [
        t('RSC Headers.Permissions'),
        t('RSC Headers.Descriptions')
    ]

    return (
        <Table header={{ items }} rows={RSCRows} aria-label="RSC Table" />
    );
}

