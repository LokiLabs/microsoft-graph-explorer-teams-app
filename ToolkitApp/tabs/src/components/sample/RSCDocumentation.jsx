import React, { useState, useEffect } from "react";
import { RSC_DOCUMENATION_URL } from '../../constants';
import { markdown } from './lib/useDrawdown';

export function RSCDocumentation() {
    const [rscDocs, setRSCDocs] = useState({});

    // Passing an empty array [] ensures this effect will run just once; otherwise, it will run after every render.
    useEffect(() => getRSCDocs(), []);

    const getRSCDocs = async () => {
        const response = await fetch(RSC_DOCUMENATION_URL);
        const blob = await response.blob();
        var text = await blob.text();
        var html = markdown(text);
        console.log(html);
        setRSCDocs(html);
    };
    return (
        <div dangerouslySetInnerHTML={{ __html: rscDocs }} />
    );
}
