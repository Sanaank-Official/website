import { useEffect } from 'react';

const StatsSection = () => {
  useEffect(() => {
    // Intersection Observer setup
    const counters = document.querySelectorAll('.counter');
    const options = {
      root: null, // observe within the viewport
      threshold: 0.5, // trigger when 50% of the element is in view
    };
    
    const updateCounter = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));
          let count = 0;
          const increment = target / 100;
          const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(interval);
            }
            
            if (target === 100) {
                counter.innerText = Math.ceil(count) + "+"; // Add a + sign for 100
              } else {
                counter.innerText = Math.ceil(count); // Regular number format
              }
          }, 10); // Adjust the speed of the animation by changing interval
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(updateCounter, options);

    counters.forEach(counter => {
      observer.observe(counter);
    });

    return () => {
      // Cleanup observer on component unmount
      counters.forEach(counter => observer.unobserve(counter));
    };
  }, []);

  return (
    <div className="bg-customYellow py-16 text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
          <div>
            <h3 className="text-4xl font-bold mb-2 counter" data-target="2010">0</h3>
            <p>Year we've founded</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 counter" data-target="3000000">0</h3>
            <p>Monthly active users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 counter" data-target="100">0</h3>
            <p>Team members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 counter" data-target="75">0</h3>
            <p>Countries using our product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
