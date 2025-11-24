# Reward Points Calculator

Hello! The purpose of this app is to take customer transaction history and calculate how many reward points they should earn based on the money the spent for each month.

## Project Rundown

The main app function can be found under the DataDisplay.js file. This handles fetching data, calculating points, as well as displaying the results onto the UI.
It can be found in src/components. (As well as the other files I created for this project.)

### `The Data Being Fetched`

Because I am not actually fetching any data from a real database, I created a custom JSON file with some dummy data. This JSON data is labeled CustomerData.json. Each entry includes three fields:
1) Customer ID
2) Customer's Name
3) Transactions made over the past 3 months

Notably, the second customer has a single transaction of $120 in the month of March to make sure the reward point calculator is functioning correctly.

### `Simulated API Call`

To fetch the dummy data, I created a sample API calling function called getCustomerData.js. Instead of getting the data from a backend, it pulls the data from the CustomerData.json file.
(It also has a timeout function to emulate the 'loading' of that data.)

### `Go...Fetch!`

In the actual app itself (DataDisplay.js), the data is fetched using a 'useEffect' function. By initializing a state variable for the customer data, I can use the getCustomerData function to fetch the json data over as a variable.
Once fetched, the site stops 'loading' and displays the fetched data in the returned html.

### `Point Calculator...?`

Lastly, once the data is loaded, there are 3 different functions that the html utilizes to calculate the amount of points each amount of money earns.
1) calculatePoints(amount): Returns how many points an amount of money is worth.
2) calculateMonthlyTotalPoints(amounts): Returns the total amount of points that user has earned for that month based on each transaction amount for that month.
3) calculateOverallTotal(transactions): Returns the total amount of points a customer has from all months combined.
