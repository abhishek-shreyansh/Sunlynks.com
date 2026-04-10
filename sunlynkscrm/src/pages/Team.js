// ============================================
// SunlynksCRM - Team Management Page
// ============================================

import React, { useState } from 'react';
import { teamMembers } from '../data/mockData';

const Team = () => {
  const [filterTeam, setFilterTeam] = useState('All');

  const teams = ['All', 'Sales', 'Finance', 'Execution'];

  const filteredMembers = teamMembers.filter(
    m => filterTeam === 'All' || m.team === filterTeam
  );

  return (
    <div>
      {/* Team Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Members</span></div>
          <div className="value">{teamMembers.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Sales Team</span></div>
          <div className="value" style={{ color: '#60A5FA' }}>{teamMembers.filter(m => m.team === 'Sales').length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Finance Team</span></div>
          <div className="value" style={{ color: '#A78BFA' }}>{teamMembers.filter(m => m.team === 'Finance').length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Execution Team</span></div>
          <div className="value" style={{ color: '#34D399' }}>{teamMembers.filter(m => m.team === 'Execution').length}</div>
        </div>
      </div>

      {/* Filter */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {teams.map(t => (
              <button
                key={t}
                className={`btn btn-sm ${filterTeam === t ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterTeam(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <button className="btn btn-primary">+ Add Member</button>
        </div>
      </div>

      {/* Team Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
        {filteredMembers.map(member => (
          <div key={member.id} className="card" style={{ transition: 'var(--transition)', cursor: 'pointer' }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--bg-tertiary)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: 28
                }}>
                  {member.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700 }}>{member.name}</h4>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{member.role}</p>
                  <span className={`badge badge-${member.team.toLowerCase()}`}>{member.team}</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{
                  background: 'var(--bg-primary)', borderRadius: 8, padding: 14, textAlign: 'center'
                }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--primary)' }}>{member.projects}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Active Projects</div>
                </div>
                <div style={{
                  background: 'var(--bg-primary)', borderRadius: 8, padding: 14, textAlign: 'center'
                }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--success)' }}>{member.performance}%</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Performance</div>
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Performance Score</span>
                  <span style={{ fontWeight: 600 }}>{member.performance}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{
                    width: `${member.performance}%`,
                    background: member.performance >= 90
                      ? 'linear-gradient(90deg, #10B981, #34D399)'
                      : 'linear-gradient(90deg, var(--primary), var(--warning))'
                  }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <button className="btn btn-sm btn-secondary" style={{ flex: 1 }}>📧 Email</button>
                <button className="btn btn-sm btn-secondary" style={{ flex: 1 }}>📞 Call</button>
                <button className="btn btn-sm btn-primary" style={{ flex: 1 }}>👁️ View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
