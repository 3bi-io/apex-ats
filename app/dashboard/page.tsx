import DashboardLayout from '../components/DashboardLayout';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Candidates', value: '1,247', change: '+12%', icon: '👥' },
    { label: 'Active Jobs', value: '38', change: '+3', icon: '💼' },
    { label: 'Applications', value: '456', change: '+28%', icon: '📝' },
    { label: 'Interviews Scheduled', value: '89', change: '+15', icon: '📅' },
  ];

  const recentApplications = [
    { id: 1, candidate: 'Sarah Johnson', position: 'Senior Software Engineer', status: 'Interview', date: '2024-01-15' },
    { id: 2, candidate: 'Michael Chen', position: 'Product Manager', status: 'Review', date: '2024-01-15' },
    { id: 3, candidate: 'Emily Rodriguez', position: 'UX Designer', status: 'Offer', date: '2024-01-14' },
    { id: 4, candidate: 'David Kim', position: 'Data Analyst', status: 'Phone Screen', date: '2024-01-14' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="mt-2 text-sm text-green-600">{stat.change}</p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{app.candidate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
