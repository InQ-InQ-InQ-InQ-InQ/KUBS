import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplyComponent from '../components/ApplyComponent';
import MainComponent from '../components/MainComponent';

function MainContainer() {
  const navigate = useNavigate();
  const building = [
    { name: '1강', value: 'ONE' },
    { name: '2강', value: 'TWO' },
    { name: '3강', value: 'THREE' },
    // '예대',
    // '학생관',
    // '복지관',
    // '어울림관',
    // {name : '4강', value : 'four'},
    // '5강',
    // '6강',
    // '7강',
    // '8강',
    // '제2공학관',
    // '대운동장',
    // '풋살장',
    // '테니스장',
  ];
  const [area, setArea] = useState();
  const [main, setMain] = useState(true);

  const onMain = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  const onApply = (e) => {
    e.preventDefault();
    navigate('/apply');
  };

  const onMypage = (e) => {
    e.preventDefault();
    navigate('/mypage');
  };

  const handleArea = (element) => {
    setArea(element);
    setMain(false);
  };

  return (
    <>
      {main ? (
        <MainComponent
          building={building}
          onMain={onMain}
          onApply={onApply}
          onMypage={onMypage}
          handleArea={handleArea}
        />
      ) : (
        <ApplyComponent area={area} />
      )}
    </>
  );
}

export default MainContainer;
