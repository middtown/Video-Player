import React  from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // same as passing props then in the function having "const video = props.video";
	const imgURL = video.snippet.thumbnails.default.url;
	return (
		<li onClick={ ( ) => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imgURL}/>
				</div>
			</div>

			<div className='media-body'>
				<div className='media-heading'> {video.snippet.title} </div>
			</div>
		</li>
	);
}

export default VideoListItem;
