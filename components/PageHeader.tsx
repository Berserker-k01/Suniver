import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center -mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;