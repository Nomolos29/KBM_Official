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
    review:
      "Starting this course was challenging, but the supportive community and passionate teaching helped me commit.",
  },
  {
    name: "Hakeemat",
    role: "KBM Tech Club Member",
    review:
      "The coding class exceeded my expectations. The instructors ensured we learned HTML and CSS effectively.",
  },
  {
    name: "Dorcas",
    role: "Student",
    review:
      "I'm thrilled about the Blockchain training. Excited for more blockchain courses ahead!",
  },
  {
    name: "James",
    role: "Backend Developer",
    review:
      "The hands-on experience made all the difference. Highly recommended!",
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

  useEffect(() => {
    let animationFrame: number;

    if (!containerRef.current) {
      console.error("containerRef is null!");
      return;
    }

    const animate = () => {
      if (containerRef.current) {
        // Increment scroll position
        containerRef.current.scrollLeft += 2; // Adjust speed as needed

        // Reset scroll position when it reaches the end of the duplicated reviews
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0; // Reset to the beginning
        }

        // Request the next animation frame
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Start the animation loop
    animationFrame = requestAnimationFrame(animate);

    // Cleanup function to stop the animation
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
        Our <span className="text-yellow-500">Reviews</span>
      </h2>
      <div className="relative overflow-x-hidden w-[900px]">
        {/* Inner container for reviews */}
        <div
          ref={containerRef}
          className="flex gap-6 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className={`p-6 w-[300px] rounded-xl shadow-md inline-block ${
                colors[index % colors.length]
              }`}
            >
              <h4 className="font-bold">{review.name}</h4>
              <p className="text-sm text-gray-600">{review.role}</p>
              <p className="mt-3 text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
