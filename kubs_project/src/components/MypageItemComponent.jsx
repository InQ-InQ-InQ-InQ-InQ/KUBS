import React from 'react';
import '../styles/MypageStyle.css';

function MypageItemComponent({ placeName, date, startTime }) {
  return (
    <div className="mypage_reservation">
      <div>{placeName}</div>
      <div>{date}</div>
      <div>{startTime}</div>
    </div>
  );
}

export default MypageItemComponent;
