function VideoItem({ video, onSelectVideo }) {
    return (
        <div
            className="container p-1 video"
            role="button"
            tabIndex="0"
            onClick={() => onSelectVideo(video)}
            onKeyUp={(e) => e.key === 'Enter' && onSelectVideo(video)}>
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                </div>
                <div className="col-6">
                    <h3 className="h6">{video.snippet.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default VideoItem
