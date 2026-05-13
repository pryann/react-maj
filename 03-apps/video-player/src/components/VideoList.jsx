function VideoList({ videos }) {
    return (
        <>
            {videos.map((video, index) => (
                <div className="container" key={index}>
                    <div className="row">
                        <div className="col-6">
                            <img
                                className="img-fluid"
                                src={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                            />
                        </div>
                        <div className="col-6">
                            <h3 className="h6">{video.snippet.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoList
