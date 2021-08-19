import React from "react";

function PhoneContainer({
  className,
  innerClassName,
  width,
  height,
  children,
}) {
  const inlineStyle = {
    // width: width,
    // height: height,
  };

  return (
    <div className={`phone-container ${className}`} style={inlineStyle}>
      <svg
        width={height}
        height={width}
        id="mask"
        viewBox="0 0 377 691"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M95.6268 0.133789H64.8284C29.5589 0.133789 0.967285 28.7255 0.967285 63.995V626.574C0.967285 661.844 29.5589 690.435 64.8284 690.435H312.172C347.441 690.435 376.033 661.843 376.033 626.574V63.9949C376.033 28.7254 347.441 0.133789 312.172 0.133789H269.764V12.3701C269.764 19.6673 263.849 25.5828 256.552 25.5828H108.839C101.542 25.5828 95.6268 19.6673 95.6268 12.3701V0.133789Z"
          fill="black"
        />
      </svg>
      <div className={`phone-mask ${innerClassName}`}>
        <div className="phone-children">{children}</div>
      </div>
    </div>
  );
}

export default PhoneContainer;
