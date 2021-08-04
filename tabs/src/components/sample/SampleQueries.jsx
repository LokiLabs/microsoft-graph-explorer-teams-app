import React, { useState, useEffect } from "react";
import { Table} from '@fluentui/react-northstar';

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
            for(let i = 0; i < res.sampleQueries.length; i++){
                var query = {};
                query.key = res.sampleQueries[i]["id"];
                query.items = [res.sampleQueries[i]["method"], res.sampleQueries[i]["humanName"]];
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


export default FetchSamples;