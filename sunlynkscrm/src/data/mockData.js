// ============================================
// SunlynksCRM Mock Data
// ============================================

export const statsData = [
  { label: 'Total Leads', value: '2,847', change: '+12.5%', positive: true, icon: 'users' },
  { label: 'Active Projects', value: '384', change: '+8.2%', positive: true, icon: 'folder' },
  { label: 'Revenue (₹)', value: '₹4.2 Cr', change: '+22.1%', positive: true, icon: 'trending' },
  { label: 'Installations', value: '156', change: '+15.3%', positive: true, icon: 'zap' },
];

export const revenueData = [
  { month: 'Jan', revenue: 3200000, projects: 28 },
  { month: 'Feb', revenue: 4100000, projects: 35 },
  { month: 'Mar', revenue: 3800000, projects: 32 },
  { month: 'Apr', revenue: 5200000, projects: 45 },
  { month: 'May', revenue: 4800000, projects: 41 },
  { month: 'Jun', revenue: 6100000, projects: 52 },
  { month: 'Jul', revenue: 5500000, projects: 48 },
  { month: 'Aug', revenue: 7200000, projects: 60 },
  { month: 'Sep', revenue: 6800000, projects: 56 },
  { month: 'Oct', revenue: 8100000, projects: 68 },
  { month: 'Nov', revenue: 7500000, projects: 64 },
  { month: 'Dec', revenue: 9200000, projects: 78 },
];

export const pipelineData = [
  { stage: 'Lead', count: 245, color: '#F59E0B' },
  { stage: 'Site Visit', count: 180, color: '#3B82F6' },
  { stage: 'Proposal', count: 142, color: '#8B5CF6' },
  { stage: 'Finance', count: 98, color: '#EC4899' },
  { stage: 'Installation', count: 67, color: '#10B981' },
  { stage: 'Completed', count: 156, color: '#06B6D4' },
];

export const leadsData = [
  { id: 'SL-001', name: 'Rajesh Kumar', email: 'rajesh@email.com', phone: '+91 98765 43210', location: 'Mumbai, MH', systemSize: '10 kW', status: 'New', source: 'Website', date: '2026-04-01', value: '₹6,50,000' },
  { id: 'SL-002', name: 'Priya Sharma', email: 'priya@email.com', phone: '+91 87654 32109', location: 'Pune, MH', systemSize: '5 kW', status: 'Contacted', source: 'Referral', date: '2026-04-02', value: '₹3,25,000' },
  { id: 'SL-003', name: 'Amit Patel', email: 'amit@email.com', phone: '+91 76543 21098', location: 'Ahmedabad, GJ', systemSize: '15 kW', status: 'Site Visit', source: 'Facebook', date: '2026-04-03', value: '₹9,75,000' },
  { id: 'SL-004', name: 'Sneha Reddy', email: 'sneha@email.com', phone: '+91 65432 10987', location: 'Hyderabad, TS', systemSize: '8 kW', status: 'Proposal Sent', source: 'Google Ads', date: '2026-04-04', value: '₹5,20,000' },
  { id: 'SL-005', name: 'Vikram Singh', email: 'vikram@email.com', phone: '+91 54321 09876', location: 'Jaipur, RJ', systemSize: '20 kW', status: 'Negotiation', source: 'Website', date: '2026-04-05', value: '₹13,00,000' },
  { id: 'SL-006', name: 'Anita Desai', email: 'anita@email.com', phone: '+91 43210 98765', location: 'Nagpur, MH', systemSize: '3 kW', status: 'Won', source: 'Referral', date: '2026-04-06', value: '₹1,95,000' },
  { id: 'SL-007', name: 'Karan Malhotra', email: 'karan@email.com', phone: '+91 32109 87654', location: 'Delhi, DL', systemSize: '25 kW', status: 'New', source: 'LinkedIn', date: '2026-04-07', value: '₹16,25,000' },
  { id: 'SL-008', name: 'Meera Nair', email: 'meera@email.com', phone: '+91 21098 76543', location: 'Kochi, KL', systemSize: '6 kW', status: 'Contacted', source: 'Instagram', date: '2026-04-07', value: '₹3,90,000' },
];

export const projectsData = [
  { id: 'PRJ-001', customer: 'Rajesh Kumar', location: 'Mumbai, MH', systemSize: '10 kW', stage: 'Installation', team: 'Execution', progress: 75, startDate: '2026-03-01', expectedEnd: '2026-04-15', value: '₹6,50,000' },
  { id: 'PRJ-002', customer: 'Anita Desai', location: 'Nagpur, MH', systemSize: '3 kW', stage: 'Net Metering', team: 'Execution', progress: 90, startDate: '2026-02-15', expectedEnd: '2026-04-10', value: '₹1,95,000' },
  { id: 'PRJ-003', customer: 'Vikram Singh', location: 'Jaipur, RJ', systemSize: '20 kW', stage: 'Loan Processing', team: 'Finance', progress: 40, startDate: '2026-03-20', expectedEnd: '2026-05-30', value: '₹13,00,000' },
  { id: 'PRJ-004', customer: 'Sneha Reddy', location: 'Hyderabad, TS', systemSize: '8 kW', stage: 'Site Visit', team: 'Sales', progress: 20, startDate: '2026-04-01', expectedEnd: '2026-06-01', value: '₹5,20,000' },
  { id: 'PRJ-005', customer: 'Priya Sharma', location: 'Pune, MH', systemSize: '5 kW', stage: 'Commissioning', team: 'Execution', progress: 95, startDate: '2026-01-10', expectedEnd: '2026-04-08', value: '₹3,25,000' },
  { id: 'PRJ-006', customer: 'Karan Malhotra', location: 'Delhi, DL', systemSize: '25 kW', stage: 'Document Upload', team: 'Sales', progress: 15, startDate: '2026-04-05', expectedEnd: '2026-07-01', value: '₹16,25,000' },
];

