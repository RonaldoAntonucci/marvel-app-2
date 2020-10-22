import { useState } from 'react';

interface Comic {
  id: string;
  title: string;
  issueNumber: string;
  description?: string;

  thumbnail: string;
}

interface useComicsData {
  comics: Comic[];
}

const data: Comic[] = [
  {
    id: '19713',
    title: 'Marvel Team-Up (1972) #89',
    issueNumber: '89',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/5762e1ea5c85d.jpg',
  },
  {
    id: '19713',
    title: 'Marvel Team-Up (1972) #89',
    issueNumber: '89',
    thumbnail:
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '19713',
    title: 'Marvel Team-Up (1972) #89',
    issueNumber: '89',
    thumbnail:
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '19713',
    title: 'Marvel Team-Up (1972) #89',
    issueNumber: '89',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/5762e1ea5c85d.jpg',
  },
];

const useComics = (): useComicsData => {
  const [comics] = useState<Comic[]>(data);

  return { comics };
};

export default useComics;
