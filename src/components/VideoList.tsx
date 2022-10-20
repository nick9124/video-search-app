import React from 'react';
import VideoItem from './VideoItem';

interface IVideoListProps {
  videos: any;
  onVideoSelect: any;
}

const VideoList = ({ videos, onVideoSelect }: IVideoListProps) => {
  const renderedList = videos.map(
    (video: { id: { videoId: React.Key | null | undefined } }) => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      );
    }
  );

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
