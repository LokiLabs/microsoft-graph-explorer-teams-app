import PropTypes from 'prop-types';
import React from 'react';
import { ChevronDownIcon, ChevronEndIcon, Header, Flex } from '@fluentui/react-northstar';
import { useTranslation } from 'react-i18next';


export const Section = (props) => {
    const { t } = useTranslation();

    const isShow = props.isShow;
    const component = props.component;
    const toggleShow = props.toggleShow;
    const translationString = props.translationString;
    const idString = props.idString;

    return (
        <>
            <Flex className="main-section" gap="gap.small" onClick={() => toggleShow(!isShow)}>
                {isShow ? <ChevronDownIcon className="chevron" /> : <ChevronEndIcon className="chevron" />}
                <Header id={idString} className="pointer-header" as="h2" content={t(translationString)} />
            </Flex>
            {isShow && component}
        </>
    );
};

Section.propTypes = {
    isShow: PropTypes.bool,
    component: PropTypes.any,
    toggleShow: PropTypes.func,
    translationString: PropTypes.string,
    idString: PropTypes.string
};
