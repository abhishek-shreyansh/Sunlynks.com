// ============================================
// SunlynksCRM - Settings Page
// ============================================

import React, { useState } from 'react';

const settingSections = [
  { key: 'general', label: 'General', icon: '⚙️' },
  { key: 'profile', label: 'Profile', icon: '👤' },
  { key: 'notifications', label: 'Notifications', icon: '🔔' },
  { key: 'security', label: 'Security', icon: '🔒' },
  { key: 'integrations', label: 'Integrations', icon: '🔗' },
  { key: 'billing', label: 'Billing', icon: '💳' },
];

const Settings = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [toggles, setToggles] = useState({
    emailNotif: true,
    smsNotif: false,
    pushNotif: true,
    weeklyReport: true,
    darkMode: true,
    twoFactor: false,
    autoAssign: true,
    apiAccess: false,
  });

  const toggle = (key) => setToggles({ ...toggles, [key]: !toggles[key] });

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return (
          <div>
            <div className="settings-section">
              <h3>🏢 Company Settings</h3>
              <p>Configure your organization details</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label>Company Name</label>
                  <input className="form-control" defaultValue="Sunlynks Solar Pvt. Ltd." />
                </div>
                <div className="form-group">
                  <label>Industry</label>
                  <input className="form-control" defaultValue="Solar Energy" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" defaultValue="admin@sunlynks.in" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input className="form-control" defaultValue="+91 98765 43210" />
                </div>
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label>Address</label>
                  <input className="form-control" defaultValue="Solar Hub, Baner Road, Pune, Maharashtra 411045" />
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>🎨 Preferences</h3>
              <p>Customize your CRM experience</p>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>🌙 Dark Mode</h4>
                  <p>Enable dark theme for the interface</p>
                </div>
                <button className={`toggle ${toggles.darkMode ? 'active' : ''}`} onClick={() => toggle('darkMode')} />
              </div>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>📋 Auto-Assign Leads</h4>
                  <p>Automatically distribute new leads to sales team</p>
                </div>
                <button className={`toggle ${toggles.autoAssign ? 'active' : ''}`} onClick={() => toggle('autoAssign')} />
              </div>
            </div>
            <button className="btn btn-primary">💾 Save Changes</button>
          </div>
        );

      case 'profile':
        return (
          <div>
            <div className="settings-section">
              <h3>👤 Your Profile</h3>
              <p>Manage your personal information</p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24,
                padding: 24, background: 'var(--bg-primary)', borderRadius: 'var(--radius)'
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--warning))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 32, fontWeight: 800
                }}>AM</div>
                <div>
                  <h4 style={{ fontSize: 18 }}>Admin Master</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Master Administrator</p>
                  <button className="btn btn-sm btn-secondary" style={{ marginTop: 8 }}>📷 Change Avatar</button>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input className="form-control" defaultValue="Admin Master" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" defaultValue="admin@sunlynks.in" />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select className="form-control">
                    <option>Master Admin</option>
                    <option>Company Admin</option>
                    <option>Employee</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input className="form-control" defaultValue="+91 98765 43210" />
                </div>
              </div>
            </div>
            <button className="btn btn-primary">💾 Update Profile</button>
          </div>
        );

      case 'notifications':
        return (
          <div>
            <div className="settings-section">
              <h3>🔔 Notification Preferences</h3>
              <p>Choose how and when you receive notifications</p>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>📧 Email Notifications</h4>
                  <p>Receive updates via email</p>
                </div>
                <button className={`toggle ${toggles.emailNotif ? 'active' : ''}`} onClick={() => toggle('emailNotif')} />
              </div>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>📱 SMS Notifications</h4>
                  <p>Receive updates via SMS</p>
                </div>
                <button className={`toggle ${toggles.smsNotif ? 'active' : ''}`} onClick={() => toggle('smsNotif')} />
              </div>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>🔔 Push Notifications</h4>
                  <p>Browser push notifications for real-time alerts</p>
                </div>
                <button className={`toggle ${toggles.pushNotif ? 'active' : ''}`} onClick={() => toggle('pushNotif')} />
              </div>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>📊 Weekly Reports</h4>
                  <p>Get a weekly summary of your pipeline activity</p>
                </div>
                <button className={`toggle ${toggles.weeklyReport ? 'active' : ''}`} onClick={() => toggle('weeklyReport')} />
              </div>
            </div>
            <button className="btn btn-primary">💾 Save Preferences</button>
          </div>
        );

      case 'security':
        return (
          <div>
            <div className="settings-section">
              <h3>🔒 Security Settings</h3>
              <p>Keep your account secure</p>
              <div className="toggle-switch">
                <div className="toggle-label">
                  <h4>🔐 Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <button className={`toggle ${toggles.twoFactor ? 'active' : ''}`} onClick={() => toggle('twoFactor')} />
              </div>
              <div style={{ marginTop: 24 }}>
                <div className="form-group">
                  <label>Current Password</label>
                  <input className="form-control" type="password" placeholder="Enter current password" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input className="form-control" type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input className="form-control" type="password" placeholder="Confirm new password" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-primary">🔑 Change Password</button>
              <button className="btn btn-secondary">📜 View Login History</button>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div>
            <div className="settings-section">
              <h3>🔗 Integrations</h3>
              <p>Connect third-party services to enhance your CRM</p>
              {[
                { name: 'WhatsApp Business', desc: 'Send automated messages to customers', icon: '💬', connected: true },
                { name: 'Google Calendar', desc: 'Sync site visit schedules', icon: '📅', connected: true },
                { name: 'Tally / Zoho Books', desc: 'Accounting & invoicing integration', icon: '📊', connected: false },
                { name: 'SMS Gateway', desc: 'Automated SMS notifications', icon: '📱', connected: false },
                { name: 'Payment Gateway', desc: 'Razorpay / Paytm integration', icon: '💳', connected: true },
              ].map((integration, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: 16, borderBottom: '1px solid var(--border)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: 28 }}>{integration.icon}</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 600 }}>{integration.name}</h4>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 0 }}>{integration.desc}</p>
                    </div>
                  </div>
                  <button className={`btn btn-sm ${integration.connected ? 'btn-primary' : 'btn-secondary'}`}>
                    {integration.connected ? '✓ Connected' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'billing':
        return (
          <div>
            <div className="settings-section">
              <h3>💳 Billing & Subscription</h3>
              <p>Manage your plan and payment details</p>
              <div style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.05))',
                border: '1px solid var(--primary)',
                borderRadius: 'var(--radius)',
                padding: 24, marginBottom: 24
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>☀️ Solar Pro Plan</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 4, marginBottom: 0 }}>Unlimited projects • 25 team members • Priority support</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 28, fontWeight: 800 }}>₹4,999<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-muted)' }}>/month</span></div>
                    <span className="badge badge-success">Active</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label>Next Billing Date</label>
                  <input className="form-control" value="May 8, 2026" readOnly />
                </div>
                <div className="form-group">
                  <label>Payment Method</label>
                  <input className="form-control" value="HDFC •••• 4289" readOnly />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-primary">📊 View Invoices</button>
              <button className="btn btn-secondary">🔄 Change Plan</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="settings-grid">
      <div className="settings-menu">
        {settingSections.map(section => (
          <div
            key={section.key}
            className={`settings-menu-item ${activeSection === section.key ? 'active' : ''}`}
            onClick={() => setActiveSection(section.key)}
          >
            <span>{section.icon}</span>
            {section.label}
          </div>
        ))}
      </div>
      <div className="settings-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
