import React from 'react';
const PlotCandleIcon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="M11.563 4.688h-2.25v-4c0.063-0.188 0-0.313-0.125-0.438-0.063-0.125-0.25-0.25-0.375-0.25h-1.375c-0.188 0-0.375 0.063-0.5 0.188-0.188 0.125-0.25 0.313-0.25 0.5v4h-2c-0.938 0-2-0.438-2 1.313v20c0.125 1.063 0.938 1.875 2 2h2v3.313c0 0.188 0.063 0.375 0.25 0.5 0.125 0.125 0.313 0.188 0.5 0.188h1.375c0.125 0 0.313-0.125 0.375-0.25 0.125-0.125 0.188-0.25 0.125-0.438v-3.313h2.25c1-0.125 1.75-1 1.75-2v-20c0-0.938-0.875-1.313-1.75-1.313zM11.313 26h-6.625v-19.313h6.625zM27.563 8.688h-2.25v-8c0.063-0.188 0-0.313-0.125-0.438-0.063-0.125-0.25-0.25-0.375-0.25h-1.375c-0.188 0-0.375 0.063-0.5 0.188-0.188 0.125-0.25 0.313-0.25 0.5v8h-2c-0.938 0-2-0.438-2 1.313v12c0.125 1.063 0.938 1.875 2 2h2v7.313c0 0.188 0.063 0.375 0.25 0.5 0.125 0.125 0.313 0.188 0.5 0.188h1.375c0.125 0 0.313-0.125 0.375-0.25 0.125-0.125 0.188-0.25 0.125-0.438v-7.313h2.25c1-0.125 1.75-1 1.75-2v-12c0-0.938-0.875-1.313-1.75-1.313z" />
    </svg>
  );
};
export default PlotCandleIcon;
