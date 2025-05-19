'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { skill: 'Languages', buttonClassNames: 'rounded-tl-full', textClassNames: '-translate-x-5' },
  { skill: 'Front', buttonClassNames: 'rounded-tr-full', textClassNames: 'translate-x-3 translate-y-1' },
  { skill: 'Back', buttonClassNames: 'rounded-bl-full', textClassNames: 'translate-x-8 -translate-y-3' },
  { skill: 'Tools', buttonClassNames: 'rounded-br-full', textClassNames: 'translate-x-3 -translate-y-3' },
];

const skillsLogos = {
  ['Languages' as string]: [
    {
      name: 'JavaScript',
      image: '/logos/js-logo.png',
    },
    {
      name: 'TypeScript',
      image: '/logos/ts-logo.png',
    },
    {
      name: 'Python',
      image: '/logos/python-logo.png',
    },
    {
      name: 'C#',
      image: '/logos/csharp-logo.png',
    },
    {
      name: 'PHP',
      image: 'data:image/png;base64,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',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Front' as string]: [
    {
      name: 'HTML5',
      image: '/logos/html5-logo.png',
    },
    {
      name: 'CSS3',
      image: '/logos/css-logo.png',
    },
    {
      name: 'ReactJS',
      image: '/logos/react-logo.png',
    },
    {
      name: 'NextJS',
      image: '/logos/nextjs-logo.png',
    },
    {
      name: 'Native',
      image: '/logos/rnative-logo.png',
    },
    {
      name: 'TailwindCSS',
      image: '/logos/tailwindcss-logo.jpg',
    },
    {
      name: 'Sass',
      image: '/logos/sass-logo.png',
    },
    {
      name: 'JQuery',
      image: '/logos/jquery-logo.webp',
    },
    {
      name: 'Svelte',
      image: '/logos/svelte-logo.png',
    },
    {
      name: 'Bootstrap',
      image: '/logos/bootstrap-logo.svg',
    },
    {
      name: 'MaterialUI',
      image: '/logos/materialui-logo.png',
    },
    {
      name: 'LeafletJS',
      image: '/logos/leaflet-logo.jpg',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Back' as string]: [
    {
      name: 'NodeJS',
      image: '/logos/nodejs-logo.png',
    },
    {
      name: 'ExpressJS',
      image: '/logos/express-logo.png',
    },
    {
      name: 'NestJS',
      image: '/logos/nestjs-logo.png',
    },
    {
      name: 'MongoDB',
      image: '/logos/mongodb-logo.webp',
    },
    {
      name: 'PostgresSql',
      image: '/logos/postgres-logo.png',
    },
    {
      name: 'Firebase',
      image: '/logos/firebase-logo.jpg',
    },
    {
      name: 'Heroku',
      image: '/logos/heroku-logo.webp',
    },
    {
      name: 'DigitalOcean',
      image: '/logos/digital-ocean-logo.svg',
    },
    {
      name: 'Stripe',
      image: '/logos/stripe-logo.png',
    },
    {
      name: 'Paypal',
      image: '/logos/paypal-logo.png',
    },
    {
      name: 'MercadoPago',
      image: '/logos/mercadopago-logo.webp',
    },
    {
      name: 'awsS3',
      image: '/logos/s3-logo.png',
    },
    {
      name: 'StrapiCMS',
      image: '/logos/strapi-cms-logo.png',
    },
    {
      name: 'SanityCMS',
      image: '/logos/sanity-cms-logo.png',
    },
    {
      name: 'DatoCMS',
      image: '/logos/dato-cms-logo.png',
    },
  ],
  ['Tools' as string]: [
    {
      name: 'Git',
      image: '/logos/git-logo.png',
    },
    {
      name: 'Github',
      image: '/logos/github-logo.webp',
    },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    {
      name: 'EsLint',
      image: '/logos/eslint-logo.png',
    },
    {
      name: 'Redux',
      image: '/logos/redux-logo.png',
    },
    {
      name: 'Figma',
      image: '/logos/figma-logo.webp',
    },
    {
      name: 'SocketIO',
      image: '/logos/socketio-logo.webp',
    },
    {
      name: 'Mailchimp',
      image: '/logos/mailchimp-logo.webp',
    },
    {
      name: 'Postmark',
      image: '/logos/postmark-logo.png',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
};

const skillsTitles = {
  ['Languages' as string]: 'Programming Languages',
  ['Front' as string]: 'Frontend',
  ['Back' as string]: 'Backend',
  ['Tools' as string]: 'Tools',
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Languages');
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px]">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker w-[325px] m-[10px] h-[325px] col-span-3 row-span-3 place-self-center isolate">
          <div className="rounded-full inset-6 absolute grid grid-cols-2 p-2 gap-2 rotate-45">
            {skills.map((skill) => (
              <button onClick={handleChangeSkill} key={skill.skill} className={clsx('rounded-[500px] skills-buttons', skill.buttonClassNames, activeSkill === skill.skill && 'skills-buttons-active')}>
                <p className={clsx('text-3xl text-white font-semibold tracking-wide w-min -rotate-45', skill.textClassNames)}>
                  {skill.skill}
                  <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === skill.skill ? 'h-[18px]' : 'h-[2px]')}></span>
                </p>
              </button>
            ))}
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[115px] w-24" />;

          return (
            <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
              <div className="mt-auto">
                <Image
                  src={skill.image}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
