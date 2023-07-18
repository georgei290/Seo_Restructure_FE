import React from "react";
import { Helmet } from "react-helmet-async";

interface iData {
  content: string;
  path: string;
  title: string;
}

const MetaComponents: React.FC<iData> = ({ content, path, title }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={content} />
        <title>{title}</title>
        <link rel="canonical" href={path} />
      </Helmet>
    </div>
  );
};

export default MetaComponents;
