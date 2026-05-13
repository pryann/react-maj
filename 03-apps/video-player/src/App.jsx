import { useEffect } from 'react'
import './App.css'
import { defaultParams, youtubeApi } from './api/youtubeApi'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

function App() {
    const [videos, setVideos] = useState(null)

    async function searchVideos(q) {
        const response = await youtubeApi.get('/search', {
            params: {
                ...defaultParams,
                q,
            },
        })
        setVideos(response.data.items)
        console.log(videos)
    }
    useEffect(() => {
        searchVideos('React Js')
    }, [])

    return (
        <>
            <header>
                <div className="container">
                    <SearchBar onFormSubmit={searchVideos} />
                </div>
            </header>
            <main>
                {videos && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <VideoDetail />
                            </div>
                            <div className="col-lg-4">
                                <VideoList videos={videos} />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default App
