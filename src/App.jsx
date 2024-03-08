import "./App.css";

const Laptops = ({ laptops }) => {
  const laptopList = laptops.map((laptop) => (
    <div key={laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price:{laptop.price}</p>
    </div>
  ));
  return (
    <>
      <h2>Laptops</h2>
      {laptopList}
      <hr />
    </>
  );
};

const TouristSpots = ({ touristSpots }) => {
  const listTouristSpots = touristSpots.map((place) => (
    <div key={place.id}>
      <h3>{place.name}</h3>
      <p>Location: {place.location}</p>
    </div>
  ));
  return (
    <>
      <h2>Tourist Spots</h2>
      {listTouristSpots}
      <hr />
    </>
  );
};

const Podcasts = ({ podcastEpisodes }) => {
  const podList = podcastEpisodes.map((pod) => (
    <div key={pod.id}>
      <h3>{pod.name}</h3>
      <p>Duration: {pod.duration} minutes</p>
    </div>
  ));

  return (
    <>
      <h2>Podcast Episodes</h2>
      {podList}
      <hr />
    </>
  );
};

const News = ({ newsArticles }) => {
  const articleList = newsArticles.map((news) => (
    <div>
      <h3>{news.news}</h3>
      <p>{news.description}</p>
    </div>
  ));
  return (
    <>
      <h2>News Articles</h2>
      {articleList}
      <hr/>
    </>
  );
};

const Games = ({ games }) => {
  const gameList = games.map((game) => (
    <div>
      <h3>{game.name}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ));
  return (
    <>
      <h2>Games</h2>
      {gameList}
    </>
  );
};

export default function App() {
  const laptops = [
    { id: 1, brand: "Dell", price: 999 },
    { id: 2, brand: "Apple", price: 1299 },
    { id: 3, brand: "HP", price: 1499 },
  ];

  const touristSpots = [
    { id: 1, name: "Eiffel Tower", location: "Paris, France" },
    { id: 2, name: "Statue of Liberty", location: "New York City, USA" },
    { id: 3, name: "Great Wall of China", location: "Beijing, China" },
  ];

  const newsArticles = [
    { id: 1, news: "News 1", description: "Description 1" },
    { id: 2, news: "News 2", description: "Description 2" },
    { id: 3, news: "News 3", description: "Description 3" },
  ];

  const podcastEpisodes = [
    { id: 1, name: "Episode 1", duration: "30:00" },
    { id: 2, name: "Episode 2", duration: "45:20" },
    { id: 3, name: "Episode 3", duration: "25:45" },
  ];

  const games = [
    { id: 1, name: "The Witcher 3: Wild Hunt", genre: "Action RPG" },
    {
      id: 2,
      name: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-adventure",
    },
    { id: 3, name: "Final Fantasy VII Remake", genre: "RPG" },
  ];
  return (
    <main>
      <Laptops laptops={laptops} />
      <TouristSpots touristSpots={touristSpots} />
      <Podcasts podcastEpisodes={podcastEpisodes} />
      <News newsArticles={newsArticles} />
      <Games games={games} />
    </main>
  );
}
