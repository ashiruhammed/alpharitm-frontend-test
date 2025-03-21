'use client';
import { Marquees } from '@/components/custom/marque';
import SectionTab from '@/components/custom/section-tab';
import LogoIcon from '@/components/icons/logo';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { useState } from 'react';

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-sans)]'>
      <div className='bg-[url(/images/hero-section-bg.png)] bg-cover bg-center'>
        <Header />
      </div>
      <div className='bg-white py-6 md:space-y-8 space-y-5'>
        <BlurFade delay={0.5} inView>
          <p className='text-[#667085] text-base leading-6 font-medium text-center animate-fade-in'>
            Join 4,000+ companies already growing
          </p>
        </BlurFade>

        <Marquees />

        <div>
          <BlurFade delay={0.6} inView>
            <h1 className='text-[26px] tracking-[-2px] md:text-[50px] text-center mx-auto md:leading-[62px] font-medium md:mt-[96px] max-w-[644px] mt-5 animate-slide-up'>
              AI Models tailored for your business needs
            </h1>
          </BlurFade>

          <BlurFade delay={0.7} inView>
            <p className='md:text-[22px] text-base mt-2 text-center max-w-[860px] mx-auto px-3 text-[#828282] animate-fade-in'>
              Leverage the power of AI to automate, analyze, and optimize your
              workflows. Our specialized models are designed to fit different
              business needs
            </p>
          </BlurFade>
          <SectionTab />
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='mx-auto max-w-[1300px]'>
      <div className='md:pt-[45px] pt-5 md:px-[70px] px-5 flex items-center justify-between font-medium relative'>
        <BlurFade delay={0} inView>
          <LogoIcon className='animate-fade-in w-[120px] md:w-auto' />
        </BlurFade>

        {/* Mobile Menu Button - Always visible */}
        <button
          className='md:hidden text-white p-2 z-[60] fixed right-5'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center text-base space-x-6 text-white'>
          {['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'].map(
            (item, index) => (
              <BlurFade key={item} delay={0.1 * index} inView>
                <li className='hover:text-blue-200 transition-colors duration-300 cursor-pointer'>
                  {item}
                </li>
              </BlurFade>
            )
          )}
        </ul>

        {/* Mobile Navigation */}
        <div
          className={`
          md:hidden 
          fixed 
          inset-0 
          bg-black/90 
          z-50 
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className='pt-20 px-5'>
            <ul className='flex flex-col items-center space-y-6 text-white text-lg'>
              {[
                'Models',
                'Pricing',
                'About Us',
                'Contact Us',
                'Custom Models',
              ].map((item, index) => (
                <BlurFade key={item} delay={0.1 * index} inView>
                  <li className='hover:text-blue-200 transition-colors duration-300 cursor-pointer'>
                    {item}
                  </li>
                </BlurFade>
              ))}
              {/* Add mobile buttons */}
              <li className='pt-6 flex flex-col gap-4 w-full'>
                <Button className='w-full rounded-[4px] bg-transparent border border-white hover:bg-white/10 transition-all duration-300'>
                  Login
                </Button>
                <Button
                  className='w-full text-black rounded-[4px] hover:scale-105 transition-all duration-300'
                  variant={'outline'}>
                  Get Started Now
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Buttons */}
        <BlurFade delay={0.5} inView>
          <div className='hidden md:flex gap-3'>
            <Button className='rounded-[4px] bg-transparent border border-white px-7 hover:bg-white/10 transition-all duration-300'>
              Login
            </Button>
            <Button
              className='rounded-[4px] hover:scale-105 transition-all duration-300'
              variant={'outline'}>
              Get Started Now
            </Button>
          </div>
        </BlurFade>
      </div>
      <div className='md:mt-12 mt-5 md:px-[70px] px-5'>
        <div className='max-w-fit mx-auto'>
          <BlurFade delay={0} inView>
            <TextShimmer
              duration={1.8}
              className='text-base font-bold [--base-color:#7191FF] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:#7191FF] dark:[--base-gradient-color:#7191FF]'>
              Leverage on Automation
            </TextShimmer>
          </BlurFade>
        </div>
        <BlurFade delay={0.1} inView>
          <h1 className='text-white text-[36px] tracking-[-2px] md:text-[76px] text-center mx-auto md:leading-[82px] font-semibold mt-2 max-w-[636px]'>
            AI Models for
          </h1>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <h1 className='text-white text-[36px] tracking-[-2px] md:text-[76px] text-center mx-auto md:leading-[82px] font-semibold mt-2 max-w-[636px]'>
            Business Solutions
          </h1>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className='md:tracking-[-2px] text-white md:text-[22px] md:mt-6 mt-2 text-[16px] md:max-w-[860px] max-w-[400px] text-center mx-auto md:leading-[38px]'>
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our specialized models are designed to fit different
            business needs
          </p>
        </BlurFade>

        <div className='flex justify-center md:mt-6 mt-4 md:pb-[116px] pb-10'>
          <BlurFade delay={0.4} inView>
            <RainbowButton className='rounded-[12px] font-semibold hover:scale-[1.1] duration-100 transition-all px-7 py-[14px] text-[#05152C] bg-white'>
              Get Started Now
            </RainbowButton>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
