import MediaMatch from "../MediaMatch";

const Video = () => {
  return (
    <div>
      <MediaMatch greaterThan="medium">
        <iframe
          width="790"
          height="439"
          src="https://www.youtube.com/embed/W4wRIVLq_t0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <iframe
          width="300"
          height="167"
          src="https://www.youtube.com/embed/W4wRIVLq_t0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </MediaMatch>
    </div>
  );
};

export default Video;
