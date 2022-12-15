# Development
## PLEASE NOTE:

I also installed "redux" and "redux-thunk", with:
```
npm install --save redux react-redux
```
```
npm install --save redux-thunk
```
### Link to Deployed Website
If you used the stencil code: `https://existentialmom.github.io/cs1300development`

### Goal and Value of the Application
The goal of this application is to allow users to shop for fruit
based on its price and the seasons it's available, helping
narrow down their shopping decision. They can also
add and remove their fruit selection to a shopping cart which
allows them to see the total price of their picks.

### Usability Principles Considered
The filtering and sorting features were kept at the top,
where a user would expect them. I also tried to use language 
and titles/labels for the buttons in a way that was self-explainatory, 
with a contextualizing title to prime the user for what the app is for.

### Organization of Components
Components are organized by action, with a component corresponding to 
the actions that are at the "product" level (individual fruit) and 
at the cart level (aggregated price of fruit at the bottom) to remove and
add. 

### How Data is Passed Down Through Components
Data is passed in from a json file and the components (changed by productAction and 
cartAction) are called in a Products.js file. Items are displayed by their variable names specified in the 
json (db.json) file containing the fruit data. So, for example, the fruit's price is displayed by 
"{{ product.price }}"

### How the User Triggers State Changes
State changes are triggered when the user calls one of the actions specified in productAction (filter, fetch
or set) or cartActions(add or remove). Both the Basket.js and Product.js files will display
a different state, depending on what actions are taking (since they display the 'filtered' component, rather 
than the whole thing when a change is made on the front end).
