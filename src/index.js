import { Chart } from 'chart.js';

// Mock Data
const userActivities = [
  {"username": "user1", "status": "Active"},
  {"username": "user2", "status": "Inactive"},
  {"username": "user3", "status": "Active"}
];

const alerts = [
  {"activity": "Multiple login attempts by user2"}
];

// Render User Activities
const activitiesElement = document.getElementById('activities');
userActivities.forEach(activity => {
  const li = document.createElement('li');
  li.textContent = `${activity.username} - ${activity.status}`;
  activitiesElement.appendChild(li);
});

// Render Alerts
const alertsElement = document.getElementById('alerts');
alerts.forEach(alert => {
  const li = document.createElement('li');
  li.textContent = alert.activity;
  alertsElement.appendChild(li);
});

// Render Graphical Representation using Chart.js
const activeUsers = userActivities.filter(user => user.status === 'Active').length;
const inactiveUsers = userActivities.length - activeUsers;

const ctx = document.getElementById('userChart').getContext('2d');
const userChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Active', 'Inactive'],
    datasets: [{
      data: [activeUsers, inactiveUsers],
      backgroundColor: ['#36a2eb', '#ff6384']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
