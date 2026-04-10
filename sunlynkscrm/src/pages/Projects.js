// ============================================
// SunlynksCRM - Projects Page
// ============================================

import React, { useState } from 'react';
import { projectsData } from '../data/mockData';

const teamBadge = (team) => {
  const map = { 'Sales': 'badge-sales', 'Finance': 'badge-finance', 'Execution': 'badge-execution' };
  return map[team] || 'badge-info';
};

const Projects = () => {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div>
      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Projects</span></div>
          <div className="value">{projectsData.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>In Progress</span></div>
          <div className="value">{projectsData.filter(p => p.progress < 100).length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Near Completion</span></div>
          <div className="value">{projectsData.filter(p => p.progress >= 80).length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Value</span></div>
          <div className="value">₹46.1L</div>
        </div>
      </div>

      {/* Controls */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className={`btn btn-sm ${viewMode === 'table' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setViewMode('table')}>📋 Table View</button>
            <button className={`btn btn-sm ${viewMode === 'cards' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setViewMode('cards')}>🃏 Card View</button>
          </div>
          <button className="btn btn-primary">+ New Project</button>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className="card">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Project ID</th>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>System</th>
                  <th>Stage</th>
                  <th>Team</th>
                  <th>Progress</th>
                  <th>Value</th>
                  <th>Timeline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projectsData.map((project) => (
                  <tr key={project.id}>
                    <td style={{ fontWeight: 600, color: 'var(--secondary)' }}>{project.id}</td>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.customer}</td>
                    <td>{project.location}</td>
                    <td style={{ fontWeight: 600 }}>{project.systemSize}</td>
                    <td>
                      <span className={`badge ${teamBadge(project.team)}`}>{project.stage}</span>
                    </td>
                    <td><span className={`badge ${teamBadge(project.team)}`}>{project.team}</span></td>
                    <td style={{ minWidth: 150 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="progress-bar" style={{ flex: 1 }}>
                          <div className="progress-fill" style={{ width: `${project.progress}%` }} />
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>{project.progress}%</span>
                      </div>
                    </td>
                    <td style={{ fontWeight: 700, color: 'var(--success)' }}>{project.value}</td>
                    <td>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        {project.startDate} → {project.expectedEnd}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="btn btn-sm btn-secondary">👁️</button>
                        <button className="btn btn-sm btn-secondary">✏️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {projectsData.map((project) => (
            <div key={project.id} className="card" style={{ cursor: 'pointer', transition: 'var(--transition)' }}>
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>{project.id}</span>
                  <span className={`badge ${teamBadge(project.team)}`}>{project.team}</span>
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{project.customer}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>📍 {project.location} • {project.systemSize}</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                    <span style={{ color: 'var(--text-muted)' }}>{project.stage}</span>
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: 700, color: 'var(--success)', fontSize: 16 }}>{project.value}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Due: {project.expectedEnd}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
