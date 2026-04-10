// ============================================
// SunlynksCRM - Documents Page
// ============================================

import React, { useState } from 'react';
import { documentsData } from '../data/mockData';

const typeIcons = {
  'PDF': '📕',
  'Image': '🖼️',
  'Archive': '📦',
};

const Documents = () => {
  const [filterCat, setFilterCat] = useState('All');
  const categories = ['All', 'Survey', 'Finance', 'Identity', 'Utility', 'Installation', 'Metering'];

  const filtered = documentsData.filter(d => filterCat === 'All' || d.category === filterCat);

  return (
    <div>
      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Documents</span></div>
          <div className="value">{documentsData.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>PDF Files</span></div>
          <div className="value">{documentsData.filter(d => d.type === 'PDF').length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Size</span></div>
          <div className="value">22.8 MB</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>This Week</span></div>
          <div className="value">3</div>
        </div>
      </div>

      {/* Controls */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn btn-sm ${filterCat === cat ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="btn btn-primary">📤 Upload Document</button>
        </div>
      </div>

      {/* Documents Table */}
      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Project</th>
                <th>Category</th>
                <th>Uploaded By</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(doc => (
                <tr key={doc.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{typeIcons[doc.type] || '📄'}</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{doc.name}</span>
                    </div>
                  </td>
                  <td><span className="badge badge-info">{doc.type}</span></td>
                  <td>{doc.size}</td>
                  <td style={{ fontWeight: 600, color: 'var(--secondary)' }}>{doc.project}</td>
                  <td><span className="badge badge-warning">{doc.category}</span></td>
                  <td>{doc.uploadedBy}</td>
                  <td style={{ fontSize: 13, color: 'var(--text-muted)' }}>{doc.date}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-sm btn-secondary" title="View">👁️</button>
                      <button className="btn btn-sm btn-secondary" title="Download">⬇️</button>
                      <button className="btn btn-sm btn-secondary" title="Delete">🗑️</button>
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

export default Documents;
