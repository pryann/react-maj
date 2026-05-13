// ALWAYS store API keys in environment variables, never hardcode them in your codebase
import axios from 'axios'

const key = 'your api key here'

export const defaultParams = {
    part: 'snippet',
    maxResults: 12,
    key,
}

export const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: defaultParams,
})
