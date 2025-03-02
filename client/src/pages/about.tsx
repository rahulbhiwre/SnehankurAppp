export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Snehankur</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, mission, and the impact we're making in children's lives.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl font-bold text-primary mb-2">6+</div>
            <div className="text-gray-600">Years of Work</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl font-bold text-primary mb-2">180+</div>
            <div className="text-gray-600">Children</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">Awards</div>
          </div>
        </div>

        {/* History Sections */}
        <div className="space-y-24">
          {/* About Founder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Founder</h2>
              <p className="text-gray-600">
                [Founder's story and background goes here. This paragraph should highlight the founder's vision, 
                motivation, and dedication to establishing Snehankur.]
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Founder"
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
          </div>

          {/* Early Life */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
              alt="Early Life"
              className="rounded-lg shadow-lg object-cover aspect-[4/3] md:order-2"
            />
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Early Life</h2>
              <p className="text-gray-600">
                [Early life description goes here. This section should describe the initial challenges,
                inspirations, and experiences that shaped the organization's early days.]
              </p>
            </div>
          </div>

          {/* The Beginning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Beginning</h2>
              <p className="text-gray-600">
                [Story of Snehankur's beginning goes here. This section should cover how the
                organization was established and its initial mission and goals.]
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
              alt="The Beginning"
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
          </div>

          {/* The Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
              alt="The Journey"
              className="rounded-lg shadow-lg object-cover aspect-[4/3] md:order-2"
            />
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Journey</h2>
              <p className="text-gray-600">
                [Journey description goes here. This section should highlight the major milestones,
                challenges overcome, and successes achieved along the way.]
              </p>
            </div>
          </div>

          {/* Helping Hands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Helping Hands</h2>
              <p className="text-gray-600">
                [Description of supporters and volunteers goes here. This section should acknowledge
                the contributions of various individuals and organizations.]
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8"
              alt="Helping Hands"
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
          </div>

          {/* Roadmap to Future */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Roadmap to Future"
              className="rounded-lg shadow-lg object-cover aspect-[4/3] md:order-2"
            />
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Roadmap to Future</h2>
              <p className="text-gray-600">
                [Future plans and vision goes here. This section should outline the organization's
                goals, upcoming initiatives, and long-term vision.]
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Projects at Snehankur</h2>

          {/* Project 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project 1</h3>
              <p className="text-gray-600">
                [Project description goes here. This section should detail the project's objectives,
                implementation, and impact on the community.]
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
              alt="Project 1"
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}