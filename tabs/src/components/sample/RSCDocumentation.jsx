import React, { useState, useEffect } from "react";
import { RSC_DOCUMENTATION_URL } from './TabConstants';
import { markdown } from './lib/useDrawdown';

export function RSCDocumentation() {
    const [rscDocs, setRSCDocs] = useState({});

    // Passing an empty array [] ensures this effect will run just once; 
    // otherwise, it will run after every render.
    useEffect(() => async () => {
        const response = await fetch(RSC_DOCUMENTATION_URL);
        const blob = await response.blob();
        let text = await blob.text();
        let lines = text.split('\n');
        let refinedText = '';
        for(let i = 0;i < lines.length;i++){
            // dead links in this section
            if(lines[i] === '## Enable RSC in your application'){
                i++;
                do {
                    i++;
                } while(lines[i].trim().substring(0, 2) === '1.');
            }
            // do not include the pictures 
            if(!lines[i].includes('.png')){
                refinedText += lines[i];
                if(i !== lines.length - 1){
                    refinedText += '\n';
                }
            }
            else{
                // if there is a picture between two empty lines
                if(0 < i < lines.length - 1 && lines[i-1] === "" && lines[i+1] === ""){
                    // remove the previous empty line
                    refinedText = refinedText.slice(0, -1);
                    // skip the next empty line
                    i += 1;
                }
            }

        }
        let html = markdown(refinedText);
        setRSCDocs(html);
    }, []);
    return (
        <div dangerouslySetInnerHTML={{ __html: rscDocs }} />
    );
}
