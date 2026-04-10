// ============================================
// SunlynksCRM - Leads Management Page
// ============================================

import React, { useState } from 'react';
import { leadsData } from '../data/mockData';

const statusBadge = (status) => {
  const map = {
    'New': 'badge-new',
    'Contacted': 'badge-contacted',
    'Site Visit': 'badge-sitevisit',
    'Proposal Sent': 'badge-proposal',
    'Negotiation': 'badge-negotiation',
    'Won': 'badge-won',
    'Lost': 'badge-lost',
  };
  return map[status] || 'badge-info';
};

const Leads = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const statuses = ['All', 'New', 'Contacted', 'Site Visit', 'Proposal Sent', 'Negotiation', 'Won'];

  const filteredLeads = leadsData.filter(lead => {
    const matchesFilter = filter === 'All' || lead.status === filter;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Top Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Leads</span></div>
          <div className="value">{leadsData.length}</div>
          <div className="change positive">↑ 12 this week</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>New Leads</span></div>
          <div className="value">{leadsData.filter(l => l.status === 'New').length}</div>
          <div className="change positive">↑ Needs follow-up</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Won</span></div>
          <div className="value">{leadsData.filter(l => l.status === 'Won').length}</div>
          <div className="change positive">↑ Great progress!</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Value</span></div>
          <div className="value">₹59.8L</div>
          <div className="change positive">↑ Pipeline value</div>
        </div>
      </div>

      {/* Filters & Actions */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {statuses.map(status => (
              <button
                key={status}
                className={`btn btn-sm ${filter === status ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search leads..."
              style={{ width: 240 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary">+ Add Lead</button>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Lead ID</th>
                <th>Customer Name</th>
                <th>Contact</th>
                <th>Location</th>
                <th>System Size</th>
                <th>Value</th>
                <th>Status</th>
                <th>Source</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{lead.id}</td>
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{lead.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{lead.email}</div>
                  </td>
                  <td style={{ fontSize: 13 }}>{lead.phone}</td>
                  <td>{lead.location}</td>
                  <td><span style={{ fontWeight: 600 }}>{lead.systemSize}</span></td>
                  <td style={{ fontWeight: 700, color: 'var(--success)' }}>{lead.value}</td>
                  <td><span className={`badge ${statusBadge(lead.status)}`}>{lead.status}</span></td>
                  <td style={{ fontSize: 13 }}>{lead.source}</td>
                  <td style={{ fontSize: 13, color: 'var(--text-muted)' }}>{lead.date}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-sm btn-secondary" title="View">👁️</button>
                      <button className="btn btn-sm btn-secondary" title="Edit">✏️</button>
                      <button className="btn btn-sm btn-secondary" title="Call">📞</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leads;
