import style from '../../styles.module.css';

export const Button = ({ onClickLoadMore }) => {
  return (
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
    }}>
      <button className={style.Button} onClick={onClickLoadMore} type="submit">
        <span>Load more</span>
      </button>
    </div>
  );
};
