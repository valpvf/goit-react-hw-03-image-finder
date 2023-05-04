import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="50"
      width="50"
      ariaLabel="vortex-loading"
      wrapperStyle={{ right: '41vw', position: 'relative' }}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
};

export default Loader;
