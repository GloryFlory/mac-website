'use client';

import { useState, useEffect } from 'react';

export type TaskStatus = 'Done' | 'Closed' | 'Blocked' | 'Pending' | '';

export interface Task {
  label: string;
  status: TaskStatus;
  category?: string;
}

const CATEGORY_ORDER = [
  'Teachers',
  'Program & Schedule',
  'Venue & Equipment',
  'Marketing & Website',
  'Finance & Legal',
  'Event Day & Logistics',
  'Merch',
];

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  Done:    { bg: '#dcfce7', color: '#16a34a', label: 'Done' },
  Closed:  { bg: '#dbeafe', color: '#1d4ed8', label: 'Closed' },
  Pending: { bg: 'rgba(241,177,57,0.2)', color: '#92600a', label: 'Pending' },
  Blocked: { bg: '#fee2e2', color: '#dc2626', label: 'Blocked' },
  '':      { bg: '#f1f5f9', color: '#64748b', label: 'To do' },
};

function isAlwaysDone(task: Task): boolean {
  return task.status === 'Done' || task.status === 'Closed';
}

function TaskRow({
  task,
  isChecked,
  onClick,
}: {
  task: Task;
  isChecked: boolean;
  onClick?: () => void;
}) {
  const s = STATUS_STYLE[task.status];
  return (
    <div
      className={`px-5 py-3 flex items-center gap-3 transition-colors ${onClick ? 'cursor-pointer hover:bg-zinc-50 select-none' : ''}`}
      onClick={onClick}
      role={onClick ? 'checkbox' : undefined}
      aria-checked={onClick ? isChecked : undefined}
    >
      <div
        className="w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150"
        style={{
          borderColor: isChecked ? '#16a34a' : '#cbd5e1',
          background: isChecked ? '#dcfce7' : 'transparent',
        }}
      >
        {isChecked && (
          <svg className="w-2.5 h-2.5" fill="none" stroke="#16a34a" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`text-sm flex-1 ${isChecked ? 'line-through text-zinc-400' : 'text-zinc-700'}`}>
        {task.label}
      </span>
      {!isAlwaysDone(task) && (
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
          style={{ background: s.bg, color: s.color }}
        >
          {s.label}
        </span>
      )}
    </div>
  );
}

export default function ChecklistClient({ tasks }: { tasks: Task[] }) {
  const [localChecked, setLocalChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mac-organiser-checked');
      if (saved) setLocalChecked(new Set(JSON.parse(saved) as string[]));
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const toggle = (label: string) => {
    setLocalChecked((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      try {
        localStorage.setItem('mac-organiser-checked', JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const isComplete = (task: Task): boolean =>
    isAlwaysDone(task) || (mounted && localChecked.has(task.label));

  const completeTasks = tasks.filter(isComplete);
  const activeTasks = tasks.filter((t) => !isComplete(t));
  const blockedTasks = activeTasks.filter((t) => t.status === 'Blocked');
  const pendingTasks = activeTasks.filter((t) => t.status !== 'Blocked');
  const progressPct = Math.round((completeTasks.length / tasks.length) * 100);

  const grouped = pendingTasks.reduce<Record<string, Task[]>>((acc, task) => {
    const cat = task.category ?? 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(task);
    return acc;
  }, {});
  const orderedCategories = [
    ...CATEGORY_ORDER.filter((c) => grouped[c]),
    ...Object.keys(grouped).filter((c) => !CATEGORY_ORDER.includes(c)),
  ];

  return (
    <div className="space-y-10">

      {/* Progress bar */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">How far we&apos;ve come</h2>
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-zinc-700">
              {completeTasks.length} of {tasks.length} tasks complete
            </span>
            <span className="font-bold text-brand-sea">{progressPct}%</span>
          </div>
          <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progressPct}%`,
                background: 'linear-gradient(90deg, #106EA9 0%, #F1B139 100%)',
              }}
            />
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            {Object.entries(STATUS_STYLE).map(([key, s]) => {
              const count = tasks.filter((t) => t.status === key).length;
              return count > 0 ? (
                <div key={key} className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {s.label}
                  </span>
                  <span className="text-xs text-zinc-500">{count}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-serif text-2xl font-bold text-brand-sea">The Full Checklist</h2>
          <a
            href="https://docs.google.com/spreadsheets/d/1iHlqD5pt2WvWXUhhVDei01hNY8Dja5mgJICJl8e6FTc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors hover:bg-zinc-50"
            style={{ borderColor: '#e2e8f0', color: '#106EA9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in Google Sheets
          </a>
        </div>
        <p className="text-xs text-zinc-400 mb-4">
          Click any row to check it off — your progress is saved in this browser. The spreadsheet is the live source of truth for statuses.
        </p>

        {blockedTasks.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#dc2626' }}>Blocked</p>
            <div className="bg-white rounded-2xl border border-red-200 overflow-hidden divide-y divide-zinc-100">
              {blockedTasks.map((task, i) => (
                <TaskRow key={i} task={task} isChecked={false} onClick={() => toggle(task.label)} />
              ))}
            </div>
          </div>
        )}

        {orderedCategories.map((cat) => (
          <div key={cat} className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-2">{cat}</p>
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden divide-y divide-zinc-100">
              {grouped[cat].map((task, i) => (
                <TaskRow key={i} task={task} isChecked={false} onClick={() => toggle(task.label)} />
              ))}
            </div>
          </div>
        ))}

        {completeTasks.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#16a34a' }}>
              Complete
              {mounted && localChecked.size > 0 && (
                <span className="ml-2 text-zinc-400 font-normal normal-case">&mdash; click to uncheck</span>
              )}
            </p>
            <div className="bg-white rounded-2xl border border-green-200 overflow-hidden divide-y divide-zinc-100 opacity-75">
              {completeTasks.map((task, i) => (
                <TaskRow
                  key={i}
                  task={task}
                  isChecked={true}
                  onClick={!isAlwaysDone(task) ? () => toggle(task.label) : undefined}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
