import React, { useState, useEffect } from "react";
import { Table, OpenOutsideIcon, Button} from '@fluentui/react-northstar';

export function FetchSamples(){
    const [samples, setSamples] = useState([]);
    console.log("FETCH SAMPLE");
    useEffect(() => {
        async function getSamplesList(samples) {
            const devxApi = 'https://gi21devxapi-devtest.azurewebsites.net/samples?org=LokiLabs&branchName=interns/feature/app-mode-sample-queries';

            const headers = {
            'Content-Type': 'application/json'
            };
            console.log("enetered the function");

            try {
                const response = await fetch(devxApi, headers);
                if (!response.ok) {
                    console.log("it didnt have a good response");
                    throw response;
            }
            const res = await response.json();
            var arr = [];
            console.log(res.teamsAppSampleQueries);
            for(let i = 0; i < res.teamsAppSampleQueries.length; i++){
                var query = {};
                query.key = res.teamsAppSampleQueries[i]["id"];
                query.items = [res.teamsAppSampleQueries[i]["method"], res.teamsAppSampleQueries[i]["humanName"], createFillIn(res.teamsAppSampleQueries[i]["requestUrl"])];
                arr.push(query);
            }
            console.log("Inside sampleQueries");
            console.log(arr);
            console.log(samples);
            setSamples(arr);
            } catch (error) {
                console.log("failed the try catch");
                console.log(error);
                return error;
            }
        }
        getSamplesList(samples);
        
    }, []);

    return (
        <Table rows = {samples} aria-label="sample queries" />
    );
}

function createFillIn(url){
    const deleteButton = () => <Button
        tabIndex={-1}
        icon={<OpenOutsideIcon className="button-icon" />}
        circular
        text
        iconOnly
        aria-label="delete"
        title="Delete request header"
    />;
    var obj = {content: deleteButton(), onClick:e => {
        console.log(url);
    }};
    return obj;
}


export default FetchSamples;