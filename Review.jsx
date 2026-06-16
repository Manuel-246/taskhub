export default function Review() {
  const tasks = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter(
      task => task.completed
    ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const highPriority =
    tasks.filter(
      task => task.priority === "High"
    ).length;

  const mediumPriority =
    tasks.filter(
      task => task.priority === "Medium"
    ).length;

  const lowPriority =
    tasks.filter(
      task => task.priority === "Low"
    ).length;

  const completionRate =
    totalTasks > 0
      ? Math.round(
          (completedTasks / totalTasks) * 100
        )
      : 0;

  return (
    <div>

      <div className="hero-section">
        <h1>📊 Review & Analytics</h1>
        <p>
          Track your productivity and
          task performance.
        </p>
      </div>

      <div className="stats-grid">

        <div className="glass-card">
          <h3>🚀 Total Tasks</h3>
          <h1>{totalTasks}</h1>
        </div>

        <div className="glass-card">
          <h3>✅ Completed</h3>
          <h1>{completedTasks}</h1>
        </div>

        <div className="glass-card">
          <h3>⏳ Pending</h3>
          <h1>{pendingTasks}</h1>
        </div>

        <div className="glass-card">
          <h3>📈 Completion</h3>
          <h1>{completionRate}%</h1>
        </div>

      </div>

      <div className="dashboard-row">

        <div className="glass-panel">

          <h2>Productivity Score</h2>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width:
                  `${completionRate}%`
              }}
            />

          </div>

          <h1>{completionRate}%</h1>

        </div>

        <div className="glass-panel">

          <h2>Priority Breakdown</h2>

          <div className="priority-item">
            🔥 High Priority:
            <strong>
              {" "}
              {highPriority}
            </strong>
          </div>

          <div className="priority-item">
            ⚡ Medium Priority:
            <strong>
              {" "}
              {mediumPriority}
            </strong>
          </div>

          <div className="priority-item">
            🌱 Low Priority:
            <strong>
              {" "}
              {lowPriority}
            </strong>
          </div>

        </div>

      </div>

      <div className="glass-panel">

        <h2>Recent Tasks</h2>

        {tasks.length === 0 ? (
          <p>
            No tasks available.
          </p>
        ) : (
          tasks
            .slice(-5)
            .reverse()
            .map(task => (
              <div
                key={task.id}
                className="task-preview"
              >
                {task.completed
                  ? "✅"
                  : "⬜"}

                <span>
                  {task.title}
                </span>

                <span>
                  ({task.priority})
                </span>

              </div>
            ))
        )}

      </div>

    </div>
  );
}