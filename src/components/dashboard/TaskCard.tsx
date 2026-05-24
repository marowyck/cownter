'use client';

interface TaskCardProps {
  task: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  animals: string;
}

export function TaskCard({ task, date, priority, animals }: TaskCardProps) {
  const priorityStyles = {
    high: 'bg-red-50 border-red-100',
    medium: 'bg-yellow-50 border-yellow-100',
    low: 'bg-green-50 border-green-100',
  };

  const dotColor = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };

  const buttonStyles = {
    high: 'bg-red-100 text-red-700 hover:bg-red-200',
    medium: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    low: 'bg-green-100 text-green-700 hover:bg-green-200',
  };

  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${priorityStyles[priority]}`}>
      <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${dotColor[priority]}`} />
      <div className="flex-1">
        <p className="font-semibold text-dark text-sm">{task}</p>
        <p className="text-xs text-dark/60 mt-1">{date}</p>
        <p className="text-xs text-dark/50 mt-1">{animals}</p>
      </div>
      <button className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors flex-shrink-0 ${buttonStyles[priority]}`}>
        Ver
      </button>
    </div>
  );
}
