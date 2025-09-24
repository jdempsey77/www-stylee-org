import { getAllTags } from '@/lib/blog/utils';

interface BlogHeaderProps {
  title: string;
  description: string;
  showFilters?: boolean;
  selectedTag?: string;
  onTagSelect?: (tag: string | null) => void;
}

export default function BlogHeader({ 
  title, 
  description, 
  showFilters = false, 
  selectedTag,
  onTagSelect 
}: BlogHeaderProps) {
  const tags = getAllTags();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => onTagSelect?.(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                !selectedTag
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-500 text-white hover:bg-blue-400'
              }`}
            >
              All Posts
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagSelect?.(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedTag === tag
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-500 text-white hover:bg-blue-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

