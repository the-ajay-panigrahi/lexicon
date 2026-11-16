import Header from "./Header";
const WelcomePage = ({ name, setName, handleAccountCreate }) => {
  return (
    <div className="welcome-page">
      <div className="welcome-shell">
        <Header />

        <div className="welcome-content">
          <div className="welcome-copy">
            <h2 className="welcome-title">
              365 days.
              <br /> 365 words.
            </h2>
            <p className="welcome-description">
              Build your <span className="emphasis">lexicon</span> today.
              <br />
              Start the challenge - one word at a time.
            </p>
          </div>

          <div className="welcome-visual">
            <div className="photo-frame">
              <img
                src="https://images.unsplash.com/photo-1612798705568-61c14cdc5e40?q=80&w=1170&auto=format&fit=crop"
                alt="Lexicon Preview"
                className="welcome-photo"
              />
            </div>
          </div>
        </div>

        <div className="welcome-form">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          <button
            onClick={() => {
              handleAccountCreate();
            }}
            className="primary-button"
          >
            Start your journey <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
