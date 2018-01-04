import React from 'react';
const PlotDonutIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M26 5.625l-3.875 4.5c1.5 1.563 2.375 3.625 2.375 5.875 0 0.625-0.063 1.188-0.188 1.813l5.688 1.688c0.25-1.125 0.375-2.313 0.375-3.5 0-4.063-1.688-7.75-4.375-10.375zM12 8.5c1.188-0.625 2.563-1 4-1 1.75 0 3.313 0.5 4.688 1.438l3.813-4.563c-2.375-1.75-5.313-2.75-8.5-2.75-2.625 0-5.063 0.688-7.188 1.875zM23.625 19.625c-1.25 2.625-3.813 4.563-7 4.813v5.938c5.75-0.313 10.625-3.938 12.688-9.063zM14.75 24.438c-4.188-0.563-7.313-4.125-7.313-8.438 0-2.563 1.188-4.875 2.938-6.438l-3.188-5c-3.438 2.688-5.688 6.813-5.688 11.438 0 7.563 5.875 13.75 13.25 14.375z" />
    </svg>
  );
};
export default PlotDonutIcon;
