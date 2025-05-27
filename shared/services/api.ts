import axios from "axios";
import { API_BASE_URL } from '@/shared/constants';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
