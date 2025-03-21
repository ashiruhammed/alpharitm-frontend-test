import { Marquees } from '@/components/custom/marque';
import LogoIcon from '@/components/icons/logo';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { TextShimmer } from '@/components/ui/text-shimmer';

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-sans)]'>
      <div className='bg-[url(/images/hero-section-bg.png)] bg-cover bg-center'>
        <div className='mx-auto max-w-[1300px]'>
          <div className='md:pt-[45px] pt-5 md:px-[70px] px-5 flex justify-between font-medium'>
            <LogoIcon />
            <ul className='text-white flex items-center text-base space-x-6'>
              <li>Models</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Custom Models</li>
            </ul>
            <div className='flex gap-3'>
              <Button className='rounded-[4px] bg-transparent border border-white px-7'>
                Login
              </Button>
              <Button className='rounded-[4px]' variant={'outline'}>
                Get Started Now
              </Button>
            </div>
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
              <p className='tracking-[-2px] text-white md:text-[22px] md:mt-6 mt-2 text-[16px] md:max-w-[860px] max-w-[400px] text-center mx-auto md:leading-[38px]'>
                Leverage the power of AI to automate, analyze, and optimize your
                workflows. Our specialized models are designed to fit different
                business needs
              </p>
            </BlurFade>

            <div className='flex justify-center md:mt-6 mt-4 md:pb-[116px]'>
              <BlurFade delay={0.4} inView>
                <RainbowButton className='rounded-[12px] font-semibold hover:scale-[1.1] duration-100 transition-all px-7 py-[14px] text-[#05152C] bg-white'>
                  Get Started Now
                </RainbowButton>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-6 md:space-y-8 space-y-5'>
        <p className='text-[#667085] text-base leading-6 font-medium text-center'>
          Join 4,000+ companies already growing
        </p>
        <Marquees />
      </div>
    </div>
  );
}
