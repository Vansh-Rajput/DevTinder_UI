# How we started?

- create a login handle in login.jsx and use axios to make make api, fetch() could also be used
- get exact target values of email password through state variables.
- setup npm i cors on backend part, use it as middleware.

‼️ BEWARE TO CHECK app.use(cors) in backend, origin must match port of your devtinder ‼️

- now to get cookies as well in application, go to backend and write credentials and origin inside app.use(cors)...
  after you logged in through signin button.
  again setup withcredentials in axios api at login.jsx

- setup redux toolkit and add the users through dipatch...


# AXIOS
- for axios.get(,{withcre}) use 2 parameters
- for .post use 3 parameters, 2nd refers to body .post(,{},{withcre})  use it eventhough body is empty


# Launching AWS
- launch instance and create key value pair
- cmod 400 .pem format
- connected to machine through ---  ssh -i "dtinder.pem"....in connect of instance , pem file is like secret key used to access to server.
- install node version same on vscode "node -v" by nvm install 23.11.0
- git clone https...... on to terminal and use username Vansh-Rajput and personal access token from github...generate if expired..
- use ls to check files in your virtual system, will see both front/back files

- install nginx to ubuntu to deploy our application, nginx acts like a layer before my backend, when i make any request from frontend, it handles, hence acts like a reverse proxy..
- sudo apt install nginx,  then sudo systemctl start nginx
- sudo systemctl enable nginx
- now we will copy our prod code or dist folder to http server repository of nginx, its path is /var/www/html/....
- copying all dist files to /var/.....opening first cd DevTinder_UI, then  sudo scp -r dist/* /var/www/html/.....
- done!!! now enable your port 80 on aws->instance->security groups below, use public ip4 address of aws instance then ....


- allow ip access in mongodb. of aws ip4.
- npm start your proj but we also want our backend to run forever with frontend, so we will use pm2, it creates a new process which runs 24x7....npm install pm2 -g...

- pm2 start npm -- start, pm2 stop npm, pm2 delete npm to delt the process
- pm2 start npm --name "devtinder-backend" -- start , to start and give custom name
- pm2 logs , helps in knowing status of our application, if any error occurs then it can be tracked 

- now time to merge back and front, as port of our backend is 3333, check in app.js , app.listen part, dont use :5173, that was of localhost.....

- again enable it in your security of instance in aws...
- <ip4 port>:3333/user/feed try using backend api, it will show token error response as we didnt loggedin, hence our backend working now💪.
- use pm2 create a process and all set.. now time to link our ip with a proper domain name like devtinder.com, not these wierd ip's.....

- frontend : 13.62.18.115/
- backend : 13.62.18.115:3333
- for that we use nginx proxy pass...



- sudo nano /etc/nginx/sites-available/default , go to this file, it contains the rules or config of our domain, like its devtinder.com for us, it tells nginx that:---
"When someone visits devtinder.com, serve this React frontend"
"If someone hits /api, forward it to my backend"
"Use port 80 (or 443 for HTTPS)"
"Serve static files from /var/www/html"

- provide your ip4 in server name which was initially _       'give just ip'
- add location/api/ rule, in proxy_pass use your http://localhost:3333/ , your Node.js backend is running on the same server as NGINX. So localhost can be used instead of ip....
- proxy_pass means where we want forward our request to...EX-> in your location/api/ location maps with proxy_pass and /api/ matches the correct req if we also mentioned any api

- now just exit through ^x and save changes y then enter
- use command sudo systemctl restart nginx to restart {{ and run the displayed command if it shows warning, else done }}


- now our api calls could be made to backend with mapping 😁
🌐 User/browser hits:
http://13.62.18.115/api/user/feed

🔄 NGINX says:
“Oh, this matches /api/ — let me pass this to the backend”

🖥️ Internally, NGINX calls:
http://localhost:5000/api/user/feed




# HOW DO WE REDEPLOY THE CHANGES MADE HERE,, like /api??
- first commit the code on github and push
- now time to make same changes to vm machine too, keep checking git log to know changes were made, you will see your commit there.. now we dont see
- use git pull, this will save changes from github to our vm machine.. ....fix issues if any by chatgpt....
- now 
- again copy these new changes from our dist to /var/www/html folder by  sudo scp -r dist/* /var/www/html/

