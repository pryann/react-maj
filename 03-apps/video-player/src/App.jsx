import { useEffect } from 'react'
import './App.css'
import { defaultParams, youtubeApi } from './api/youtubeApi'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

function App() {
    const [videos, setVideos] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null)

    // refactor: separate: searchVideos, updateVideo, etc to functions
    async function searchVideos(q) {
        const response = await youtubeApi.get('/search', {
            params: {
                ...defaultParams,
                q,
            },
        })
        const { items } = response.data
        setVideos(items)
        setSelectedVideo(items[0])
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
                                <VideoDetail video={selectedVideo} />
                            </div>
                            <div className="col-lg-4">
                                <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default App
