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
  onChange?: (tabId: string, index: number) => void;
}

export function AnimatedTabs({
  tabs,
  defaultTab,
  onChange,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Pass both the id and index to the onChange handler
    const activeIndex = tabs.findIndex((tab) => tab.id === tabId);
    onChange?.(tabId, activeIndex);
  };

  return (
    <div className='relative w-full md:max-w-fit mx-auto overflow-hidden'>
      <div className='overflow-x-auto scrollbar-hide border border-[#E4E4E7] rounded-[12px] p-1'>
        <div className='flex whitespace-nowrap space-x-1 min-w-full px-1'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`
                relative rounded-[8px] px-3 py-1.5 text-base font-semibold
                transition-colors duration-200 ease-in-out
                flex-shrink-0
                ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-[#667085] hover:text-[#4B5563]'
                }
                focus-visible:outline-2 cursor-pointer
              `}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}>
              {activeTab === tab.id && (
                <motion.span
                  layoutId='bubble'
                  className='absolute inset-0 z-[1] bg-gradient-to-r from-[#0A2FB8] to-[#03217F]'
                  style={{ borderRadius: '8px' }}
                  transition={{
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                />
              )}
              {hoveredTab === tab.id && activeTab !== tab.id && (
                <motion.span
                  layoutId='hover-bubble'
                  className='absolute inset-0 z-[1] bg-gradient-to-r from-[#E5E7EB] to-[#F3F4F6]'
                  style={{ borderRadius: '8px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.4,
                  }}
                />
              )}
              <span className='relative z-[2] transition-colors duration-200 whitespace-nowrap'>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
