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
      max_memory_restart: '500M'
    },
    {
      name: 'dormitory-frontend',
      script: 'node_modules/.bin/serve',
      args: '-s dist -l 3001',
      cwd: '/app/dormitory-management/frontend',
      instances: 1,
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log'
    }
  ]
};
