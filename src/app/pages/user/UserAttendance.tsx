import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Calendar, Check, X, Clock, TrendingUp, Award } from "lucide-react";
import { Button } from "../../components/ui/button";

export function UserAttendance() {
  const [selectedMonth, setSelectedMonth] = useState('March 2026');

  const metrics = [
    { title: 'Total Classes', value: '124', icon: Calendar, color: '#ff691d' },
    { title: 'Classes Attended', value: '114', icon: Check, color: '#10b981' },
    { title: 'Classes Missed', value: '10', icon: X, color: '#ef4444' },
    { title: 'Attendance Rate', value: '92%', icon: TrendingUp, color: '#610981' },
  ];

  const attendanceRecords = [
    { 
      id: 1, 
      className: 'Advanced Hatha Yoga', 
      date: 'Mar 10, 2026', 
      time: '6:00 PM',
      instructor: 'Priya Sharma',
      status: 'present',
      duration: '60 min'
    },
    { 
      id: 2, 
      className: 'Pranayama Basics', 
      date: 'Mar 9, 2026', 
      time: '7:00 AM',
      instructor: 'Rahul Kumar',
      status: 'present',
      duration: '45 min'
    },
    { 
      id: 3, 
      className: 'Meditation & Mindfulness', 
      date: 'Mar 9, 2026', 
      time: '8:00 AM',
      instructor: 'Anita Verma',
      status: 'present',
      duration: '30 min'
    },
    { 
      id: 4, 
      className: 'Power Yoga Flow', 
      date: 'Mar 8, 2026', 
      time: '6:30 PM',
      instructor: 'Vikram Singh',
      status: 'present',
      duration: '75 min'
    },
    { 
      id: 5, 
      className: 'Advanced Hatha Yoga', 
      date: 'Mar 8, 2026', 
      time: '6:00 PM',
      instructor: 'Priya Sharma',
      status: 'absent',
      duration: '60 min'
    },
    { 
      id: 6, 
      className: 'Restorative Yoga', 
      date: 'Mar 7, 2026', 
      time: '7:00 PM',
      instructor: 'Priya Sharma',
      status: 'present',
      duration: '60 min'
    },
    { 
      id: 7, 
      className: 'Pranayama Basics', 
      date: 'Mar 7, 2026', 
      time: '7:00 AM',
      instructor: 'Rahul Kumar',
      status: 'present',
      duration: '45 min'
    },
    { 
      id: 8, 
      className: 'Meditation & Mindfulness', 
      date: 'Mar 6, 2026', 
      time: '8:00 AM',
      instructor: 'Anita Verma',
      status: 'present',
      duration: '30 min'
    },
    { 
      id: 9, 
      className: 'Vinyasa Flow', 
      date: 'Mar 6, 2026', 
      time: '6:00 AM',
      instructor: 'Rahul Kumar',
      status: 'late',
      duration: '60 min'
    },
    { 
      id: 10, 
      className: 'Advanced Hatha Yoga', 
      date: 'Mar 5, 2026', 
      time: '6:00 PM',
      instructor: 'Priya Sharma',
      status: 'present',
      duration: '60 min'
    },
  ];

  const monthlyStats = [
    { month: 'January', attended: 28, total: 30, rate: 93 },
    { month: 'February', attended: 26, total: 28, rate: 93 },
    { month: 'March', attended: 10, total: 11, rate: 91 },
  ];

  const classWiseAttendance = [
    { className: 'Advanced Hatha Yoga', attended: 12, total: 14, rate: 86 },
    { className: 'Pranayama Basics', attended: 10, total: 10, rate: 100 },
    { className: 'Meditation & Mindfulness', attended: 18, total: 20, rate: 90 },
    { className: 'Power Yoga Flow', attended: 8, total: 10, rate: 80 },
    { className: 'Restorative Yoga', attended: 15, total: 16, rate: 94 },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'present': return '#10b981';
      case 'absent': return '#ef4444';
      case 'late': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'present': return 'Present';
      case 'absent': return 'Absent';
      case 'late': return 'Late';
      default: return status;
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold" style={{ color: '#ff691d' }}>My Attendance</h1>
          <p className="text-muted-foreground mt-1">Track your class attendance and progress</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  <div className="text-2xl font-semibold">{metric.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Monthly Stats and Class-wise Attendance */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Stats */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff691d]/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle style={{ color: '#ff691d' }}>Monthly Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{stat.month}</span>
                      <span className="text-sm text-muted-foreground">
                        {stat.attended}/{stat.total} classes
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all rounded-full"
                          style={{ 
                            width: `${stat.rate}%`,
                            backgroundColor: stat.rate >= 90 ? '#10b981' : stat.rate >= 75 ? '#f59e0b' : '#ef4444'
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-12 text-right">{stat.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Class-wise Attendance */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#610981]/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle style={{ color: '#ff691d' }}>Class-wise Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classWiseAttendance.map((class_item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{class_item.className}</span>
                      <span className="text-xs text-muted-foreground">
                        {class_item.attended}/{class_item.total}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all rounded-full"
                          style={{ 
                            width: `${class_item.rate}%`,
                            backgroundColor: '#610981'
                          }}
                        />
                      </div>
                      <span className="text-xs font-semibold w-10 text-right">{class_item.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Achievement */}
        <Card className="relative overflow-hidden border-2" style={{ borderColor: '#10b981' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/5 rounded-full blur-3xl" />
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#10b98120' }}>
                <Award className="w-12 h-12" style={{ color: '#10b981' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Excellent Attendance!</h3>
                <p className="text-sm text-muted-foreground">
                  You've maintained a 92% attendance rate. Keep up the great work!
                </p>
              </div>
              <Badge 
                className="text-base px-4 py-2" 
                style={{ backgroundColor: '#10b98120', color: '#10b981' }}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                92%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Recent Attendance Records */}
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffac96]/5 rounded-full blur-3xl" />
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle style={{ color: '#ff691d' }}>Recent Attendance</CardTitle>
            <Button variant="outline" size="sm">
              Export Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Class</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Instructor</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Time</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Duration</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRecords.map((record) => (
                    <tr key={record.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm">{record.date}</td>
                      <td className="py-3 px-4">
                        <span className="font-medium text-sm">{record.className}</span>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{record.instructor}</td>
                      <td className="py-3 px-4 text-sm">{record.time}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {record.duration}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge 
                          style={{ 
                            backgroundColor: `${getStatusColor(record.status)}20`, 
                            color: getStatusColor(record.status) 
                          }}
                        >
                          {getStatusLabel(record.status)}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
