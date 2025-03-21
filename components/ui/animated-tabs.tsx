'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

export function AnimatedTabs({
  tabs,
  defaultTab,
  onChange,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className='flex space-x-1'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`
            relative rounded-[8px] px-3 py-1.5 text-base font-semibold
            text-[#A7A7A7] outline-ring transition
            focus-visible:outline-2 cursor-pointer
          `}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}>
          {activeTab === tab.id && (
            <motion.span
              layoutId='bubble'
              className='absolute inset-0 z-[1] bg-[#03217F]'
              style={{ borderRadius: 'var(--radius)' }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span
            className={`relative z-[2] ${
              activeTab === tab.id ? 'text-white' : ''
            }`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
