module.exports = {
  apps: [
    {
      name: 'dormitory-backend',
      script: 'dist/main.js',
      cwd: '/app/dormitory-management/backend',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_memory_restart: '500M',
      restart_delay: 4000,
      watch: false
    },
    {
      name: 'dormitory-frontend',
      script: 'dist/index.js',
      cwd: '/app/dormitory-management/frontend',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'your-server-ip',
      key: '~/.ssh/id_ed25519_dorm',
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/dormitory-management-system.git',
      path: '/app/dormitory-management',
      'post-deploy': 'npm install && npm run build && pm2 restart ecosystem.config.js --env production'
    }
  }
};
