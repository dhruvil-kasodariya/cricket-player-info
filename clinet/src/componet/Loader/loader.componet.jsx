import "./loader.style.css";
const Loader = () => {
  return (
    <div class="loader">
      <div style={{ "--i": 1 }}></div>
      <div style={{ "--i": 2 }}></div>
      <div style={{ "--i": 3 }}></div>
      <div style={{ "--i": 4 }}></div>
    </div>
  );
};
export default Loader;