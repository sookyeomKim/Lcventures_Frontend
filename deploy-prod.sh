echo 'Running npm install & npm build'
cd /var/www/Lcventures_Frontend && npm set progress=false && npm install -s --no-progress && npm run build
echo 'Done...'
