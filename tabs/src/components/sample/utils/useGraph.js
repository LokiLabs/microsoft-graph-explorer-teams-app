import { DEVX_API_URL, requestTypes } from "../TabConstants";

export const makeGraphCall = async (
    requestType,
    requestHeaders,
    queryParameters,
    graphVersion,
    requestBody) => {
    const url = DEVX_API_URL + "/" + graphVersion + queryParameters;
    const cleanedHeaders = {};

    console.log(url);

    for (const header of requestHeaders) {
        cleanedHeaders[header.items[0]] = header.items[1];
    }

    let options = {
        method: requestType,
        headers: cleanedHeaders,
    };

    if (requestType !== requestTypes.GET) {
        options.body = requestBody;
    }

    return await fetch(url, options);
};
