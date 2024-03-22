import React from 'react';
import {
  CtaAngleDown,
  CtaAngleLeft,
  CtaAngleRight,
  CtaAngleUp,
  CtaChevronDown,
  CtaChevronLeft,
  CtaChevronRight,
  CtaChevronUp,
  CtaGlass,
  CtaLanguage,
  CtaXmark,
  CtaXmarkLarge,
} from '../index';
import '../index.css';

export default () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <CtaChevronUp />
        <CtaChevronDown />
        <CtaChevronLeft />
        <CtaChevronRight />
        <CtaGlass />
        <CtaXmarkLarge />
      </div>
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <CtaAngleUp />
        <CtaAngleDown />
        <CtaAngleLeft />
        <CtaAngleRight />
        <CtaLanguage />
        <CtaXmark />
      </div>
    </div>
  );
};

// display: grid;
// grid-template-columns: repeat(6, 48px);
// grid-row-gap: 20px;
// grid-column-gap: 20px;
