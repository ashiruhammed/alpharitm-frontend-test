'use client';

import { AnimatedTabs } from '@/components/ui/animated-tabs';
import { Carousel } from '@/components/ui/carousel';
import { useState } from 'react';

const tabs = [
  { id: 'world', label: 'Market Prediction' },
  { id: 'finance', label: 'Finance' },
  { id: 'business', label: 'Analytics' },
  { id: 'arts', label: 'Content Generation' },
  { id: 'science', label: 'Customer Support' },
];

const tabContent = [
  {
    title: 'Mystic Mountains',
    button: 'Explore Component',
    src: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Urban Dreams',
    button: 'Explore Component',
    src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Neon Nights',
    button: 'Explore Component',
    src: 'https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Desert Whispers',
    button: 'Explore Component',
    src: 'https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col items-center gap-8 w-full'>
      <div className='w-full flex items-center justify-center p-4'>
        <AnimatedTabs
          tabs={tabs}
          defaultTab={activeTab}
          onChange={(tabId, index) => {
            setActiveTab(tabId);
            setActiveIndex(index);
          }}
        />
      </div>

      <div className='w-full max-w-7xl mx-auto px-4 mt-12'>
        <Carousel slides={tabContent} initialIndex={activeIndex} />
      </div>
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
