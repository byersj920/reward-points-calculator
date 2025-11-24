import {useEffect, useState } from 'react';
import { getCustomerData } from './getCustomerData';

const DataDisplay = () => {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomerData().then((data) => {
            setCustomers(data.Customers);
            setLoading(false);
            });
        }, []);

    if (loading) return <div>  Getting customer data...please wait!</div>

    
    const calculatePoints = (amount) => {
        let dollarsCounter = 0;
        let pointsEarned = 0;

        while (dollarsCounter < amount){
            if (dollarsCounter >= 50){pointsEarned++}
            if (dollarsCounter >= 100){pointsEarned++}
            dollarsCounter++}

        return pointsEarned
    }

    const calculateMonthlyTotalPoints = (amounts) => {
        let total = 0;
        for (let i = 0; i < amounts.length; i++){
            total += calculatePoints(amounts[i]);
        }
        return total;
    }

    const calculateOverallTotal = (transactions) => {
        let total = 0;
        Object.values(transactions).forEach(monthAmounts => {
            monthAmounts.forEach(amount => {
                total += calculatePoints(amount);
            });
    });
    return total;
}


      return (
  <div>
    <h1>  Customer Point Tracker</h1>
    <div>
      {customers.map(customer => {
        return (
          <div key={customer.customerID}>
            <div><b>  Customer ID Number: </b>{customer.customerID}</div>
            <div><b>  Customer Name: </b>{customer.customerName}</div>

            <div>
              <b>Total Customer Points:</b> <b>{calculateOverallTotal(customer.transactions)}</b>
              <p>-------- Month-by-Month Break Down: -------------</p>
              {Object.entries(customer.transactions).map(([month, amounts]) => (
                <div key={month}>
                  <b>{month}:</b>
                  {amounts.map((amount, index) => (
                    <div key={index}>• ${amount} → {calculatePoints(amount)} points</div>
                  ))}
                  <br />
                  <div>Total Points: {calculateMonthlyTotalPoints(amounts)} points</div>
                  <br />
                </div>
              ))}
            </div>

            <p>-------------------------------------------------------------</p>

          </div>
        );
      })}
    </div>
  </div>
);
}

export default DataDisplay