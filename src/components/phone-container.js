import React from "react";

function PhoneContainer({
  className,
  innerClassName,
  width,
  height,
  children,
}) {
  const inlineStyle = {
    width: width,
    height: height,
  };

  return (
    <div className={`phone-container ${className}`} style={inlineStyle}>
      <div className={`phone-mask ${innerClassName}`}>{children}</div>
    </div>
  );
}

export default PhoneContainer;
