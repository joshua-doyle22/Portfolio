import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a <span className="text-about_me_green">software developer</span> specialized on <span className="text-about_me_green">Web Applications</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Joshua Doyle</h3>
            <p className="text-base leading-7 text-about_me_green">Full-stack Developer</p>
            <p className="mt-4 text-lg text-gray-500">Here is an experienced software engineer who constantly seeks out innovative solutions to everyday problems, Joshua Doyle.</p>
            <p className="mt-4 text-lg text-gray-500">After several years in these industry, I have worked with multiple front-end and back-end technologies, AI customized and Data Visualization.</p>
          </div>
          {/* <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/me.jpg" alt="" height={208} width={208} />
          </div> */}
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Spanish</p> - <p className="text-gray-500">Basic</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">German</p> - <p className="text-gray-500">Communication</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="data:image/jpeg;base64,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" alt="" width={144} height={144} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">B.S. in Computer Science and Technology</h3>
                    <p className="text-base leading-7 text-about_me_green">University of Mount Union</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
