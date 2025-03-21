'use client';

import { AnimatedTabs } from '@/components/ui/animated-tabs';

const tabs = [
  { id: 'world', label: 'Market Prediction' },
  { id: 'finance', label: 'Finance' },
  { id: 'business', label: 'Analytics' },
  { id: 'arts', label: 'Content Generation' },
  { id: 'science', label: 'Customer Support' },
];

function Tabs() {
  return (
    <div className='flex min-h-[100px] w-full items-center justify-center p-4'>
      <AnimatedTabs
        tabs={tabs}
        onChange={(tabId) => console.log('Tab changed:', tabId)}
      />
    </div>
  );
}

export default function SectionTab() {
  return (
    <div className='bg-white'>
      <Tabs />
    </div>
  );
}
