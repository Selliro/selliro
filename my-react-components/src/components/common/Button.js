import React from 'react';
// round button
// <CommonButton type="rounded" url="/learn-more" text="Learn More" className="" dataText="Learn more"/>

// Text with icon
// <CommonButton type="text-with-icon" url="/watch" text={`Watch how\nwe work`} className="" text=""/>

// scroll below button
// <CommonButton type="scroll-indicator" url="#next-section"className="" />


const CommonButton = ({
  type = 'rounded', // 'rounded', 'text-with-icon', 'scroll-indicator'
  url = '#',
  text = '',
  className = '',
  dataText = '',
  arrow = false,
}) => {
  if (type === 'text-with-icon') {
    return (
      <a href={url} className={`flex items-center gap-2 text-gray-800 font-semibold ${className}`}>
        <div className="leading-tight">
          {text.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <span className="text-lg"><i class="fa-solid fa-play"></i></span>
      </a>
    );
  }

  if (type === 'scroll-indicator') {
    return (
      <a
        href={url}
        className={`w-10 h-16 border-gray-300 rounded-full flex items-center justify-center ${className}`}
      >
       {text} <i className="fa-solid fa-play"></i>
      </a>
    );
  }

  if( type === 'submit'){
    return (
         <button type="submit" className={`wc-btn wc-btn-primary btn-text-flip ${className}`}>
            <span data-text={dataText}>{text}</span>                                
            <p className="icon invert ml-10">
                <img src="assets/img/arrow-top-right.svg" alt="" />
            </p>
        </button>
    )
  }

  // default: rounded button
  return (
    <a
      href={url}
      className={`bg-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-700 transition ${className}`}
    >
      <span data-text={dataText}>{text}</span> 
      {arrow && (
        <p className="icon invert ml-10">
          <img src="assets/img/arrow-top-right.svg" alt="" />
        </p>
      )}
    </a>
  );
};

export default CommonButton;
