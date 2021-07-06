import React, { useState, useEffect } from "react";
import { RSC_DOCUMENATION_URL } from './TabConstants';
import { markdown } from './lib/useDrawdown';

export function RSCDocumentation() {
    const [rscDocs, setRSCDocs] = useState({});

    // Passing an empty array [] ensures this effect will run just once; otherwise, it will run after every render.
    useEffect(() => getRSCDocs(), []);

    const getRSCDocs = async () => {
        const response = await fetch(RSC_DOCUMENATION_URL);
        const blob = await response.blob();
        var text = await blob.text();
        var lines = text.split('\n');
        var refinedText = ''
        for(var i = 0;i < lines.length;i++){
            // dead links in this section
            if(lines[i] === '## Enable RSC in your application'){
                i += 13;
            }
            // do not include the pictures 
            if(!lines[i].includes('.png')){
                console.log(i)
                refinedText += lines[i];
                if(i !== lines.length - 1){
                    refinedText += '\n';
                }
            }
            else{
                // if there is a picture in the middle of a list
                if(0 < i < lines.length - 1 && lines[i-1] === "" && lines[i+1] ===""){
                    // remove the previous empty line
                    refinedText = refinedText.slice(0, -1);
                    // skip the next empty line
                    i += 1
                }
            }

        }
        var html = markdown(refinedText);
        setRSCDocs(html);
    };
    return (
        <div dangerouslySetInnerHTML={{ __html: rscDocs }} />
    );
}
