import axios from 'axios';
import {createContext, useContext} from "react";

export const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  withCredentials: true,
  headers: {'X-Custom-Header': 'foobar'}
});

export const ReactNativeMetroContext = createContext({
  store: {},
  apiClient
});

export function useReactNativeMetroContext() {
  return useContext(ReactNativeMetroContext);
}
