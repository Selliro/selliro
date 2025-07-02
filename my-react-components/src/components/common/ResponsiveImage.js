import React from 'react';

// How to pass data in component
{/* <ResponsiveImage desktopImage="/images/hero-desktop.jpg" alt="Hero banner" aspectRatio={0.6}/> */}

const ResponsiveImage = ({
  desktopImage,
  mobileImage,
  alt = '',
  aspectRatio = '16/9', // e.g. '16/9' or 0.75
  className = '',
  style = {},
  loading = 'lazy',
}) => {
  // Fallback mobile image to desktop if not provided
  const mobileSrc = mobileImage || desktopImage;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ ...style }}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img
          src={desktopImage}
          alt={alt}
          loading={loading}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;
