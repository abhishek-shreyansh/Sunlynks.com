// ============================================
// SunlynksCRM - Analytics Page
// ============================================

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadialBarChart, RadialBar, Legend } from 'recharts';
import { revenueData } from '../data/mockData';

const conversionData = [
  { stage: 'Leads', count: 2847, rate: '100%' },
  { stage: 'Contacted', count: 1985, rate: '69.7%' },
  { stage: 'Site Visit', count: 1240, rate: '43.6%' },
  { stage: 'Proposal', count: 890, rate: '31.3%' },
  { stage: 'Won', count: 384, rate: '13.5%' },
];

const teamPerformance = [
  { name: 'Arjun', score: 92, fill: '#F97316' },
  { name: 'Ravi', score: 95, fill: '#10B981' },
  { name: 'Divya', score: 88, fill: '#0EA5E9' },
  { name: 'Pooja', score: 85, fill: '#8B5CF6' },
  { name: 'Suresh', score: 91, fill: '#EC4899' },
];

const sourceData = [
  { source: 'Website', leads: 820, color: '#F97316' },
  { source: 'Referral', leads: 650, color: '#10B981' },
  { source: 'Google Ads', leads: 540, color: '#3B82F6' },
  { source: 'Facebook', leads: 420, color: '#8B5CF6' },
  { source: 'LinkedIn', leads: 230, color: '#0EA5E9' },
  { source: 'Instagram', leads: 187, color: '#EC4899' },
];

const Analytics = () => {
  return (
    <div>
      {/* KPIs */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-card-header"><span>Conversion Rate</span></div>
          <div className="value" style={{ color: 'var(--success)' }}>13.5%</div>
          <div className="change positive">↑ 2.3% vs last quarter</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Avg Deal Size</span></div>
          <div className="value">₹5.8L</div>
          <div className="change positive">↑ 15% growth</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Avg Close Time</span></div>
          <div className="value">28 Days</div>
          <div className="change positive">↑ 4 days faster</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-header"><span>Customer Satisfaction</span></div>
          <div className="value" style={{ color: 'var(--success)' }}>4.8 ⭐</div>
          <div className="change positive">↑ Excellent rating</div>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-header">
          <h3>📈 Revenue Trend (12 Months)</h3>
        </div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProj" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
              <YAxis yAxisId="left" stroke="#64748B" fontSize={12} tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} />
              <YAxis yAxisId="right" orientation="right" stroke="#64748B" fontSize={12} />
              <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8, color: '#F8FAFC' }} />
              <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#F97316" strokeWidth={2} fill="url(#colorRev)" />
              <Area yAxisId="right" type="monotone" dataKey="projects" stroke="#0EA5E9" strokeWidth={2} fill="url(#colorProj)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid-2">
        {/* Conversion Funnel */}
        <div className="card">
          <div className="card-header">
            <h3>🔄 Conversion Funnel</h3>
          </div>
          <div className="card-body">
            {conversionData.map((item, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{item.stage}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.count} ({item.rate})</span>
                </div>
                <div className="progress-bar" style={{ height: 12 }}>
                  <div className="progress-fill" style={{
                    width: item.rate,
                    background: `linear-gradient(90deg, ${i === 0 ? '#F97316' : i === conversionData.length - 1 ? '#10B981' : '#0EA5E9'}, ${i === 0 ? '#FBBF24' : i === conversionData.length - 1 ? '#34D399' : '#38BDF8'})`
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Sources */}
        <div className="card">
          <div className="card-header">
            <h3>📊 Lead Sources</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={sourceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" stroke="#64748B" fontSize={12} />
                <YAxis type="category" dataKey="source" stroke="#64748B" fontSize={12} width={80} />
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8, color: '#F8FAFC' }} />
                <Bar dataKey="leads" radius={[0, 6, 6, 0]}>
                  {sourceData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="card" style={{ marginTop: 24 }}>
        <div className="card-header">
          <h3>👥 Team Performance Scores</h3>
        </div>
        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, textAlign: 'center' }}>
            {teamPerformance.map((member, i) => (
              <div key={i} style={{ padding: 20 }}>
                <div style={{
                  width: 90, height: 90, borderRadius: '50%',
                  background: `conic-gradient(${member.fill} ${member.score * 3.6}deg, var(--bg-tertiary) 0deg)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <div style={{
                    width: 70, height: 70, borderRadius: '50%',
                    background: 'var(--bg-card)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, fontWeight: 800, color: member.fill
                  }}>
                    {member.score}
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{member.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Score: {member.score}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
