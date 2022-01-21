const Jumbtron = () => {
  return (
    <div>
      <div className="my-10 rounded-xl overflow-hidden shadow bg-primary flex p-10">
        <div style={{ flex: 2 }}>
          <h1 className="text-4xl mb-4 text-base-content text-bold">
            Add your own recipe
          </h1>
          <h2 className="text-xl text-base-content">
            Upload your own home made recipe, and share it with other members of
            our community
          </h2>
        </div>
        <div className="flex-1 relative">
          <img
            src="https://ik.imagekit.io/johannes/people-emotions-lifestyle-leisure-beauty-concept-excited-happy-cute-asian-girl-hear-awesome-news-holding-smoothie-drink-smiling-amazed-camera-standing-yellow-background_ccexpress__1___1___1__5J0_fSYjF_c8aljfTp2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642746580673"
            alt="Jumbotron"
            className="absolute left-0 right-0 -top-11 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbtron;
