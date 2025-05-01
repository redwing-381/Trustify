import { Archive, Clock, FileText, Users } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Created new capsule",
      capsule: "Family Trust",
      date: "Today at 2:34 PM",
      icon: Archive,
      color: "primary",
    },
    {
      id: 2,
      action: "Added beneficiary",
      capsule: "Charity Fund",
      date: "Yesterday at 11:15 AM",
      icon: Users,
      color: "secondary",
    },
    {
      id: 3,
      action: "Uploaded document",
      capsule: "Family Trust",
      date: "May 1, 2025 at 9:22 AM",
      icon: FileText,
      color: "accent-foreground",
    },
    {
      id: 4,
      action: "Set up automated payment",
      capsule: "Education Fund",
      date: "April 28, 2025 at 3:45 PM",
      icon: Clock,
      color: "primary",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-4 rounded-lg border border-primary/10 p-3 hover:shadow-sm transition-shadow"
        >
          <div className={`rounded-full bg-${activity.color}/10 p-2`}>
            <activity.icon className={`h-4 w-4 text-${activity.color}`} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{activity.action}</p>
            <p className="text-xs text-muted-foreground">
              {activity.capsule} • {activity.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
