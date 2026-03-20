import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Users, UserCog, Phone, Bell, Ticket, UserPlus, GraduationCap, CalendarDays, Video } from "lucide-react";

export function OperationsDashboard() {
  const metrics = [
    { title: 'Total Employees', value: '156', change: '+8', icon: Users, color: '#ff691d' },
    { title: 'Active Tutors', value: '42', change: '+5', icon: GraduationCap, color: '#610981' },
    { title: 'Frontline Team', value: '28', change: '+3', icon: Phone, color: '#10b981' },
    { title: 'Active Users', value: '1,247', change: '+156', icon: UserPlus, color: '#f59e0b' },
    { title: 'Recorded Classes', value: '89', change: '+12', icon: Video, color: '#8b5cf6' },
  ];

  const recentActivities = [
    { id: 1, action: 'New Tutor Added', user: 'Priya Sharma', time: '10 mins ago', type: 'tutor' },
    { id: 2, action: 'Coupon Code Created', user: 'SUMMER25', time: '25 mins ago', type: 'coupon' },
    { id: 3, action: 'Employee Updated', user: 'Rahul Kumar', time: '1 hour ago', type: 'employee' },
    { id: 4, action: 'New Class Scheduled', user: 'Advanced Yoga', time: '2 hours ago', type: 'class' },
    { id: 5, action: 'Lead Assigned', user: 'Amit Patel', time: '3 hours ago', type: 'lead' },
    { id: 6, action: 'Notification Sent', user: 'Monthly Update', time: '4 hours ago', type: 'notification' },
  ];

  const quickStats = [
    { label: 'Pending Approvals', value: '12', color: '#f59e0b' },
    { label: 'Active Coupons', value: '8', color: '#10b981' },
    { label: 'New Leads Today', value: '34', color: '#610981' },
    { label: 'Scheduled Classes', value: '156', color: '#ff691d' },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold" style={{ color: '#ff691d' }}>Operations Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage business operations and team activities</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                  style={{ backgroundColor: metric.color }}
                />
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${metric.color}20` }}>
                    <Icon className="w-4 h-4" style={{ color: metric.color }} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-semibold">{metric.value}</div>
                    <span className="text-sm font-medium text-green-600">{metric.change}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Management Overview */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff691d]/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle style={{ color: '#ff691d' }}>Team Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <UserCog className="w-5 h-5" style={{ color: '#610981' }} />
                    <span className="font-medium">Employees</span>
                  </div>
                  <span className="text-sm font-semibold">156</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5" style={{ color: '#ff691d' }} />
                    <span className="font-medium">Tutors</span>
                  </div>
                  <span className="text-sm font-semibold">42</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: '#10b981' }} />
                    <span className="font-medium">Frontline Team</span>
                  </div>
                  <span className="text-sm font-semibold">28</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffac96]/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle style={{ color: '#ff691d' }}>System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5" style={{ color: '#f59e0b' }} />
                    <span className="font-medium">Active Coupons</span>
                  </div>
                  <span className="text-sm font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                    <span className="font-medium">Notifications Sent</span>
                  </div>
                  <span className="text-sm font-semibold">245</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-5 h-5" style={{ color: '#3b82f6' }} />
                    <span className="font-medium">Active Classes</span>
                  </div>
                  <span className="text-sm font-semibold">156</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                    <span className="font-medium">Recorded Classes</span>
                  </div>
                  <span className="text-sm font-semibold">89</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}