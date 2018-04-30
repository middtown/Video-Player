import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail'


const API_KEY = 'AIzaSyAJu4GDCC9LpN9_MiTSG02pAI2nIdumUII';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [ ],
			selectedVideo: null
		};

		this.videoSearch('micheal scott the office');
	}

	videoSearch (term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			}); 
		});
	}

	render( ) {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
			);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));