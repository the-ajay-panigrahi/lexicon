const ProgressBar = ({ text, remainder }) => {
  return (
    <div className="progress">
      <div className="progress-label">
        <span className="emphasis">{text}</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${remainder}%`,
          }}
        ></div>

        <div className="progress-segments">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="progress-segment" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
