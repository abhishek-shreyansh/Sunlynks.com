// ============================================
// SunlynksCRM - Stat Card Component
// ============================================

import React from 'react';

const iconColors = {
  users: { bg: 'rgba(59, 130, 246, 0.15)', icon: '👥' },
  folder: { bg: 'rgba(139, 92, 246, 0.15)', icon: '📁' },
  trending: { bg: 'rgba(16, 185, 129, 0.15)', icon: '💰' },
  zap: { bg: 'rgba(249, 115, 22, 0.15)', icon: '⚡' },
};

const StatCard = ({ label, value, change, positive, icon }) => {
  const iconData = iconColors[icon] || iconColors.users;

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span>{label}</span>
        <div className="stat-card-icon" style={{ background: iconData.bg }}>
          {iconData.icon}
        </div>
      </div>
      <div className="value">{value}</div>
      <div className={`change ${positive ? 'positive' : 'negative'}`}>
        {positive ? '↑' : '↓'} {change} from last month
      </div>
    </div>
  );
};

export default StatCard;
