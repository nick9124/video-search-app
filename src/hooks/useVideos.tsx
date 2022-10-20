import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm: string) => {
  const [videos, setVideos] = useState<any>([]);

  useEffect((): void => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
