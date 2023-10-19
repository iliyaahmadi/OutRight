import '../styles/components/_slider.scss';

function slider() {
  return (
    <div className="slider">
      <div className="slider__nav"></div>
      <div className="slider__active">

      </div>
      <div className="slider__queue queue">
        <div className="queue__item"></div>
        <div className="queue__item"></div>
        <div className="queue__item"></div>
      </div>
    </div>
  );
}

export default slider;
