import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

interface IAppState {
  videos: string[];
  selectedVideo: null;
}

class App extends Component<{}, IAppState> {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('NextJs');
  }

  onTermSubmit = async (term: string) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onVideoSelect = (video: any) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
