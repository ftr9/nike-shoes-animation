import './Header.css';
import RoundedIconButton from './RoundedIconButton';

const Header = () => {
  return (
    <div className="header">
      <h1>NIKE</h1>
      <ul>
        <li>Collection</li>
        <li>Accessories</li>
        <li>Store</li>
        <li>Service</li>
        <li>Shop</li>
      </ul>
      <div className="header_btn">
        <RoundedIconButton iconName={'grid-outline'} />
      </div>
    </div>
  );
};

export default Header;
