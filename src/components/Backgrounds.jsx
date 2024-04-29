import './Backgrounds.css';

const Backgrounds = ({ backgroundAnimationScope, backgrounds }) => {
  return (
    <div
      ref={backgroundAnimationScope}
      className="bg_container"
      style={{
        width: `${backgrounds.length - 1 * 100}vw`,
      }}
    >
      {backgrounds.map(bg => {
        return (
          <div
            key={bg}
            style={{
              background: bg,
            }}
            className="bg_element"
          ></div>
        );
      })}
    </div>
  );
};

export default Backgrounds;
