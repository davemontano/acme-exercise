# ioet-acme

## About this project

The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day, according to the following table:

Monday - Friday

00:01 - 09:00 25 USD

09:01 - 18:00 15 USD

18:01 - 00:00 20 USD

Saturday and Sunday

00:01 - 09:00 30 USD

09:01 - 18:00 20 USD

18:01 - 00:00 25 USD

The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked. The following abbreviations will be used for entering data:

MO: Monday

TU: Tuesday

WE: Wednesday

TH: Thursday

FR: Friday

SA: Saturday

SU: Sunday

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our two examples below.

Output: indicate how much the employee has to be paid

For example:

Case 1:

INPUT

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00

OUTPUT:

The amount to pay RENE is: 215 USD

Case 2:

INPUT

ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:

The amount to pay ASTRID is: 85 USD
## Solution
The structure of the project is simple and extensible, is organized by features. All the logic to calculate the payment of each employee is store inside of `payments.js` and there are functions that atomizes each step of the calculation. All the utilitary functions that helps to parse the input data and stuff are inside of `utils.js` and each are divided by tasks. All the stuff related to the different rates based on the day of the week or the hour are inside of `constants` folder and `fees.js` file, this approach permits the modification and extension of the rates without modifying the logic of the app.

The calculation of the payments is based on the interval on the hours established on the `fees.js` file, so it iterates through the fees comparing the start hour and end hour and multiplying by the correspondant fee.

## Prerequisites
* Node.js version 16.18.0

## Setup

1. Clone this repo

## Run

From the command line run:
```
> npm install
> npm start
```

### Testing
The application uses Jest as testing runner and library.
```
> npm test
```

