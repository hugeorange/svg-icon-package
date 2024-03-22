import React from 'react';
import {
  LightBan,
  LightBank,
  LightBuilding,
  LightCalendar,
  LightCheck,
  LightClock,
  LightComment,
  LightDollar,
  LightDown,
  LightEmail,
  LightEquals,
  LightEye,
  LightEyeSlash,
  LightFile,
  LightHeart,
  LightKeyhole,
  LightList,
  LightMappin,
  LightMinus,
  LightMobile,
  LightPercent,
  LightPerson,
  LightPlus,
  LightQuestion,
  LightRightLong,
  LightUp,
  LightUpDown,
  LightUser,
  LightUserGroup,
  LightUtensils,
} from '../index';
import '../index.css';

export default () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <LightComment />
      <LightList />
      <LightUser />
      <LightEmail />
      <LightMobile />
      <LightQuestion />
      <LightBuilding />
      <LightMappin />
      <LightKeyhole />
      <LightUserGroup />
      <LightCalendar />
      <LightDown />
      <LightUp />
      <LightPlus />
      <LightMinus />
      <LightEquals />
      <LightPerson />
      <LightUtensils />
      <LightRightLong />
      <LightHeart />
      <LightPercent />
      <LightBan />
      <LightFile />
      <LightCheck />
      <LightUpDown />
      <LightEye />
      <LightEyeSlash />
      <LightDollar />
      <LightBank />
      <LightClock />
    </div>
  );
};
