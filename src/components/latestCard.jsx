import '../styles/components/_latestCard.scss';

const latestCard = ({ name, img }) => {
  return (
    <div className="latestCard">
      <img src={img} alt={name} />
    </div>
  );
};

export default latestCard;
