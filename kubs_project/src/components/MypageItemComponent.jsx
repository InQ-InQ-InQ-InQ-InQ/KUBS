import React from 'react';

function MypageItemComponent({ time, room }) {
  return (
    <div>
      <div>{time}</div>
      <div>{room}</div>
    </div>
  );
}

export default MypageItemComponent;
