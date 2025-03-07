import React from 'react'

import IMGPHOTO from '../assets/image 265.png'

const ResumeTemplate = () => {
  return (
    <div className='max-w-4xl mx-auto bg-white p-8 font-sans'>
      <div className='flex justify-between mb-8'>
        <div className='flex gap-[65px]'>
          <p className='text-sm mb-4'>Product Designer</p>

          <div className='flex gap-4 text-xs'>
            <span>LinkedIn</span>
            <span className='text-[#00000066]'>|</span>
            <span>Dribbble</span>
            <span className='text-[#00000066]'>|</span>

            <span>Behance</span>
          </div>
        </div>

        <div className='text-right text-xs'>
          <p>San Francisco, California</p>
          <p>hello@gmail.com</p>
          <p>(415) 555-5775</p>
        </div>
      </div>

      <div className='flex items-center gap-[5.5rem] mb-12'>
        <div className='relative w-20 h-20 overflow-hidden rounded-full border-2 border-gray-200'>
          <img
            src={IMGPHOTO}
            alt='Profile Photo'
            className='object-cover w-full h-full'
          />
        </div>

        <div>
          <h1 className='text-4xl font-bold uppercase'>JEFF</h1>
          <h1 className='text-4xl font-bold uppercase'>MARTABANO</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-1'>
          <div className='mb-[54px]'>
            <h1 className='text-md uppercase tracking-wider text-[#00000080]'>
              Profile
            </h1>
          </div>

          <div className='mb-[378px]'>
            <h1 className='text-md uppercase tracking-wider text-[#00000080]'>
              Experience
            </h1>
          </div>

          <div className='pt-[235px]'>
            <div className='mb-[45px]'>
              <h1 className='text-md uppercase tracking-wider text-[#00000080]'>
                Education
              </h1>
            </div>

            <div className='mb-[45px]'>
              <h1 className='text-md uppercase tracking-wider text-[#00000080]'>
                Languages
              </h1>
            </div>

            <div>
              <h1 className='text-md uppercase tracking-wider text-[#00000080]'>
                Skills
              </h1>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className='col-span-4'>
          {/* Profile Section */}
          <div className='mb-12'>
            <p className='text-sm'>
              UX/UI specialist focused on designing clean and functional
              projects across all platforms and devices in response to specific
              briefs and problems, while always maintaining a unique look and
              feel.
            </p>
          </div>

          {/* Experience Section */}
          <div className='mb-12 space-y-8'>
            <div>
              <h3 className='font-bold'>Product Designer, Uber</h3>
              <p className='text-xs mb-2'>Mar 2018 - Present</p>
              <ul className='list-disc pl-5 text-sm space-y-1'>
                <li>
                  Designed safety-focused experiences for Riders and Drivers
                </li>
                <li>
                  Physical safety features having and it's interaction with the
                  digital
                </li>
                <li>
                  Navigated organization to achieve operational improvements
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold'>Product Designer, IFTTT</h3>
              <p className='text-xs mb-2'>Dec 2015 - Mar 2018</p>
              <ul className='list-disc pl-5 text-sm space-y-1'>
                <li>Product and system design for a complex product</li>
                <li>Designed both consumer and developer products for IFTTT</li>
                <li>
                  Worked across multiple platforms including mobile, desktop,
                  and web
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold'>Product Designer, Facebook</h3>
              <p className='text-xs mb-2'>June 2013 - Sep 2015</p>
              <ul className='list-disc pl-5 text-sm space-y-1'>
                <li>Designed and prototyped internal tools</li>
                <li>Worked with Privacy team to build assets and features</li>
                <li>Redesigned Newsfeed curation experiences for mobile</li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold'>UX/UI Design Intern, Google Maps</h3>
              <p className='text-xs mb-2'>June 2012 - Sep 2013</p>
              <ul className='list-disc pl-5 text-sm space-y-1'>
                <li>
                  Contributed to Maps on iOS wireframe and user experience
                </li>
                <li>Designed and prototyped onboarding experience</li>
                <li>Asset and feature design for Maps on Android</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className='mb-12'>
            <h3 className='font-bold'>Rhode Island School of Design</h3>
            <p className='text-sm'>BFA Industrial Design, Class of 2013</p>
          </div>

          {/* Languages Section */}
          <div className='mb-12'>
            <p className='text-sm'>English: C2 | Italian: B2</p>
          </div>

          {/* Skills Section */}
          <div>
            <p className='text-sm tracking-wider'>
              Figma &nbsp; <span className='text-[#00000066]'>|</span> &nbsp;
              Sketch &nbsp; <span className='text-[#00000066]'>|</span> &nbsp;
              Photoshop &nbsp; <span className='text-[#00000066]'>|</span>
              &nbsp; Illustrator &nbsp;{' '}
              <span className='text-[#00000066]'>|</span> &nbsp; Adobe XD &nbsp;{' '}
              <span className='text-[#00000066]'>|</span> &nbsp; Principle
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeTemplate
