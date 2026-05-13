// ALWAYS store API keys in environment variables, never hardcode them in your codebase
import axios from 'axios'

const key = 'AIzaSyBfI8OUjapJB15O4ZlgtYRw2eVm1m_89aw'

export const defaultParams = {
    part: 'snippet',
    maxResults: 12,
    key,
}

export const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: defaultParams,
})
