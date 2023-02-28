const videos = [
  {
    name: "Что такое JS",
    duration: 15,
    id: 1,
  },
  {
    name: "Roadmap JS",
    duration: 15,
    id: 2,
  },
  {
    name: "Frontend JS",
    duration: 15,
    id: 3,
  },
];

export function VideoList() {
  return (
    <>
      <h1>Videolist</h1>
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <p>{video.name}</p>
            <p>{video.duration}</p>
            <button>Like!</button>
          </div>
        );
      })}
    </>
  );
}
