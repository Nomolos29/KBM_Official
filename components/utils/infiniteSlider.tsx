import { useEffect, useRef } from "react";

interface Review {
  name: string;
  role: string;
  review: string;
}

const reviews: Review[] = [
  {
    name: "Dawodu Abayomi",
    role: "Graphics Designer/Front End Developer",
    review: "Starting this course was challenging, but the supportive community and passionate teaching helped me commit.",
  },
  {
    name: "Hakeemat",
    role: "KBM Tech Club Member",
    review: "The coding class exceeded my expectations. The instructors ensured we learned HTML and CSS effectively.",
  },
  {
    name: "Dorcas",
    role: "Student",
    review: "I'm thrilled about the Blockchain training. Excited for more blockchain courses ahead!",
  },
  {
    name: "James",
    role: "Backend Developer",
    review: "The hands-on experience made all the difference. Highly recommended!",
  },
  {
    name: "Amina",
    role: "Data Scientist",
    review: "This training opened new doors for me in AI and machine learning.",
  },
];

const colors: string[] = [
  "bg-yellow-100",
  "bg-gray-200",
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
];

export default function InfiniteSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = useRef(1); // Speed can be adjusted based on screen size

  useEffect(() => {
    if (!containerRef.current) return;

    // Adjust speed based on screen size
    const handleResize = () => {
      scrollSpeed.current = window.innerWidth < 768 ? 0.5 : 1;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    let animationFrame: number;
    let isPaused = false;

    const animate = () => {
      if (!containerRef.current || isPaused) return;

      containerRef.current.scrollLeft += scrollSpeed.current;

      if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 3) {
        containerRef.current.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Pause on hover
    const container = containerRef.current;
    const pause = () => isPaused = true;
    const resume = () => {
      isPaused = false;
      animationFrame = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause);
    container.addEventListener('touchend', resume);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 mx-auto max-w-7xl">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-8">
        Our <span className="text-yellow-500">Reviews</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 w-full overflow-x-scroll hide-scrollbar py-2"
          style={{ willChange: 'transform' }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className={`flex-shrink-0 w-80 p-6 cursor-pointer rounded-xl shadow-md ${
                colors[index % colors.length]
              }`}
            >
              <h4 className="font-bold text-lg">{review.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{review.role}</p>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}