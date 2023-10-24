import '../styles/components/_checkbox.scss';

const checkbox = () => {
  return (
    <label className="container">
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default checkbox;
