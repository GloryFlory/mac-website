'use client';

import { FC } from 'react';

interface ScheduleIframeProps {
  src: string;
  title: string;
}

const ScheduleIframe: FC<ScheduleIframeProps> = ({ src, title }) => {
  const handleLoad = () => {
    console.log('✅ FlowGrid iframe loaded successfully');
  };

  const handleError = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('❌ FlowGrid iframe failed to load:', e);
    console.error('Check your browser console for any errors');
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-brand-sand/30 shadow-lg">
      <iframe
        src={src}
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title={title}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ScheduleIframe;