export const teamMembers = [
  { id: 1, name: 'Arjun Mehta', role: 'Sales Head', team: 'Sales', avatar: '👨‍💼', projects: 12, performance: 92 },
  { id: 2, name: 'Divya Iyer', role: 'Finance Manager', team: 'Finance', avatar: '👩‍💼', projects: 8, performance: 88 },
  { id: 3, name: 'Ravi Teja', role: 'Installation Lead', team: 'Execution', avatar: '👷', projects: 15, performance: 95 },
  { id: 4, name: 'Pooja Gupta', role: 'Sales Executive', team: 'Sales', avatar: '👩‍💻', projects: 10, performance: 85 },
  { id: 5, name: 'Suresh Babu', role: 'Electrician', team: 'Execution', avatar: '🔧', projects: 18, performance: 91 },
  { id: 6, name: 'Nisha Verma', role: 'Loan Coordinator', team: 'Finance', avatar: '📋', projects: 7, performance: 87 },
];

export const activitiesData = [
  { id: 1, type: 'lead', message: 'New lead received from Karan Malhotra - 25kW system', time: '5 min ago', icon: '🆕' },
  { id: 2, type: 'project', message: 'PRJ-005 moved to Commissioning stage', time: '15 min ago', icon: '⚡' },
  { id: 3, type: 'finance', message: 'Loan approved for Vikram Singh - ₹13,00,000', time: '1 hour ago', icon: '✅' },
  { id: 4, type: 'document', message: 'Site survey report uploaded for PRJ-004', time: '2 hours ago', icon: '📄' },
  { id: 5, type: 'alert', message: 'Net metering application pending for PRJ-002', time: '3 hours ago', icon: '🔔' },
  { id: 6, type: 'team', message: 'Ravi Teja completed installation at PRJ-001', time: '4 hours ago', icon: '🏗️' },
  { id: 7, type: 'lead', message: 'Meera Nair scheduled site visit for April 12', time: '5 hours ago', icon: '📅' },
  { id: 8, type: 'finance', message: 'Disbursement received for PRJ-005 - ₹3,25,000', time: '6 hours ago', icon: '💰' },
];

export const documentsData = [
  { id: 1, name: 'Site_Survey_PRJ001.pdf', type: 'PDF', size: '2.4 MB', project: 'PRJ-001', uploadedBy: 'Arjun Mehta', date: '2026-04-01', category: 'Survey' },
  { id: 2, name: 'Loan_Application_PRJ003.pdf', type: 'PDF', size: '1.8 MB', project: 'PRJ-003', uploadedBy: 'Divya Iyer', date: '2026-04-02', category: 'Finance' },
  { id: 3, name: 'Customer_ID_Rajesh.jpg', type: 'Image', size: '850 KB', project: 'PRJ-001', uploadedBy: 'Pooja Gupta', date: '2026-03-28', category: 'Identity' },
  { id: 4, name: 'Electricity_Bill_PRJ004.pdf', type: 'PDF', size: '1.2 MB', project: 'PRJ-004', uploadedBy: 'Arjun Mehta', date: '2026-04-03', category: 'Utility' },
  { id: 5, name: 'Installation_Photos_PRJ002.zip', type: 'Archive', size: '15.6 MB', project: 'PRJ-002', uploadedBy: 'Ravi Teja', date: '2026-04-05', category: 'Installation' },
  { id: 6, name: 'Net_Metering_Form_PRJ002.pdf', type: 'PDF', size: '980 KB', project: 'PRJ-002', uploadedBy: 'Suresh Babu', date: '2026-04-06', category: 'Metering' },
];

export const notificationsData = [
  { id: 1, title: 'Loan Approved', message: 'Vikram Singh loan has been approved by HDFC Bank', type: 'success', time: '1 hour ago', read: false },
  { id: 2, title: 'Installation Delayed', message: 'PRJ-001 installation delayed due to weather', type: 'warning', time: '2 hours ago', read: false },
  { id: 3, title: 'New Lead Assigned', message: 'Karan Malhotra assigned to Pooja Gupta', type: 'info', time: '3 hours ago', read: true },
  { id: 4, title: 'Payment Received', message: 'Advance payment of ₹1,50,000 received for PRJ-006', type: 'success', time: '5 hours ago', read: true },
  { id: 5, title: 'Document Missing', message: 'Electricity bill required for PRJ-004', type: 'error', time: '6 hours ago', read: false },
];
