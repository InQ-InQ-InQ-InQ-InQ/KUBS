import React from 'react';
import '../styles/MypageStyle.css';

function MypageItemComponent({ time, room }) {
  return (
    <div className="mypage_reservation">
      <div>{time}</div>
      <div>{room}</div>
    </div>
  );
}

export default MypageItemComponent;
