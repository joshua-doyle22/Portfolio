import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Software Engineer | Lieberlieber',
    date: '2008  - 2018',
    description: [
      'Developed front-end user interface using JavaScript for Web Applications.',
      'Developed back-end using Nodejs, PHP, Python and C#.',
      'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.',
    ],
    image: { url: 'data:image/png;base64,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', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Data Analyst | GlobalLogic',
    date: '2019 - 2024',
    description: [
      'Design and Develop Visual Dashboards',
      'Collaborate with Data and Product Teams',
      'Storytelling with Data',
      'Integrating with Web and Custom AI',
    ],
    image: { url: 'data:image/jpeg;base64,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KFfFnLIqvoRXJ5K8FF1XhTbDNuLuQBOCD1dy8MJDoMMscEwuPEVh7GRZhG7Li4cxu5c2qXJqFyXh8S1M7hHLMyE7T6Lx9+29+91mYu3B2S89R0Pyyu46V84/OhO6rJWUrd/yUjo1dtQ2zck4AA6Qd4ncWnlu8x5r7PZ0t4zX2MSM3kd0YcGnH9WftjwU+tqtytBJFDM5ofjmHHLeeeXlnKxjULrWFgtzhhzkcQ4OeqYqP9Rg2i74v19ik7QWuMjK9p0kjHyxBhixvezBIHM9QT9FLuwNrW5YGScURuLd+MZI6rLV1KzWn4wdxH7nPHEJOHnq7r1WmSScnmVE3Ta4VY0pxqp8bujJXnmrSiWvI6OQdHNOCt2xruqWYjFNckLDyIGG5+inIoU5JWTNJU4Sd2k2ERFJYREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=', height: 34, width: 110, className: '' },
  },
  
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
