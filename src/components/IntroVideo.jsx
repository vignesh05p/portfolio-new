import { introVideo, links } from '../content.js'

// Click-to-play YouTube embed. The prerendered markup is a plain link to the
// video with its thumbnail, so it works without script; enhance.js swaps in a
// privacy-enhanced (youtube-nocookie) player on click. Nothing from YouTube
// loads until the thumbnail scrolls near the viewport.
export default function IntroVideo() {
  return (
    <figure className="video">
      <a
        className="video__frame"
        href={introVideo.watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-video-id={introVideo.id}
        data-video-title={introVideo.title}
        aria-label={`Play video: ${introVideo.title} (${introVideo.duration})`}
      >
        <img
          src={introVideo.thumbnail}
          alt=""
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
        />
        <span className="video__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" focusable="false">
            <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
          </svg>
        </span>
      </a>
      <figcaption className="video__caption">
        <span>
          {introVideo.title}{' '}
          <span className="video__duration">{introVideo.duration}</span>
        </span>
        <a
          className="link"
          href={links.youtube.href}
          rel="me noreferrer"
          target="_blank"
        >
          More on my YouTube channel
        </a>
      </figcaption>
    </figure>
  )
}
