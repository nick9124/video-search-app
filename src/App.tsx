import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('beautiful wildlife');

  useEffect((): void => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // useEffect((): void => {
  //   onTermSubmit('beautiful wildlife');
  // }, []);

  componentDidMount() {
    this.onTermSubmit('NextJs');
  }

  //   setVideos(res.data.items);
  //   setSelectedVideo(res.data.items[0]);

  // };

  // const onVideoSelect = (video: React.SetStateAction<null>) =>
  //   setSelectedVideo(video);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
