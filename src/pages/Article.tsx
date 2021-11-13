import { ArticleComponent } from 'components/Article';
import { Comments } from 'components/Comments';
import React from 'react';

export const Article: React.FC = () => {
  return (
    <div>
      <ArticleComponent />
      <Comments />
    </div>
  );
};
