import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="180"
      width="180"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '200px',
      }}
      colors={['#fc0', '#fee270', '#ffffff', '#fee270', '#202020']}
    />
  );
}
