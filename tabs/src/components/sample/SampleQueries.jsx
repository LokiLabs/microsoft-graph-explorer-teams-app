import React, { useState, useEffect } from "react";
import { OpenOutsideIcon, Table, Button} from '@fluentui/react-northstar';

export function FetchSamples(){
    const [samples, setSamples] = useState([]);
    useEffect(() => {
        async function getSamplesList(samples) {
        const devxApi = 'https://gi21devxapi-devtest.azurewebsites.net/samples?org=LokiLabs&branchName=interns/feature/app-mode-sample-queries';

        const headers = {
        'Content-Type': 'application/json'
        };
        console.log("enetered the function");

        try {
            console.log(devxApi);
            const response = await fetch(devxApi, headers);
            if (!response.ok) {
                console.log("it didnt have a good response");
                throw response;
        }
        const res = await response.json();
        var arr = [];
        console.log(res.sampleQueries); 
        for(let i = 0; i < res.sampleQueries.length; i++){
            var query = {};
            query.key = res.sampleQueries[i]["id"];
            query.items = [res.sampleQueries[i]["method"], res.sampleQueries[i]["humanName"]];
            arr.push(query);
        }
        console.log(arr);
        setSamples(arr);
        } catch (error) {
            console.log("failed the try catch");
            console.log(error);
            return error;
        }
    }
    getSamplesList(samples);
    console.log(samples);
    
}, []);

    return (
        <Table rows={samples} aria-label="sample queries" />
    );
}

function createFillIn(){
        const deleteButton = () => <Button
        tabIndex={-1}
        icon={<TrashCanIcon className="button-icon" />}
        circular
        text
        iconOnly
        aria-label="delete"
        title="Delete request header"
    />;
    const newHeaderValue = {
        key: headerCopy,
        items: [headerCopy, valueCopy, {
            content: deleteButton(),
            truncateContent: true,
            accessibility: gridCellWithFocusableElementBehavior,
            onClick: e => {
                deleteRow(headerCopy);
                e.stopPropagation();
            },
        }],
    };
}

export default FetchSamples;