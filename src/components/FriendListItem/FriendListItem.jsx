import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
