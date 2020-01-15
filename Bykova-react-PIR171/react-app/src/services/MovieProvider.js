import axios from 'axios';

/**
 * API key for passing auth
 */
export const API_KEY = '1e5b191c30272d134c4aa749823cf24b';

/**
 * MovieDb API string
 */
export const API_BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Object with available API methods in fkng-frnt app to sending to MovieDb API
 */
export const AVAILABLE_API_METHODS = {
    getPopular: '/movie/popular',
    getDetails: '/movie'
};

/**
 * Movie provider for getting data for using it in app
 */
export class MovieProvider {
    /**
     * Method for getting popular movies
     */
    getPopularMovies() {
        const requestSettings = {
            method: 'GET',
            baseURL: API_BASE_URL,
            url: AVAILABLE_API_METHODS.getPopular,
            params: {
                api_key: API_KEY
            }
        };

        return axios(requestSettings);
    }

    /**
     * Method for getting movie details
     * @param movieId requesting movie id
     */
    getMovieDetails(movieId) {
        if (!movieId) {
            return Promise.reject();
        }

        const requestSettings = {
            method: 'GET',
            baseURL: API_BASE_URL,
            url: AVAILABLE_API_METHODS.getDetails + `/${movieId}`,
            params: {
                api_key: API_KEY
            }
        };

        return axios(requestSettings);
    }
}