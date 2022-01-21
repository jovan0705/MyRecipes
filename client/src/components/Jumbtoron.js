const Jumbtron = () => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden shadow bg-primary flex p-10 h-72">
        <div
          style={{ flex: 2 }}
          className="flex justify-center items-center flex-col"
        >
          <h1 className="text-5xl mb-4 text-base-content font-bold">
            Add your own recipe
          </h1>
          <h2 className="text-2xl text-base-content mb-7">
            Upload your own home made recipe, and share it with other members of
            our community
          </h2>
          <button class="btn btn-accent btn-lg">Add a Recipe Now</button>
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
