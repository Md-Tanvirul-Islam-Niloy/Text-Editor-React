import React, { useEffect, useState } from 'react';

const About = (props) => {
  const [bgColor, setBgColor] = useState('bg-[#8d99ae]');
  useEffect(() => {
    if (props.Darkmode) {
      setBgColor('bg-[#8d99ae]');
    } else {
      setBgColor('bg-[#124559]');
    }
  }, [props.Darkmode]);

  const profilePictureUrl = 'https://media.licdn.com/dms/image/D5603AQEi5le4uvssqA/profile-displayphoto-shrink_400_400/0/1673462853956?e=1694044800&v=beta&t=gcM0cyycZ0-njOLVfhElIiDq-YQU3i3jwsl4sfAkC_k';
  const profileLinkUrl = 'https://www.linkedin.com/in/mohammad-tanvirul-islam-niloy-943834217/';
  return (
    <div className={`${bgColor} py-10 h-screen w-screen`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">About Me</h2>
        <a href={profileLinkUrl} className='flex items-center justify-center'>
            <img src={profilePictureUrl} alt="Profile" className="w-64 h-64 rounded-full mb-4" />
        </a>
        <p className="text-lg text-black flex items-center justify-center whitespace-pre">
          Hi! I am <a href='https://www.facebook.com/profile.php?id=100009705485456'><strong className=' text-blue-500 hover:text-blue-800'>TanVir.</strong></a>
        </p>
        <p className="text-lg text-black mt-4 flex items-center justify-center whitespace-pre">
          CSE Student at <a href='http://www.northsouth.edu/'><strong className=' text-blue-500 hover:text-blue-800'>North South University.</strong></a>
        </p>
      </div>
    </div>
  );
};

export default About;
