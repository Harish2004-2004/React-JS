export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      In the vibrant world of React development, passionate developers infuse their creativity and dedication into crafting seamless user interfaces. Beyond mere coding, they become architects of digital experiences, navigating React's component-based architecture with enthusiasm. The thrill of mastering React's declarative syntax and efficient DOM updates fuels their commitment to excellence.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Engaging in collaborative discussions and contributing to the open-source community, these developers view React not just as a framework but as a canvas for collective learning and innovation. In this dynamic landscape, React development is a labor of love, where each project becomes an opportunity to leave an indelible mark on the ever-evolving web development landscape.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}