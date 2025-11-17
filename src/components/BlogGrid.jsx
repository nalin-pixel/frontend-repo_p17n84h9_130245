import { useEffect, useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL || '';

export default function BlogGrid(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/blogs`);
        const data = await res.json();
        if (Array.isArray(data)) setPosts(data);
      } catch (e) {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Helpful Tips & Updates</h2>
        {loading && <div className="text-gray-600">Loading...</div>}
        {!loading && posts.length === 0 && (
          <div className="text-gray-600">No posts yet. Check back soon!</div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p._id} className="p-6 rounded-xl bg-white border border-gray-200">
              <div className="text-xs uppercase tracking-wide text-gray-500">{p.tags?.join(', ')}</div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
