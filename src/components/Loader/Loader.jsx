import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export const Loader = ({ showLoader }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={showLoader}
      />
    </div>
  );
};

Loader.propTypes = {
  showLoader: PropTypes.bool.isRequired,
};
