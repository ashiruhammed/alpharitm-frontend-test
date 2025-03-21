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
    title: 'Customer Support',
    content: 'Use AI chatbots for instant, personalized customer support.',
    src: 'https://s3-alpha-sig.figma.com/img/a854/985c/b00e36e53f6610266fd4ab13613adaba?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NINna0g1jOVexDI3FEdLNwB568ubibwMJUX3BrohT4pUUeXyB1fQrrFLYftKcPqMxrk6lp0EB3DbdanT9hF5QGC2KXnISqAzsrTyYsT7yyk6d-YbuBC5fbSYfI6XIZaI0kDaQ7QECZV7r5QWvBkOEtWfOGDBazsWetylV0frOnapQnpOPqihVHQkRZwwy-1y~m68HRNGHLInBgEcOse2uOE6-I7ThfPdKoLJSZSJ4DzV9r6Pv8y2qKek5paX7GhqWGV6dAkTLwf4XQNfEZQRyAIglsVLq9sYU8qvny6r0eyaTUl-D0xLakRi9Uuenn01EiLWC3TqOpCqXpYat92oBA__',
  },
  {
    title: 'Market Prediction',
    content:
      'Use AI insights for smarter business decisions and stay competitive.',
    src: 'https://s3-alpha-sig.figma.com/img/e4bf/e028/dbceff08952b718c33666514b3123c5a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kon2iHx8nfml5z62apvecEQD041k4aDSJe~zW0v95wCdlzeZaW9m6spEFYV~2U0JYMMnRdcV2u6v6TDBty2ST5CRDjQmNMebdihZhwx65G9~TKNqWn4WBgu9W6F1nXD-~DYVTHeX-mqqhUkeXz1pmr6CBdT4yeDNelcYJ-OfecNlOXRnBIMfMwN~pndg9DIGSjSvwS0~qZ-iiqevNrGST3UqyVKLYfPVv7Q~~~WScVFRKeXbyP8Q4i3-Fg5OWXWskG2wdfXjA3ITJwtU8T2vNVldlSmymqLho~wpnXgDBIqceBkkcpSHvFNwTUiQPZY1zBM8Rt2L1EiEdrBT8xvvmw__',
  },
  {
    title: 'Finance',
    content: 'Our AI models analyze financial data for confident investments.',
    src: 'https://s3-alpha-sig.figma.com/img/2a15/2dd0/db277136fff592ed8db8046f509332e0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cfZUDKVjkxY~u27u~8eOQCMiY39WMlDD5-52~YUsLnLdgnxW5lvcn1v-6W13NYVaYdWn0i397g33RtntHTtxMEJ09MPG884n2ecC5KuE0gXSaMmAj11usDuAEHXvTonHZRvEDcZ7CuSbcH6vMmfueuPVOCsTeDhVg-alLEefWUqqOVXM7TCDmoIyW-Lt7ME7LIZLvLN3ysjprHHlVnW8K0voc0aRrMQi42~KE7ES~sF15ID9bfCAnsN9aRinSC5FlhdWr-TE09ZjPJsHngau3wUpAGkTzYyotYLPXOQJKDV8ZjBRlBORzKuWv6D4sku9R5bhtqeaob9i64iJhr47gg__',
  },
  {
    title: 'Data Analytics',
    content:
      'Transform data into insights with AI analytics that enhance decisions.',
    src: 'https://s3-alpha-sig.figma.com/img/171d/b5d2/88425cd6a3261bc973937626e75f0b83?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J~C-mz4Rf693EcKIb38eMVpR8oJ0JCcvaa2I1khsnnrPZfpLpEeohyFzd5ku~8fa3U5niXNcc5ApIFAWA8ugqlP4BMPzURdR66T0-T9r~e74BF2I3H6TfjIBINFbpJNo2FBdSMPSIC39-HSy5c5q7-I9HfkTaGohDSz4vUtzbh1sTNNz-d0Fn2HLeL9B3tybfDoccjkVWkYl3b67ry7GTyGPgYLlpa-F~--dQDUPQVcrPaf5ZwOhb9DqpSxs9qfu2TRYr-wsw09QGPTmlnPOd8ilsTHXuErLdgccfF7aDEUNNkGWR-96owBpAVC2tGclq7rnldnwSDRJcu9rZx-CTg__',
  },
  {
    title: 'Content Generation',
    content:
      'Create quality content easily with AI that knows your brand and audience.',
    src: 'https://s3-alpha-sig.figma.com/img/f1a4/033d/8c5f580790df9a93f5cde8d49fe32534?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Osv04avb9HJjw0qmEMWkP0YAXYKp8yaird8l~S6sVBqxkEI9TGUmmb2O34lznz4l4fk9pJfa2bUvInm1BJ5WdfK9AxSX2zzwoE7IDdu3h3HwtGzAsgOX0aJFOac7Mvs-COaQ4bQH2qDczSRqIVxUiu54VguMbGZ6HV3b6oDDcWZ9tUJ4el-K60QupvBLnM4uR7iKgPzfThXOgDydsiJRTTmrCTVejcDkB4h5j3ROOusL8OfeidZYphEG2DtOatDx5fDcr9ryfV6v4rpUSchgtNyF14rANRik6fm3lZANLX9KsK~F-L84z9iPAJS7GXGzjTANp1KCMP4eUNj-JsMnsA__',
  },
  {
    title: 'Customer Support',
    content: 'Use AI chatbots for instant, personalized customer support.',
    src: 'https://s3-alpha-sig.figma.com/img/a854/985c/b00e36e53f6610266fd4ab13613adaba?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NINna0g1jOVexDI3FEdLNwB568ubibwMJUX3BrohT4pUUeXyB1fQrrFLYftKcPqMxrk6lp0EB3DbdanT9hF5QGC2KXnISqAzsrTyYsT7yyk6d-YbuBC5fbSYfI6XIZaI0kDaQ7QECZV7r5QWvBkOEtWfOGDBazsWetylV0frOnapQnpOPqihVHQkRZwwy-1y~m68HRNGHLInBgEcOse2uOE6-I7ThfPdKoLJSZSJ4DzV9r6Pv8y2qKek5paX7GhqWGV6dAkTLwf4XQNfEZQRyAIglsVLq9sYU8qvny6r0eyaTUl-D0xLakRi9Uuenn01EiLWC3TqOpCqXpYat92oBA__',
  },
  {
    title: 'Market Prediction',
    content:
      'Use AI insights for smarter business decisions and stay competitive.',
    src: 'https://s3-alpha-sig.figma.com/img/e4bf/e028/dbceff08952b718c33666514b3123c5a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kon2iHx8nfml5z62apvecEQD041k4aDSJe~zW0v95wCdlzeZaW9m6spEFYV~2U0JYMMnRdcV2u6v6TDBty2ST5CRDjQmNMebdihZhwx65G9~TKNqWn4WBgu9W6F1nXD-~DYVTHeX-mqqhUkeXz1pmr6CBdT4yeDNelcYJ-OfecNlOXRnBIMfMwN~pndg9DIGSjSvwS0~qZ-iiqevNrGST3UqyVKLYfPVv7Q~~~WScVFRKeXbyP8Q4i3-Fg5OWXWskG2wdfXjA3ITJwtU8T2vNVldlSmymqLho~wpnXgDBIqceBkkcpSHvFNwTUiQPZY1zBM8Rt2L1EiEdrBT8xvvmw__',
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

      <div className='w-[100vw] max-w-full overflow-hidden'>
        <div className='w-full max-w-7xl  mx-auto px-4 mt-12'>
          <Carousel slides={tabContent} initialIndex={activeIndex} />
        </div>
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
