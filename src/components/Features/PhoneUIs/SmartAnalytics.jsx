import { motion } from 'framer-motion';

const SmartAnalytics = () => {
  const insights = [
    { text: "63% higher weekend ROI", emoji: "📈", color: "bg-green-400" },
    { text: "5.2x soccer bet frequency", emoji: "⚽", color: "bg-red-400" },
    { text: "82% Over 2.5 Goals hits", emoji: "🎯", color: "bg-cyan-400" },
    { text: "3.1x live bet profits", emoji: "🔥", color: "bg-purple-400" }
  ];

  return (
    <div className="h-full w-full bg-gray-950 flex flex-col p-3 overflow-hidden">

      <div className="flex justify-between items-center mb-3 px-1">
        <h2 className="text-sm font-medium text-white">
          <span className="text-green-400">Smart</span> Insights
        </h2>
        <div className="text-[10px] text-green-400 bg-gray-800 px-1.5 py-0.5 rounded">
          AI-POWERED
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        {insights.map((insight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900 rounded-lg p-2 flex flex-col"
          >
            <div className="flex items-start mb-1">
              <div className={`w-2 h-2 ${insight.color} rounded-full mt-1 mr-1.5`} />
              <span className="text-xs text-white flex-1">
                {insight.text}
              </span>
            </div>
            <div className="mt-auto text-right text-[10px] text-gray-400">
              {insight.emoji}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-2 bg-gray-800 rounded p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400">Top Opportunity:</span>
          <span className="text-xs font-medium text-green-400">Weekend Parlays</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-0.5 mt-1">
          <motion.div 
            className="bg-green-400 h-0.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{ delay: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SmartAnalytics;