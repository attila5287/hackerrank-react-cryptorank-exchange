# CryptoRank Exchange

|--|--|
|--|--|
|see live version on vercel:|[link to deployed app](https://hackerrank-react-cryptorank-exchang.vercel.app/)|
|solution1| [markdown file](./solution1.md  ) |
|solution2| [markdown file](./solution2.md  ) |
|solution3| [markdown file](./solution3.md  ) |


Develop a React application called "CryptoRank Exchange" to estimate the number of cryptocurrency coins a user can receive based on an entered amount of fiat currency. The application requirements are detailed below, and the finished application must pass all unit tests.

![screenshot](./public/sample-app.gif)


Detailed Requirements


1. Fields and Display:

    Input Field: Allows entry of the amount to be exchanged.
    Table: Displays "Exchange Rate" and "Number of Coins" for each cryptocurrency.



| 2. User Interactions: |- |
|--|--|
|Users input an amount within their available balance.|-|
|Amount is mandatory, ranging from $0.01 to the available balance.|*|
|If invalid, show an error message.||
|By default, the input field is empty with no error message and "Number of Coins" as 0.00000000.||
|Table updates dynamically as the amount is modified.||


|3. Conversion Calculation|--|
|--|--|
|"Number of Coins" = (Amount * Exchange Rate), rounded to 8 decimal places.|--|
|Invalid amounts display "n/a" in the "Number of Coins" column.|--|

|. Error Message|--|
|--|--|
|Empty input: "Amount cannot be empty". Amount <0.01 ".|==|
|Amount > available balance: "Amount cannot exceed the available balance".|==|



#Sample Interaction

Initial State
The input field is empty with no error messages.
The "Number of Coins" column displays "0.00000000" for each cryptocurrency.

User Action 1
The user enters "100" into the input field.
The table updates dynamically to display the number of coins based on the exchange rates for each cryptocurrency.

User Action 2
The user enters an amount greater than the available balance (e.g., "10000").
An error message "Amount cannot exceed the available balance" is displayed.
The "Number of Coins" column displays "n/a".

User Action 3
The user clears the input field.
The error message "Amount cannot be empty" is displayed, and the "Number of Coins" column displays "0.00000000".
