import NavBar from '../components/NavBar';
import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    image: '/regularinUse.jpg',
    link: '/p4',
    title: 'AI File Organizer',
    description: 'Local LLM file management'
  },
  {
    image: '/cave.jpg',
    link: '/p1',
    title: 'Grand Caverns Sim',
    description: '3D cave simulation'
  },
  {
    image: '/web.jpg',
    link: '/p2',
    title: 'First Website',
    description: 'HTML & CSS static site'
  },
  {
    image: '/google-calendar.jpg',
    link: '/p3',
    title: 'Canvas To-Do List',
    description: 'Canvas API integration',
    brightness: 1.6
  }
];

export default function Projects() {
  return (
    <main id="main-content" className="bg-black w-full h-screen flex flex-col">
      <NavBar textColor="text-white" />
      <div className="flex-1 w-full min-h-0">
        <InfiniteMenu items={items} />
      </div>
    </main>
  );
}
