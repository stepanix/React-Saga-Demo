import axios from 'axios';
import { BASE_URL } from '../../../configs/environment.config';

export const listAccountTransactions = async (address: string) => {
    const endPoint = BASE_URL + `?module=account&action=txlist&address=${address}`;
    let res = await axios.get(endPoint);
    return res.data;
};