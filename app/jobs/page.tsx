"use client";

import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  status: 'Open' | 'Closed' | 'Draft';
  applicants: number;
  posted: string;
}

export default function JobsPage() {
  const [jobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      status: 'Open',
      applicants: 45,
      posted: '2024-01-10',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      status: 'Open',
      applicants: 32,
      posted: '2024-01-12',
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      status: 'Open',
      applicants: 28,
      posted: '2024-01-14',
    },
    {
      id: 4,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Contract',
      status: 'Closed',
      applicants: 67,
      posted: '2023-12-20',
    },
  ]);

  const [filterStatus, setFilterStatus] = useState('all');

  const filteredJobs = jobs.filter((job) => {
    if (filterStatus === 'all') return true;
    return job.status === filterStatus;
  });

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      Open: 'bg-green-100 text-green-800',
      Closed: 'bg-gray-100 text-gray-800',
      Draft: 'bg-yellow-100 text-yellow-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Jobs</h1>
            <p className="mt-2 text-gray-600">Manage and post job openings</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
            + Create Job
          </button>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex gap-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterStatus === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Jobs
            </button>
            <button
              onClick={() => setFilterStatus('Open')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterStatus === 'Open'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setFilterStatus('Closed')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterStatus === 'Closed'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Closed
            </button>
            <button
              onClick={() => setFilterStatus('Draft')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterStatus === 'Draft'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Draft
            </button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                  {job.status}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">🏭</span> {job.department}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">📍</span> {job.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">📅</span> {job.type}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">👥</span> {job.applicants} applicants
                </p>
                <p className="text-sm text-gray-500">Posted: {job.posted}</p>
              </div>
              <div className="mt-6 flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
