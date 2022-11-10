type Author = {
  name: string;
  picture: string;
};

type PostType = {
  idx: number;
  title: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
