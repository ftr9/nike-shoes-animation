import './RoundedIconButton.css';

const RoundedIconButton = ({ iconName, onPress }) => {
  return (
    <div onClick={onPress} className="roundedIconButton">
      <ion-icon name={iconName}></ion-icon>
    </div>
  );
};

export default RoundedIconButton;
