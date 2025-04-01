import ReactPlayer from 'react-player/youtube';
import { defaultTheme } from '../../../../theme/defaultTheme';
import { Links } from '../../../../links';

function VideoPlayer() {
  const maxWidth = defaultTheme.screens.mobile;
  const isMobile = window.matchMedia(`(max-width: ${maxWidth})`).matches;
  const resolution = {
    width: isMobile ? '370px' : window.innerWidth - 250,
    height: isMobile ? '400px' : window.innerHeight - 250,
  };

  return <ReactPlayer url={Links.Video} {...resolution} controls />;
}

export default VideoPlayer;
