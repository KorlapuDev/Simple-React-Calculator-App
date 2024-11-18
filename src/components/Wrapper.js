const Wrapper = ({ children }) => {
  const handleGitHubLink = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <div className="mainWrapperContainer">
      <div className=" wrapperHeadingTitle">
        <div>
          <img
            src="/logo512.png"
            style={{ objectFit: "cover", width: "100%" }}
            alt="calculator logo"
          />
        </div>
        <h1>React-App</h1>
      </div>
      <div className="wrapperHeading">
        <div>
          <img
            src="/logoPng.png"
            style={{ objectFit: "cover", width: "100%" }}
            alt="calculator logo"
          />
        </div>
        <h1>Calculator</h1>
      </div>

      <div className="wrapper-calc">{children}</div>

      <div>
        <div
          style={{
            width: "7%",
            cursor: "pointer",
          }}
          onClick={handleGitHubLink}
        >
          <img
            src="/gitbhub.webp"
            style={{
              objectFit: "cover",
              width: "100%",
              padding: "0.7rem",
              backgroundColor: "#242424",
              borderRadius: "0.5rem",
            }}
            alt="calculator logo"
          />
        </div>
        <h2
          style={{
            cursor: "pointer",
          }}
          onClick={handleGitHubLink}
        >
          Souce Code
        </h2>
      </div>
    </div>
  );
};

export default Wrapper;
