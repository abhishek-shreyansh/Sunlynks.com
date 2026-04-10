// ============================================
// SunlynksCRM - Sidebar Component
// ============================================

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { section: 'Main' },
  { path: '/', label: 'Dashboard', icon: '📊', badge: null },
  { path: '/leads', label: 'Leads', icon: '👥', badge: '24' },
  { path: '/projects', label: 'Projects', icon: '📁', badge: null },
  { path: '/pipeline', label: 'Pipeline', icon: '🔄', badge: null },
  { section: 'Management' },
  { path: '/team', label: 'Team', icon: '🏢', badge: null },
  { path: '/documents', label: 'Documents', icon: '📄', badge: '3' },
  { path: '/finance', label: 'Finance', icon: '💰', badge: null },
  { section: 'System' },
  { path: '/analytics', label: 'Analytics', icon: '📈', badge: null },
  { path: '/notifications', label: 'Notifications', icon: '🔔', badge: '5' },
  { path: '/settings', label: 'Settings', icon: '⚙️', badge: null },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">☀️</div>
        <div>
          <h1>Sunlynks</h1>
          <span>Solar CRM</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.section) {
            return (
              <div key={index} className="nav-section-title">
                {item.section}
              </div>
            );
          }
          return (
            <div
              key={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          );
        })}
      </nav>
      <div style={{
        padding: '16px 20px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary), var(--warning))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '14px', fontWeight: 700
        }}>AM</div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600 }}>Admin User</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Master Admin</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
