import React from 'react';
import MypageItemComponent from './MypageItemComponent';
import '../styles/MypageStyle.css';

function MypageComponent() {
  const testReservation = [
    { time: '1000~1100', room: '6007' },
    { time: '1200~1300', room: '6008' },
  ];

  const testUser = { studentId: '201912088', name: '신현호', department: '컴퓨터공학부' };
  return (
    <div className="mypage">
      <div className="mypage_main">
        <div>
          <div>{testUser.studentId}</div>
          <div>{testUser.name}</div>
          <div>{testUser.department}</div>
        </div>
        <div>
          <h1>test</h1>
          {testReservation.map((reservation) => (
            <MypageItemComponent reservation={reservation} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MypageComponent;
