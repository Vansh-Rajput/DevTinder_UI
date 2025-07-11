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
- connected to machine through ssh -i "devtinder.pem" command., pem file is like secret key used to access to server.
- install node version same on vscode "node -v" by nvm install 23.11.0