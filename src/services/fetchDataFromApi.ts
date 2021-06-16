import { KYC } from '../interfaces/kycInterface';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function fetchDataFromAPI(body: KYC): Promise<any> {
    try {
        const apiKey = process.env.APIKEY;
        const url = 'https://australia-southeast1-reporting-290bc.cloudfunctions.net/driverlicence';
        const respone = await axios.post(url, body, {
            headers: { Authorization: `Bearer ${apiKey}` },
        });
        return respone.data;
    } catch (error) {
        return error;
    }
}