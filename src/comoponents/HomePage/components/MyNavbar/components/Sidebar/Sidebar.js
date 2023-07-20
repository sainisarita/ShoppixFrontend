import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="sidebar-content">
        {/* Add your menu list content here */}
        <p>Shoppix</p>
        <p>Home #1</p>
        <p>Home #2</p>
        <p>About Us #1</p>
        <p>About Us #2</p>
        <p>FAQs</p>
        <p>Contact Us</p>
        <p>Page 404</p>
        <p>Coming Soon</p>
        <p>Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi aliquet, sit amet fermentum justo dapibus.</p>
        <p>(+612) 2531 5600</p>
        <p>PO Box 1622 Colins Street West</p>
        <p>Google Map</p>
        <p>© 2020 Shoppix – All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
