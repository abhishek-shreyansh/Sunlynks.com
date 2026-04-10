// ============================================
// SunlynksCRM - Header Component
// ============================================

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': { title: 'Dashboard', subtitle: 'Welcome back! Here\'s your solar business overview.' },
  '/leads': { title: 'Leads Management', subtitle: 'Track and manage your solar leads.' },
  '/projects': { title: 'Projects', subtitle: 'Monitor all solar installation projects.' },
  '/pipeline': { title: 'Sales Pipeline', subtitle: 'Visualize your deal flow.' },
  '/team': { title: 'Team Management', subtitle: 'Manage your sales, finance & execution teams.' },
  '/documents': { title: 'Document Vault', subtitle: 'All project documents in one place.' },
  '/finance': { title: 'Finance', subtitle: 'Loan processing & disbursement tracking.' },
  '/analytics': { title: 'Analytics', subtitle: 'Performance insights & reports.' },
  '/notifications': { title: 'Notifications', subtitle: 'Stay updated on project activities.' },
  '/settings': { title: 'Settings', subtitle: 'Configure your CRM preferences.' },
};

const Header = () => {
  const location = useLocation();
  const pageInfo = pageTitles[location.pathname] || { title: 'SunlynksCRM', subtitle: '' };
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="header">
      <div className="header-left">
        <div>
          <h2>{pageInfo.title}</h2>
          <p>{pageInfo.subtitle}</p>
        </div>
      </div>

      <div className="header-search">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Search leads, projects, documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="header-right">
        <button className="header-icon-btn">
          🔔
          <span className="badge">3</span>
        </button>
        <button className="header-icon-btn">
          💬
        </button>
        <button className="header-icon-btn">
          ❓
        </button>
        <div className="header-avatar">AM</div>
      </div>
    </header>
  );
};

export default Header;
