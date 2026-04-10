// ============================================
// SunlynksCRM - Pipeline (Kanban) Page
// ============================================

import React from 'react';
import { leadsData } from '../data/mockData';

const pipelineStages = [
  { key: 'New', label: 'New Leads', color: '#3B82F6', icon: '🆕' },
  { key: 'Contacted', label: 'Contacted', color: '#8B5CF6', icon: '📞' },
  { key: 'Site Visit', label: 'Site Visit', color: '#F59E0B', icon: '🏠' },
  { key: 'Proposal Sent', label: 'Proposal', color: '#EC4899', icon: '📋' },
  { key: 'Negotiation', label: 'Negotiation', color: '#F97316', icon: '🤝' },
  { key: 'Won', label: 'Won', color: '#10B981', icon: '🏆' },
];

const Pipeline = () => {
  return (
    <div>
      {/* Pipeline Summary */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 24 }}>
            {pipelineStages.map(stage => {
              const count = leadsData.filter(l => l.status === stage.key).length;
              return (
                <div key={stage.key} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 800 }}>{count}</div>
                  <div style={{ fontSize: 12, color: stage.color, fontWeight: 600 }}>{stage.label}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn btn-sm btn-secondary">🔄 Refresh</button>
            <button className="btn btn-primary">+ Add Deal</button>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="pipeline-board">
        {pipelineStages.map(stage => {
          const stageLeads = leadsData.filter(l => l.status === stage.key);
          return (
            <div key={stage.key} className="pipeline-column">
              <div className="pipeline-column-header">
                <h4>
                  <span style={{ color: stage.color }}>{stage.icon}</span>
                  {stage.label}
                </h4>
                <span className="count">{stageLeads.length}</span>
              </div>
              <div className="pipeline-cards">
                {stageLeads.map(lead => (
                  <div key={lead.id} className="pipeline-card">
                    <h5>{lead.name}</h5>
                    <p>📍 {lead.location}</p>
                    <p>⚡ {lead.systemSize} System</p>
                    <div className="card-footer">
                      <span>{lead.value}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}>{lead.source}</span>
                    </div>
                  </div>
                ))}
                {stageLeads.length === 0 && (
                  <div style={{
                    padding: 24, textAlign: 'center', color: 'var(--text-muted)',
                    fontSize: 13, border: '2px dashed var(--border)', borderRadius: 8
                  }}>
                    No deals in this stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pipeline;
