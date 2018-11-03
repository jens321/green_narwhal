# Green Narwhal

## H2 API To Use
1. CISCO API (https://developer.webex.com/resource-teams.html)
2. PayPal API
3. Google Cloud API (firebase)
4. Here API (https://developer.here.com/documentation)
    - Geocode and auto search (?)miles around you - guest end


## H2 Frontend Technologies
1. React
2. Redux?
3. PayPal Checkout API (JS feature - https://developer.paypal.com/docs/checkout/quick-start/)

### H3 Frontend Features to build:
1. Host page
  a. Recipe to make
  b. List of ingredients + checkmarks for what's missing
  c. time slot for when to start cooking meal
2. Guest Page
  a. Can browse through list of hosted meal parties
  b. When looking at one party in particular, can see the meal, ingredietn list, and price to join
  c. Once decided which party to join, can go to checkout page and reduce admission price by ingredient value
  d. Ingredient value is calculated based on market value price (we'll need an api for this) and then they can confirm
  e. This request to join the party will have to be approved by the host

## H2 Backend Technologies
1. Firebase (Google Cloud API)
