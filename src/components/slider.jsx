import '../styles/components/_slider.scss';

function slider() {
  return (
    <div className="slider">
      <div className="slider__nav"></div>
      <div className="slider__main main">
            <div className='main__img'>
                <img src="/src/assets/img/omen.png" alt="SliderImg" />
            </div>
            {/* <div className="main__bg" style={{backgroundColor: "#717784"}}> */}
            <div className="main__bg">

            </div>
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
