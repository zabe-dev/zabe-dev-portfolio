import { HomePage } from './components/HomePage';
import { getAllPosts } from '../lib/blog';

export default function Home() {
  return <HomePage posts={getAllPosts().slice(0, 5)} />;
}
