import '../styles/components/_NotifModal.scss';

const NotifModal = () => {
  return (
    <div className="modal">
      <div className="modal__pointer"></div>
      <div className="modal__content">
        <div className="inner">
          <div className="item">
            <div className="item__icon">
              <img src="/src/assets/icons/notif1.svg" alt="icon" />
            </div>
            <div className="item__msg msg ">
              <div className="msg__top">
                <h3>تولدت مبارک</h3>
                <p>۳ روز پیش</p>
              </div>
              <div className="msg__desc">
                <p>
                  ایلیا احمدی عزیز، مجموعه اوت رایت تولد شمارو تبریک میگه و کد
                  تخفیف مورد نظر را قرار ایلیا احمدی عزیز، مجموعه اوت رایت تولد
                  شمارو تبریک میگه و کد تخفیف مورد نظر را قرار ایلیا احمدی عزیز،
                  مجموعه اوت رایت تولد شمارو تبریک میگه و کد تخفیف مورد نظر را
                  قرار
                </p>
              </div>
            </div>
          </div>
          <div className="item seen">
            <div className="item__icon">
              <img src="/src/assets/icons/notif2.svg" alt="icon" />
            </div>
            <div className="item__msg msg">
              <div className="msg__top">
                <h3>تکمیل سفارش</h3>
                <p>۵ روز پیش</p>
              </div>
              <div className="msg__desc">
                <p>
                  ایلیا احمدی عزیز، سفارش شما به شماره سفارش ۲۴۵۶۸ تکمیل گردید
                </p>
              </div>
            </div>
          </div>
          <div className="item seen">
            <div className="item__icon">
              <img src="/src/assets/icons/notif1.svg" alt="icon" />
            </div>
            <div className="item__msg msg">
              <div className="msg__top">
                <h3>تولدت مبارک</h3>
                <p>۳ روز پیش</p>
              </div>
              <div className="msg__desc">
                <p>
                  ایلیا احمدی عزیز، مجموعه اوت رایت تولد شمارو تبریک میگه و کد
                  تخفیف مورد نظر را قرار
                </p>
              </div>
            </div>
          </div>
          <div className="item seen">
            <div className="item__icon">
              <img src="/src/assets/icons/notif2.svg" alt="icon" />
            </div>
            <div className="item__msg msg">
              <div className="msg__top">
                <h3>تکمیل سفارش</h3>
                <p>۵ روز پیش</p>
              </div>
              <div className="msg__desc">
                <p>
                  ایلیا احمدی عزیز، سفارش شما به شماره سفارش ۲۴۵۶۸ تکمیل گردید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifModal;
