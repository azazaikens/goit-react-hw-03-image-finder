import { Dna } from 'react-loader-spinner';


export const Loader = ({ loading, error }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
              alignItems: 'center',
        height: "80",
          width: "80",
      }}
    >
      {loading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : null}
      {error ? <p>Error: {error}</p> : null}
    </div>
  );
};
