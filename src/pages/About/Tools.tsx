import ChatGPTIcon from '@/assets/tools/ChatGPTIcon';
import IntelliJIDEAIcon from '@/assets/tools/IntelliJIDEAIcon';
import JunieIcon from '@/assets/tools/JunieIcon';
import MacOSIcon from '@/assets/tools/MacOSIcon';
import PostmanIcon from '@/assets/tools/PostmanIcon';
import SlackIcon from '@/assets/tools/SlackIcon';
import VSCodeIcon from '@/assets/tools/VSCodeIcon';

const tools = [IntelliJIDEAIcon, VSCodeIcon, MacOSIcon, ChatGPTIcon, JunieIcon, PostmanIcon, SlackIcon];

const Tools = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-3xl text-lunar-gray font-bold text-center'>
        <span className='text-stellar-gold'>Tools</span> I use
      </p>
      <div className='flex flex-wrap justify-center gap-10 text-lunar-gray'>
        {tools.map((Icon, index) => (
          <div key={index} className='border rounded-lg border-stellar-gold/80 px-15 py-5'>
            <Icon width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
