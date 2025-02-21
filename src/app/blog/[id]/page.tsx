import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog posts - replace with actual data from your backend
const blogPosts = {
  'tips-for-first-time-pet-adopters': {
    title: 'Tips for First-Time Pet Adopters',
    content: `Bringing a new pet home is an exciting experience, but it can also be overwhelming for both you and your new companion. Here are some essential tips to help make the transition smoother:

1. Prepare Your Home
Before bringing your new pet home, make sure your space is ready:
- Remove any hazardous items or plants
- Set up a designated area for food and water
- Create a comfortable sleeping space
- Secure loose wires and small objects
- Have basic supplies ready (food, bowls, bed, toys)

2. Give Them Time to Adjust
Every pet is different, and some may take longer to feel comfortable in their new environment:
- Provide a quiet space where they can retreat
- Maintain a consistent routine
- Be patient and let them explore at their own pace
- Keep initial interactions calm and positive

3. Establish a Routine
Pets thrive on routine. Set regular times for:
- Feeding
- Walks or exercise
- Bathroom breaks
- Play and training sessions
- Rest and quiet time

4. Schedule a Vet Visit
Within the first week, take your new pet for a check-up:
- Review their vaccination history
- Discuss any health concerns
- Get recommendations for diet and care
- Set up a preventive care schedule

5. Start Training Early
Begin basic training as soon as your pet arrives:
- Use positive reinforcement
- Keep sessions short and fun
- Be consistent with rules and commands
- Consider professional training classes

Remember, building trust and bonding takes time. Focus on creating a safe, loving environment, and your new pet will soon feel right at home.`,
    image: '/blog/adoption-tips.jpg',
    date: '2024-02-10',
    author: 'Maria Papadopoulos',
    category: 'Adoption Tips',
    tags: ['adoption', 'pets', 'tips', 'first-time adopters'],
  },
  'success-story-luna-finds-her-forever-home': {
    title: 'Success Story: Luna Finds Her Forever Home',
    content: `After spending six months in our care, Luna, our beloved mixed-breed dog, has finally found her forever home with the Andreou family.

Luna's Journey
When Luna first arrived at our shelter, she was understandably nervous and shy. Found wandering the streets of Sifnos, she had clearly been through some difficult times. Our dedicated team of volunteers worked patiently with her, helping her build confidence and trust in humans again.

Day by day, Luna's true personality began to shine through. Her gentle nature and playful spirit captured the hearts of everyone at the shelter. She particularly loved playing fetch and going for long walks along the beach.

Meeting the Andreou Family
When the Andreou family visited our shelter, they weren't specifically looking for a dog like Luna. They had come with their two children, aged 8 and 10, hoping to find a smaller, younger dog. However, something magical happened when Luna met the children.

"The way she gently approached the kids and sat patiently while they petted her – we just knew she was meant to be part of our family," says Maria Andreou. "Her calm demeanor and sweet personality were exactly what we needed, even though we didn't realize it when we first came to the shelter."

A Perfect Match
The adoption process went smoothly, with several meet-and-greets to ensure Luna and the family were a good match. Our team provided guidance on helping Luna adjust to her new home, and the Andreou family was committed to giving her all the time and patience she needed.

Now, three months into her new life, Luna has completely blossomed. She enjoys daily walks with the children after school, has her own cozy bed (though she often prefers the family couch!), and has become an inseparable part of the Andreou family.

"Luna has brought so much joy and love into our home," shares Nikos Andreou. "She's gentle with the kids, loves to play in our garden, and has even helped our older child become more responsible through helping with her care."

A Happy Ending and New Beginning
Luna's story is just one of many successful adoptions at Sifnos for Animals, but each one is special to us. It reminds us why we do this work and the importance of giving every animal a chance to find their perfect family.

For those considering adoption, remember that sometimes the perfect pet might not be the one you initially imagined. Keep an open heart and mind – your future best friend might surprise you!`,
    image: '/blog/success-story.jpg',
    date: '2024-02-08',
    author: 'Nikos Stavrou',
    category: 'Success Stories',
    tags: ['success story', 'adoption', 'dogs'],
  },
  'the-importance-of-spaying-and-neutering': {
    title: 'The Importance of Spaying and Neutering',
    content: `Spaying and neutering are essential procedures that help control the pet population and provide numerous health benefits for your pets. In this article, we'll explore why these procedures are so important and address common concerns.

Why Spay or Neuter?

Population Control
The most obvious benefit is preventing unwanted litters. A single unspayed female cat and her offspring can produce 420,000 cats in just 7 years. For dogs, one unspayed female and her offspring can produce 67,000 dogs in 6 years.

Health Benefits

For Female Pets:
- Prevents heat cycles and bleeding
- Eliminates the risk of ovarian and uterine cancers
- Greatly reduces the risk of mammary tumors
- Prevents pyometra (a potentially fatal uterine infection)

For Male Pets:
- Reduces or eliminates marking and spraying behavior
- Decreases aggressive behavior
- Eliminates the risk of testicular cancer
- Reduces the risk of prostate problems

Behavioral Benefits
- Reduces roaming behavior
- Decreases aggression in males
- Eliminates heat-related behaviors
- Makes pets calmer and more focused on their human families

Common Myths and Concerns

Myth 1: "My pet should have one litter before spaying."
Fact: There are no health benefits to allowing your pet to have a litter before spaying. In fact, spaying before the first heat cycle provides the best protection against mammary tumors.

Myth 2: "Neutering will change my pet's personality."
Fact: The basic personality of your pet is formed by genetics and early socialization. Neutering only reduces hormone-driven behaviors like roaming and aggression.

Myth 3: "The surgery is too expensive."
Fact: The cost of spaying/neutering is far less than the cost of raising a litter of puppies or kittens. Many organizations, including Sifnos for Animals, offer assistance programs to help cover the cost.

When to Spay or Neuter

The ideal age for spaying or neutering depends on several factors:
- Species (cats vs. dogs)
- Breed size (for dogs)
- Individual health considerations

Generally, cats can be spayed or neutered at 4-6 months of age. For dogs, the timing may vary:
- Small breeds: 6-9 months
- Large breeds: 9-15 months

Always consult with your veterinarian to determine the best timing for your pet.

The Recovery Process

The recovery period is typically quick and smooth:
1. Most pets go home the same day
2. Full recovery takes 7-10 days
3. Restrict activity during recovery
4. Monitor the incision site
5. Use an e-collar if necessary

Our Commitment

At Sifnos for Animals, we ensure all adopted pets are spayed or neutered before going to their new homes. We also work with local veterinarians to provide affordable spay/neuter services to the community.

Take Action

If you have an unaltered pet, we encourage you to schedule their spay/neuter procedure. Contact us for information about our assistance programs or to find a participating veterinarian.

Remember, spaying and neutering are responsible choices that benefit both your pet and the community. Together, we can help control the pet population and ensure healthier, happier lives for our animal companions.`,
    image: '/blog/spay-neuter.jpg',
    date: '2024-02-05',
    author: 'Dr. Elena Dimitriou',
    category: 'Pet Health',
    tags: ['pet health', 'spay', 'neuter', 'veterinary care'],
  },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to blog
          </Link>

          {/* Article */}
          <article className="mt-8">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-8">
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

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {post.title}
              </h1>

              <div className="mt-2 flex items-center">
                <span className="text-sm text-gray-500">
                  By {post.author}
                </span>
              </div>

              <div className="mt-8 space-y-6 text-lg text-gray-600">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-sm font-semibold text-gray-700">Tags</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Share and Subscribe Section */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Share */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Share this article
                </h2>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Subscribe */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-4 text-sm text-gray-600">
                  Get the latest updates from Sifnos for Animals delivered to your inbox.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-red-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
