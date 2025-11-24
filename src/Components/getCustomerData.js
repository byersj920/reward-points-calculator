import CustomerData from "../Components/CustomerData.json";

export function getCustomerData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CustomerData);
    }, 1200);
  });
}