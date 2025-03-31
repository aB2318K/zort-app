import { motion } from 'framer-motion';

const InteractiveDashboard = () => {
  const weeklyData = [45, 60, 75, 90, 65, 80, 95];
  const profitData = [120, 190, 150, 220, 180, 250, 200];
  const sportDistribution = [
    { name: 'FBL', value: 45, color: 'bg-green-400' },
    { name: 'BBL', value: 25, color: 'bg-red-400' },
    { name: 'TNS', value: 20, color: 'bg-cyan-400' },
    { name: 'OTH', value: 10, color: 'bg-purple-400' }
  ];

  return (
    <div className="h-full w-full bg-gray-950 flex flex-col p-2 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 px-1">
        <h2 className="text-sm font-medium text-white">
          <span className="text-green-400">AI</span> Dashboard
        </h2>
        <div className="text-[10px] text-green-400 bg-gray-800 px-1.5 py-0.5 rounded">LIVE</div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-rows-3 gap-2 flex-1">
        {/* Win Rate */}
        <motion.div 
          className="bg-gray-900 rounded-lg p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-white text-xs mb-1">Win Rate</h3>
          <div className="flex items-end h-16 space-x-1">
            {weeklyData.map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <motion.div
                  className={`w-full ${value > 75 ? 'bg-green-400' : 'bg-cyan-400'} rounded-t-xs`}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ delay: i * 0.05 }}
                />
                <span className="text-gray-400 text-[8px] mt-0.5">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Profit */}
        <div className="bg-gray-900 rounded-lg p-2">
          <h3 className="text-white text-xs mb-1">Profit</h3>
          <div className="relative h-16">
            {profitData.map((value, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 w-2 bg-gradient-to-t from-green-400 to-cyan-400"
                style={{
                  left: `${(i / (profitData.length - 1)) * 100}%`,
                  height: `${(value / 300) * 100}%`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>

        {/* Sports Distribution */}
        <div className="bg-gray-900 rounded-lg p-2">
          <h3 className="text-white text-xs mb-1">Sports</h3>
          <div className="grid grid-cols-4 gap-1 h-full place-items-center">
            {sportDistribution.map((sport, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className={`w-4 h-4 ${sport.color} rounded-full`} />
                <span className="text-white text-[8px] mt-0.5">{sport.name}</span>
                <span className="text-gray-400 text-[8px]">{sport.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-3 gap-1 mt-2 text-center">
        {[{ value: "24.5%", label: "ROI", color: "text-green-400" },
          { value: "8", label: "Active", color: "text-red-400" },
          { value: "73%", label: "Win", color: "text-cyan-400" }
        ].map((stat, i) => (
          <div key={i} className="bg-gray-800 p-1 rounded-sm">
            <p className={`${stat.color} text-xs`}>{stat.value}</p>
            <p className="text-gray-400 text-[8px]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveDashboard;