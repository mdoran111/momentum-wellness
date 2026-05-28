import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import logo from '../assets/images/logo.png';
import mwDashboard from '@assets/MW2_app_dashboard_1779922530403.png';

// Mock data for programs
const PROGRAMS = [
  {
    id: 1,
    title: "The Apex Path",
    description: "A continuous strength training program designed to transform your physical capability and mental focus using a full suite of strength equipment. Monthly phases unlock new challenges and progressive overload for long-term growth.",
    goal: "Strength",
    equipment: "Full Gym",
    daysPerWeek: "4x",
    image: programGym,
    link: "https://www.trainerize.me/profile/momentumwellness6/?planGUID=8bb77914b268416bac5814c814ea283d",
    details: {
      who: "Lifters with access to a commercial or well-equipped home gym looking for continuous, progressive strength development.",
      time: "60-75 mins",
      days: "4 days/week",
      achieve: "Mastered mechanics and a powerful, resilient physique."
    }
  },
  {
    id: 2,
    title: "The Versatile Edge",
    description: "A continuous program centered around dumbbells, bands, and kettlebells that unlocks new phases monthly. This holistic approach blends strength, stability, and endurance for the modern, high-functioning individual.",
    goal: "Body Recomposition",
    equipment: "Essential Gear",
    daysPerWeek: "3x",
    image: programMinimal,
    link: "https://www.trainerize.me/profile/momentumwellness6/?planGUID=8bb77914b268416bac5814c814ea283d",
    details: {
      who: "Those training with essential weights and tools who want a balanced, continuously evolving program.",
      time: "45-60 mins",
      days: "5 days/week",
      achieve: "Total-body lean muscle, improved functional movement, and high-energy conditioning."
    }
  },
  {
    id: 3,
    title: "The Foundational Flow",
    description: "A continuous bodyweight-only program focused on sustainable movement, mobility, and high-intensity conditioning. Monthly phases keep progression engaging while building a lean, athletic foundation.",
    goal: "Essentials",
    equipment: "Zero Equipment",
    daysPerWeek: "2x",
    image: programHome,
    details: {
      who: "Anyone who values the freedom of training anywhere—at home, in the park, or on the road—with zero gear.",
      time: "30-45 mins",
      days: "3-5 days/week",
      achieve: "Lean athletic build, enhanced mobility, and the ability to train anywhere with intensity."
    }
  }
];

const GOALS = ["All", "Strength", "Body Recomposition", "Essentials"];
const EQUIPMENT = ["All", "Full Gym", "Essential Gear", "Zero Equipment"];
const FREQUENCY = ["All", "2x", "3x", "4x"];

export default function Programs() {
  const [activeGoal, setActiveGoal] = useState("All");
  const [activeEquipment, setActiveEquipment] = useState("All");
  const [activeFrequency, setActiveFrequency] = useState("All");
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Background Logo watermark */}
      <div className="absolute top-16 left-0 right-0 h-[500px] z-0 flex items-center justify-center pointer-events-none overflow-visible">
        <motion.img
          initial={{ opacity: 0.2, scale: 1, filter: "brightness(1)" }}
          animate={{ opacity: 0.2, scale: 1, filter: "brightness(1)" }}
          src={logo}
          alt=""
          className="w-[120%] max-w-none grayscale invert"
        />
      </div>

      {/* The Platform */}
      <section className="relative z-10 py-16 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white tracking-tight italic uppercase">The Platform</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">Momentum Wellness is powered through a modern wellness app that gives you one place to stay organized, engaged, and accountable.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                {[
                  "Follow workouts at home, at the gym, or on the go",
                  "Track key health and fitness habits",
                  "Monitor progress and performance over time",
                  "Stay aware of nutrition goals",
                  "Build routines with daily structure",
                  "Stay connected through community-based support",
                  "Keep wellness visible, practical, and accessible"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Phone Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="rounded-[32px] md:rounded-[40px] bg-[#1a1a2e] p-2 md:p-3 shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <div className="rounded-[24px] md:rounded-[32px] overflow-hidden bg-black relative">
                    <img src={mwDashboard} alt="App Dashboard" className="w-full" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-[#1a1a2e] rounded-b-xl md:rounded-b-2xl"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-white/60 font-light">Stay on top of daily health and fitness</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
