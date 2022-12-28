/* eslint-disable */
import React, { useState } from 'react';
import { Container, Nav, Navbar, ToggleButton, ToggleButtonGroup, Modal, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import '../styles/ApplyStyle.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import axios from 'axios';

function ApplyComponent({
  area,
  page,
  pageSet,
  completeDateSet,
  completeStartTimeSet,
  completeEndTimeSet,
  completePlaceNameSet,
}) {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState();
  const [duration, setDuration] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const radios = [
    { name: '09시', value: '09:00' },
    { name: '10시', value: '10:00' },
    { name: '11시', value: '11:00' },
    { name: '12시', value: '12:00' },
    { name: '13시', value: '13:00' },
    { name: '14시', value: '14:00' },
    { name: '15시', value: '15:00' },
    { name: '16시', value: '16:00' },
    { name: '17시', value: '17:00' },
    { name: '18시', value: '18:00' },
    { name: '19시', value: '19:00' },
    { name: '20시', value: '20:00' },
  ];

  console.log(date);
  console.log(startTime);
  console.log(duration);

  let [arydata, arydataSet] = useState([]);
  let [aryclass, aryclassSet] = useState([]);
  let [aryID, aryIDSet] = useState([]);
  let [title, setTitle] = useState(0);
  let [tab, tabSet] = useState(0);
  let [available, availableSet] = useState();

  let [layer0Class, layer0ClassSet] = useState([]);
  let [layer1Class, layer1ClassSet] = useState([]);
  let [layer2Class, layer2ClassSet] = useState([]);
  let [layer3Class, layer3ClassSet] = useState([]);
  let [layer4Class, layer4ClassSet] = useState([]);
  let [layer5Class, layer5ClassSet] = useState([]);
  let [layer6Class, layer6ClassSet] = useState([]);

  let [layer0ID, layer0IDSet] = useState([]);
  let [layer1ID, layer1IDSet] = useState([]);
  let [layer2ID, layer2IDSet] = useState([]);
  let [layer3ID, layer3IDSet] = useState([]);
  let [layer4ID, layer4IDSet] = useState([]);
  let [layer5ID, layer5IDSet] = useState([]);
  let [layer6ID, layer6IDSet] = useState([]);

  let [layer0Available, layer0AvailableSet] = useState([]);
  let [layer1Available, layer1AvailableSet] = useState([]);
  let [layer2Available, layer2AvailableSet] = useState([]);
  let [layer3Available, layer3AvailableSet] = useState([]);
  let [layer4Available, layer4AvailableSet] = useState([]);
  let [layer5Available, layer5AvailableSet] = useState([]);
  let [layer6Available, layer6AvailableSet] = useState([]);

  console.log(arydata);
  console.log(aryID);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KUBS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#mypage">My Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="apply-box">
        <Nav variant="tabs" defaultActiveKey="link-0" className="justify-content-end">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(0);
              }}
              eventKey="link-0"
            >
              B1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(1);
              }}
              eventKey="link-1"
            >
              1층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(2);
              }}
              eventKey="link-2"
            >
              2층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(3);
              }}
              eventKey="link-3"
            >
              3층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(4);
              }}
              eventKey="link-4"
            >
              4층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(5);
              }}
              eventKey="link-5"
            >
              5층
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                tabSet(6);
              }}
              eventKey="link-6"
            >
              6층
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="date-box">
          <div style={{ margin: 'auto', width: '90%', textAlign: 'center' }}>
            <p style={{ textAlign: 'left' }}>날짜 선택</p>
            <Calendar
              onChange={setDate} // useState로 포커스 변경 시 현재 날짜 받아오기
              formatDay={(locale, date) => moment(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
              value={date}
              minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
              maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
              navigationLabel={null}
              showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
              className="mx-auto w-full text-sm border-b"
            />
            <br />
            <p style={{ textAlign: 'left' }}>시작 시간</p>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`${idx + 9}h`}
                type="radio"
                variant="dark"
                name="radio"
                value={radio.value}
                checked={startTime === radio.value}
                onChange={(e) => setStartTime(e.currentTarget.value)}
                style={{ margin: '10px' }}
              >
                {radio.name}
              </ToggleButton>
            ))}
            <br />
            <br />
            <p style={{ textAlign: 'left' }}>사용 시간</p>
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton
                id="1h"
                value={1}
                variant="dark"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                onChange={() => {
                  setDuration('1');
                }}
              >
                1h
              </ToggleButton>
              <ToggleButton
                id="2h"
                value={2}
                variant="dark"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                onChange={() => {
                  setDuration('2');
                }}
              >
                2h
              </ToggleButton>
              <ToggleButton
                id="3h"
                value={3}
                variant="dark"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                onChange={() => {
                  setDuration('3');
                }}
              >
                3h
              </ToggleButton>
            </ToggleButtonGroup>
            <br />
            <br />
            <br />
            <button
              onClick={() => {
                console.log({
                  date: moment(date).format('YYYY-MM-DD'),
                  startTime: startTime,
                  duration: duration,
                  area: area,
                });
                axios
                  .post(
                    '/api/place/ablePlaceList',
                    {
                      date: moment(date).format('YYYY-MM-DD'),
                      startTime: startTime,
                      usageTime: duration,
                      area: area,
                    },
                    {
                      headers: { 'Content-Type': 'application/json' },
                    },
                  )
                  .then(function (response) {
                    console.log(response.data);

                    arydataSet(response.data);
                    //                aryclassSet(response.data.map(row=>row.roomName))
                    //                aryIDSet(response.data.map(row=>row.classid))
                    //                availableSet(response.data.map(row=>row.available))

                    layer0ClassSet(response.data.filter((row) => row.floor == 0).map((row) => row.placeName));
                    layer1ClassSet(response.data.filter((row) => row.floor == 1).map((row) => row.placeName));
                    layer2ClassSet(response.data.filter((row) => row.floor == 2).map((row) => row.placeName));
                    layer3ClassSet(response.data.filter((row) => row.floor == 3).map((row) => row.placeName));
                    layer4ClassSet(response.data.filter((row) => row.floor == 4).map((row) => row.placeName));
                    layer5ClassSet(response.data.filter((row) => row.floor == 5).map((row) => row.placeName));
                    layer6ClassSet(response.data.filter((row) => row.floor == 6).map((row) => row.placeName));

                    layer0IDSet(response.data.filter((row) => row.floor == 0).map((row) => row.placeId));
                    layer1IDSet(response.data.filter((row) => row.floor == 1).map((row) => row.placeId));
                    layer2IDSet(response.data.filter((row) => row.floor == 2).map((row) => row.placeId));
                    layer3IDSet(response.data.filter((row) => row.floor == 3).map((row) => row.placeId));
                    layer4IDSet(response.data.filter((row) => row.floor == 4).map((row) => row.placeId));
                    layer5IDSet(response.data.filter((row) => row.floor == 5).map((row) => row.placeId));
                    layer6IDSet(response.data.filter((row) => row.floor == 6).map((row) => row.placeId));

                    layer0AvailableSet(response.data.filter((row) => row.floor == 0).map((row) => row.isAble));
                    layer1AvailableSet(response.data.filter((row) => row.floor == 1).map((row) => row.isAble));
                    layer2AvailableSet(response.data.filter((row) => row.floor == 2).map((row) => row.isAble));
                    layer3AvailableSet(response.data.filter((row) => row.floor == 3).map((row) => row.isAble));
                    layer4AvailableSet(response.data.filter((row) => row.floor == 4).map((row) => row.isAble));
                    layer5AvailableSet(response.data.filter((row) => row.floor == 5).map((row) => row.isAble));
                    layer6AvailableSet(response.data.filter((row) => row.floor == 6).map((row) => row.isAble));

                    // response
                  })
                  .catch(function (error) {
                    console.log(error);
                    // 오류발생시 실행
                  });
              }}
            >
              {' '}
              강의실 조회{' '}
            </button>
          </div>
        </div>

        <div style={{ margin: 'auto', marginRight: '0', width: '80%', textAlign: 'center' }}>
          <TabContent
            aryID={aryID}
            tab={tab}
            setShow={setShow}
            setTitle={setTitle}
            aryIDSet={aryIDSet}
            aryclassSet={aryclassSet}
            layer0Class={layer0Class}
            layer0ID={layer0ID}
            layer0Available={layer0Available}
            layer1Class={layer1Class}
            layer1ID={layer1ID}
            layer1Available={layer1Available}
            layer2Class={layer2Class}
            layer2ID={layer2ID}
            layer2Available={layer2Available}
            layer3Class={layer3Class}
            layer3ID={layer3ID}
            layer3Available={layer3Available}
            layer4Class={layer4Class}
            layer4ID={layer4ID}
            layer4Available={layer4Available}
            layer5Class={layer5Class}
            layer5ID={layer5ID}
            layer5Available={layer5Available}
            layer6Class={layer6Class}
            layer6ID={layer6ID}
            layer6Available={layer6Available}
          />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>예약 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            예약 날짜: {moment(date).format('YYYY년 MM월 DD일')} <br />
            시작 시간: {startTime} <br />
            사용 시간: {duration} <br />
            강의실: {aryclass[title]}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                console.log({ date: moment(date).format('YYYY-MM-DD'), startTime: startTime, duration: duration });
                pageSet(3);
                console.log(page);
                axios
                  .post(
                    '/api/booking',
                    {
                      date: moment(date).format('YYYY-MM-DD'),
                      startTime: startTime,
                      usageTime: duration,
                      placeId: aryID[title],
                    },
                    {
                      headers: { 'Content-Type': 'application/json' },
                    },
                  )
                  .then(function (response) {
                    console.log(response);
                    completeDateSet(response.data.date);
                    completeStartTimeSet(response.data.startTime);
                    completeEndTimeSet(response.data.endTime);
                    completePlaceNameSet(response.data.placeName);
                  })
                  .catch(function (error) {
                    console.log(error);
                    // 오류발생시 실행
                  });
              }}
            >
              예약
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

