// ============================================
// SunlynksCRM - Finance Page
// ============================================

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const loanData = [
  { id: 'LN-001', customer: 'Vikram Singh', bank: 'HDFC Bank', amount: '₹9,10,000', status: 'Approved', disbursed: '₹4,55,000', project: 'PRJ-003' },
  { id: 'LN-002', customer: 'Rajesh Kumar', bank: 'SBI', amount: '₹4,55,000', status: 'Disbursed', disbursed: '₹4,55,000', project: 'PRJ-001' },
  { id: 'LN-003', customer: 'Karan Malhotra', bank: 'Axis Bank', amount: '₹11,37,500', status: 'Pending', disbursed: '₹0', project: 'PRJ-006' },
  { id: 'LN-004', customer: 'Sneha Reddy', bank: 'ICICI Bank', amount: '₹3,64,000', status: 'In Review', disbursed: '₹0', project: 'PRJ-004' },
  { id: 'LN-005', customer: 'Priya Sharma', bank: 'PNB', amount: '₹2,27,500', status: 'Disbursed', disbursed: '₹2,27,500', project: 'PRJ-005' },
];

const monthlyDisbursement = [
  { month: 'Jan', amount: 1800000 },
  { month: 'Feb', amount: 2400000 },
  { month: 'Mar', amount: 2100000 },
  { month: 'Apr', amount: 3200000 },
  { month: 'May', amount: 2900000 },
  { month: 'Jun', amount: 3800000 },
];

const loanStatusData = [
  { name: 'Approved', value: 12, color: '#10B981' },
  { name: 'Pending', value: 8, color: '#F59E0B' },
  { name: 'Disbursed', value: 18, color: '#0EA5E9' },
  { name: 'In Review', value: 5, color: '#8B5CF6' },
  { name: 'Rejected', value: 2, color: '#EF4444' },
];

const statusBadge = (status) => {
  const map = {
    'Approved': 'badge-success', 'Disbursed': 'badge-info',
    'Pending': 'badge-warning', 'In Review': 'badge-contacted', 'Rejected': 'badge-error',
  };
  return map[status] || 'badge-info';
};

const Finance = () => {
  return (
    <div>
      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Total Loan Value</span></div>
          <div className="value">₹30.9L</div>
          <div className="change positive">↑ 18.4% growth</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Disbursed</span></div>
          <div className="value">₹11.4L</div>
          <div className="change positive">↑ 2 completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Pending Approvals</span></div>
          <div className="value">8</div>
          <div className="change negative">↓ Needs attention</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Approval Rate</span></div>
          <div className="value">87%</div>
          <div className="change positive">↑ Above target</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3>💰 Monthly Disbursements</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={monthlyDisbursement}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} />
                <Tooltip
                  contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8, color: '#F8FAFC' }}
                  formatter={(value) => [`₹${(value / 100000).toFixed(1)}L`, 'Disbursed']}
                />
                <Bar dataKey="amount" fill="#10B981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>📊 Loan Status Overview</h3>
          </div>
          <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <ResponsiveContainer width="55%" height={260}>
              <PieChart>
                <Pie data={loanStatusData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" stroke="none">
                  {loanStatusData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8, color: '#F8FAFC' }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ flex: 1 }}>
              {loanStatusData.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: item.color }} />
                  <span style={{ flex: 1, fontSize: 13, color: 'var(--text-secondary)' }}>{item.name}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loans Table */}
      <div className="card">
        <div className="card-header">
          <h3>🏦 Loan Applications</h3>
          <button className="btn btn-primary">+ New Application</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Customer</th>
                <th>Bank</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Disbursed</th>
                <th>Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map(loan => (
                <tr key={loan.id}>
                  <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{loan.id}</td>
                  <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{loan.customer}</td>
                  <td>{loan.bank}</td>
                  <td style={{ fontWeight: 700 }}>{loan.amount}</td>
                  <td><span className={`badge ${statusBadge(loan.status)}`}>{loan.status}</span></td>
                  <td style={{ color: loan.disbursed === '₹0' ? 'var(--text-muted)' : 'var(--success)', fontWeight: 600 }}>{loan.disbursed}</td>
                  <td style={{ color: 'var(--secondary)', fontWeight: 600 }}>{loan.project}</td>
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
    </div>
  );
};

export default Finance;
