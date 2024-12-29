import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bookCover from './assets/book.jpg';
import d from './assets/d.jpg';
import y from './assets/y.jpg';
import g from './assets/g.jpg';

export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen py-6 sm:py-10">
      {/* Outer Container */}
      <div className="container mx-auto px-4 space-y-8 sm:space-y-12 rounded-lg bg-gray-800 p-4 sm:p-6 md:p-10 shadow-lg">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Your Money Mastery Coach
                <span className="block text-yellow-500 mt-2">Dr. SANJAY SRIVASTAVA</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                Unlock your financial potential with tailored coaching and effective strategies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="w-full"
            >
              <img
                src={d}
                alt="Dr.Sanjay Srivastava"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Book Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="w-full order-2 md:order-1"
            >
              <img
                src={bookCover}
                alt="Money Mastery Book Cover"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">About the Book</h2>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                <em>Money Mastery: A Simple Path to Inner Wealth and Financial Success </em>is more than just a financial guide—it's a transformational journey toward reclaiming control of your finances and achieving lasting success. Designed to simplify the complexities of financial management, this book blends practical strategies with real-life insights to empower readers from all walks of life.
              </p>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                The book covers critical aspects of financial growth, including understanding the psychological factors that shape your money habits, mastering budgeting and saving techniques, and learning how to invest wisely. It introduces unique concepts like the Lifetime Wealth Ratio (LWR), which helps you measure and optimize your financial efficiency, and the stages of money mastery, which guide you step-by-step from financial dependence to abundance.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Why You Should Read This Book</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                If you're tired of financial stress or feeling stuck in your money habits, this book is for you.{" "}
                <em>Money Mastery</em> not only teaches practical techniques like budgeting and investing but also
                helps you shift your mindset toward wealth-building. With relatable examples and proven strategies,
                it's your roadmap to taking control of your finances, building resilience, and achieving true
                financial freedom.
              </p>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Unlike other financial books, Money Mastery resonates on a personal level. It's written by someone who faced significant financial adversity, rebuilt from the ground up, and emerged with invaluable lessons to share. You'll gain insights into real-world strategies, like creating multiple income streams, managing recurring expenses, and planning for long-term goals such as children's education, luxury purchases, and retirement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors text-center"
                >
                  View the Book
                </Link>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-colors text-center"
                >
                  Buy Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                With over three decades of leadership experience, Dr. Sanjay Srivastava's journey took a
                transformative financial turn in 2014. From facing severe financial challenges to achieving
                stability and success, his inspiring story culminated in the creation of{" "}
                <em>Money Mastery: A Simple Path to Inner Wealth and Financial Success</em>. Today, he empowers
                individuals to take charge of their finances, develop disciplined money habits, and build
                sustainable wealth for the future.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                Learn More <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="w-full"
            >
              <img src={y} alt="About 1" className="rounded-lg w-full h-auto object-cover" />
            </motion.div>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-blue-50 py-10 sm:py-20 mt-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-blue-100 p-4 sm:p-10 rounded-3xl shadow-lg"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Section */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    heading: "Problem",
                    content:
                      "Financial struggles stem from limited literacy, debt, inconsistent income, poor habits, lack of savings, fear of investing, and unclear goals, leading to instability, missed opportunities, and financial insecurity.",
                    icon: "💡",
                  },
                  {
                    heading: "Our Vision",
                    content:
                      "To inspire and empower individuals to achieve financial freedom, transforming lives through actionable knowledge and disciplined financial habits.",
                    icon: "🌟",
                  },
                  {
                    heading: "Our Mission",
                    content:
                      "To provide practical tools, insights, and strategies that guide individuals in overcoming financial challenges, building wealth, and creating a future of lasting abundance.",
                    icon: "🎯",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                    className="bg-white text-gray-900 p-4 sm:p-6 rounded-xl shadow-md flex items-start"
                  >
                    <div className="text-2xl sm:text-3xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{item.heading}</h3>
                      <p className="text-sm sm:text-lg">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
                className="text-white bg-gray-900 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
                  "Your Journey to Financial Freedom Begins Here"
                </h3>
                <p className="text-sm sm:text-lg leading-relaxed text-justify">
                  Welcome to <span className="font-bold">Money Mastery</span>, where we simplify the path to wealth and
                  financial independence. Inspired by the principles outlined in the bestselling book{" "}
                  <span className="italic">Money Mastery: A Simple Path to Inner Wealth and Financial Success</span>, this
                  platform is your gateway to mastering money habits, building sustainable wealth, and achieving financial
                  freedom. Whether you're looking to overcome financial struggles, plan for your future, or simply unlock
                  the secrets to abundance, we provide tools, insights, and strategies to guide you. Start your journey
                  today and take the first step toward a secure and prosperous tomorrow!
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mt-8 sm:mt-16">
            {/* Left Section: Core Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="p-4 sm:p-8 rounded-xl shadow-md bg-blue-100 h-auto md:h-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-900">Core Values</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Resilience",
                    content: "Embracing challenges as opportunities for growth and empowering others to rise above financial setbacks.",
                  },
                  {
                    title: "Integrity",
                    content: "Promoting honesty, transparency, and ethical practices in all financial decisions and guidance.",
                  },
                  {
                    title: "Discipline",
                    content: "Advocating for consistent and responsible financial habits as the foundation for lasting success.",
                  },
                  {
                    title: "Growth",
                    content: "Encouraging a mindset of continuous learning, adaptability, and improvement in personal finance and life.",
                  },
                  {
                    title: "Empowerment",
                    content: "Equipping individuals with the knowledge and tools to take control of their financial future with confidence.",
                  },
                ].map((value, index) => (
                  <li key={index}>
                    <h4 className="text-lg sm:text-xl font-semibold text-blue-800">{value.title}</h4>
                    <p className="text-sm sm:text-base text-gray-700">{value.content}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Section: Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="w-full"
            >
              <img
                src={g}
                alt="About 1"
                className="shadow-md w-full h-auto object-cover "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}