import PropTypes from 'prop-types';

function App({ value = "NULL" }) {
  return (
    <>
      <div className="flex">
        <h1 className="text-4xl text-white font-bold bg-blue-500 p-10 rounded-2xl m-4">
          {value}
        </h1>
      </div>
    </>
  );
}

// Define prop types for the component
App.propTypes = {
  value: PropTypes.string.isRequired,
};

export default App;
