// ============================================
// SunlynksCRM - Notifications Page
// ============================================

import React, { useState } from 'react';
import { notificationsData, activitiesData } from '../data/mockData';

const typeStyles = {
  success: { bg: 'rgba(16, 185, 129, 0.1)', border: '#10B981', icon: '✅' },
  warning: { bg: 'rgba(245, 158, 11, 0.1)', border: '#F59E0B', icon: '⚠️' },
  info: { bg: 'rgba(59, 130, 246, 0.1)', border: '#3B82F6', icon: 'ℹ️' },
  error: { bg: 'rgba(239, 68, 68, 0.1)', border: '#EF4444', icon: '❌' },
};

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total</span></div>
          <div className="value">{notifications.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Unread</span></div>
          <div className="value" style={{ color: 'var(--danger)' }}>{unreadCount}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Alerts</span></div>
          <div className="value" style={{ color: 'var(--warning)' }}>{notifications.filter(n => n.type === 'warning' || n.type === 'error').length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Completed</span></div>
          <div className="value" style={{ color: 'var(--success)' }}>{notifications.filter(n => n.type === 'success').length}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className={`btn btn-sm ${activeTab === 'notifications' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('notifications')}>
              🔔 Notifications {unreadCount > 0 && `(${unreadCount})`}
            </button>
            <button className={`btn btn-sm ${activeTab === 'activity' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setActiveTab('activity')}>
              🕐 Activity Log
            </button>
          </div>
          {activeTab === 'notifications' && (
            <button className="btn btn-sm btn-secondary" onClick={markAllRead}>✓ Mark All Read</button>
          )}
        </div>
      </div>

      {activeTab === 'notifications' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {notifications.map(notification => {
            const style = typeStyles[notification.type];
            return (
              <div key={notification.id} className="card" style={{
                borderLeft: `4px solid ${style.border}`,
                opacity: notification.read ? 0.7 : 1,
                background: notification.read ? 'var(--bg-card)' : style.bg,
              }}>
                <div className="card-body" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: 20 }}>
                  <span style={{ fontSize: 24 }}>{style.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 700 }}>{notification.title}</h4>
                      {!notification.read && (
                        <span style={{
                          width: 10, height: 10, borderRadius: '50%',
                          background: 'var(--primary)', display: 'inline-block'
                        }} />
                      )}
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 4 }}>{notification.message}</p>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{notification.time}</span>
                  </div>
                  <button className="btn btn-sm btn-secondary">Dismiss</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            {activitiesData.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-content">
                  <p>{activity.message}</p>
                  <div className="time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