function TabContent(props) {
  if (props.tab == 0) {
    return (
      <div>
        {props.layer0Class.map(function (a, i) {
          if (props.layer0Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer0ID);
                  props.aryclassSet(props.layer0Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
  if (props.tab == 1) {
    return (
      <div>
        {props.layer1Class.map(function (a, i) {
          if (props.layer1Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer1ID);
                  props.aryclassSet(props.layer1Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
  if (props.tab == 2) {
    return (
      <div>
        {props.layer2Class.map(function (a, i) {
          if (props.layer2Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer2ID);
                  props.aryclassSet(props.layer2Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
  if (props.tab == 3) {
    return (
      <div>
        {props.layer3Class.map(function (a, i) {
          if (props.layer3Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer3ID);
                  props.aryclassSet(props.layer3Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
  if (props.tab == 4) {
    return (
      <div>
        {props.layer4Class.map(function (a, i) {
          if (props.layer4Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer4ID);
                  props.aryclassSet(props.layer4Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
  if (props.tab == 5) {
    return (
      <div>
        {props.layer5Class.map(function (a, i) {
          if (props.layer5Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer5ID);
                  props.aryclassSet(props.layer5Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
  if (props.tab == 6) {
    return (
      <div>
        {props.layer6Class.map(function (a, i) {
          if (props.layer6Available[i] == true) {
            return (
              <button
                onClick={() => {
                  props.setShow(true);
                  props.setTitle(i);
                  props.aryIDSet(props.layer6ID);
                  props.aryclassSet(props.layer6Class);
                }}
                style={{ marginTop: '40px', marginRight: '5px' }}
              >
                {a}
              </button>
            );
          } else {
            return <button style={{ marginTop: '40px', marginRight: '5px', background: '#ff6666' }}>{a}</button>;
          }
        })}
      </div>
    );
  }
}

export default ApplyComponent;
