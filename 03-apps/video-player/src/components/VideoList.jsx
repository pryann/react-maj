import VideoItem from './VideoItem'

function VideoList({ videos, onSelectVideo }) {
    return (
        <>
            {videos.map((video, index) => (
                <VideoItem key={index} video={video} onSelectVideo={onSelectVideo} />
            ))}
        </>
    )
}

export default VideoList
