import ChatGPTIcon from '@/assets/tools/ChatGPTIcon';
import IntelliJIDEAIcon from '@/assets/tools/IntelliJIDEAIcon';
import JunieIcon from '@/assets/tools/JunieIcon';
import MacOSIcon from '@/assets/tools/MacOSIcon';
import PostmanIcon from '@/assets/tools/PostmanIcon';
import SlackIcon from '@/assets/tools/SlackIcon';
import VSCodeIcon from '@/assets/tools/VSCodeIcon';
import VercelIcon from '@/assets/tools/VercelIcon';

import IconLink from '@/components/about/IconLink';

const tools = [
  [IntelliJIDEAIcon, 'https://www.jetbrains.com/idea/'],
  [VSCodeIcon, 'https://code.visualstudio.com/'],
  [MacOSIcon, 'https://www.apple.com/macos/'],
  [ChatGPTIcon, 'https://chat.openai.com/'],
  [JunieIcon, 'https://www.jetbrains.com/junie/'],
  [PostmanIcon, 'https://www.postman.com/'],
  [SlackIcon, 'https://slack.com/'],
  [VercelIcon, 'https://vercel.com/'],
] as const;

const Tools = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-3xl text-lunar-gray font-bold text-center'>
        <span className='text-stellar-gold'>Tools</span> I use
      </p>
      <div className='flex flex-wrap justify-center gap-10 text-lunar-gray'>
        {tools.map(([Icon, link], index) => (
          <IconLink key={index} to={link} icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
