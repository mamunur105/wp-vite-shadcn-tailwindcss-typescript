/*
 * Import local dependencies
 */
import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

/**
 * WordPress localized parameters.
 * This is usually printed in the page using wp_localize_script().
 */
declare const wpvsttParams: {
    restApiUrl: string;
    rest_nonce: string;
};

/**
 * Base URL for your REST API.
 */
const apiBaseUrl: string = `${wpvsttParams.restApiUrl}wpvstt/v1/api`;

/**
 * Create an Axios instance configured for the WordPress REST API.
 */
const Api: AxiosInstance = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'X-WP-Nonce': wpvsttParams.rest_nonce,
    },
});

/**
 * Type for the update options payload.
 * (Adjust fields based on your actual API structure.)
 */
export interface UpdateOptionsParams {
    [key: string]: any;
}

/**
 * Update plugin options.
 * @param params - Key-value object of options to update.
 * @returns AxiosResponse from REST API.
 */
export const updateOptions = async (
    params: UpdateOptionsParams
): Promise<AxiosResponse<any>> => {
    return await Api.post('/updateOptions', params);
};

/**
 * Get plugin options.
 * @returns Parsed options object from REST API.
 */
export const getOptions = async (): Promise<Record<string, any>> => {
    const response = await Api.get('/getOptions');
    try {
        return response?.data || [];
    } catch (err) {
        return {};
    }
};

/**
 * Get the plugin list.
 * @returns AxiosResponse containing plugin list.
 */
export const getPluginList = async (): Promise<AxiosResponse<any>> => {
    return await Api.get('/getPluginList');
};