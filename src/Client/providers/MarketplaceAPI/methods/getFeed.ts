import Axios from "axios";

export default async function getFeed(){
    console.log('Get feed');

    // @ts-ignore
    const {endpoint} = this;

    const url = `${endpoint.api_url}/feed`;

    return Axios.get(url);
};
