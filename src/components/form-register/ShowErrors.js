const ShowErrors = ({ errors }) => {
    return (
      <div className="errors">
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default ShowErrors