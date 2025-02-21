import Image from 'next/image';
import Link from 'next/link';

// Sample blog posts - replace with actual data from your backend
const blogPosts = [
  {
    id: 'tips-for-first-time-pet-adopters',
    title: 'Tips for First-Time Pet Adopters',
    excerpt: 'Essential advice for making your new pet feel at home and adjusting to life together.',
    content: `Bringing a new pet home is an exciting experience, but it can also be overwhelming for both you and your new companion. Here are some essential tips to help make the transition smoother...`,
    image: '/blog/adoption-tips.jpg',
    date: '2024-02-10',
    author: 'Maria Papadopoulos',
    category: 'Adoption Tips',
    tags: ['adoption', 'pets', 'tips', 'first-time adopters'],
  },
  {
    id: 'success-story-luna-finds-her-forever-home',
    title: 'Success Story: Luna Finds Her Forever Home',
    excerpt: 'A heartwarming story of how Luna found her perfect family after months at our shelter.',
    content: `After spending six months in our care, Luna, our beloved mixed-breed dog, has finally found her forever home with the Andreou family...`,
    image: '/blog/success-story.jpg',
    date: '2024-02-08',
    author: 'Nikos Stavrou',
    category: 'Success Stories',
    tags: ['success story', 'adoption', 'dogs'],
  },
  {
    id: 'the-importance-of-spaying-and-neutering',
    title: 'The Importance of Spaying and Neutering',
    excerpt: 'Learn why spaying and neutering is crucial for pet population control and animal health.',
    content: `Spaying and neutering are essential procedures that help control the pet population and provide numerous health benefits for your pets...`,
    image: '/blog/spay-neuter.jpg',
    date: '2024-02-05',
    author: 'Dr. Elena Dimitriou',
    category: 'Pet Health',
    tags: ['pet health', 'spay', 'neuter', 'veterinary care'],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Stories, tips, and updates from Sifnos for Animals
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 flex justify-center space-x-4">
          {['All', 'Adoption Tips', 'Success Stories', 'Pet Health'].map((category) => (
            <button
              key={category}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="mx-1">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-base text-gray-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">
                        By {post.author}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 rounded-lg bg-red-600 px-6 py-10 sm:py-16 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Stay Updated
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-lg leading-8 text-red-100">
              Subscribe to our newsletter for the latest updates, success stories, and tips for pet owners.
            </p>
            <form className="mt-6 sm:mx-auto sm:flex sm:max-w-lg">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-white px-4 py-3 font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 sm:text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
