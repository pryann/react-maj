function VideoDetail({ video }) {
    const baseSrc = 'https://youtube.com/embed/'

    function getVideoUrl() {
        if (video.id.videoId) {
            return `${baseSrc}${video.id.videoId}`
        } else if (video.id.playlistId) {
            return `${baseSrc}videoseries?list=${video.id.playlistId}`
        } else {
            // channel thumbnail not contains image extension
            // channel can be resstricted
            return `${baseSrc}channels?list=${video.id.channelId}`
        }
    }

    return (
        <div className="video-detail">
            <div className="ratio ratio-16x9">
                <iframe src={getVideoUrl()} frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
            </div>
            <div className="mt-3">
                <h2 className="h4">{video.snippet.title}</h2>
                <p className="lead">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
