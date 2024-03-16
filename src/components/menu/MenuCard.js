import React, { useEffect, useState } from "react";
import styles from "./MenuCard.module.css";
import MenuItem from "./MenuItem";

function MenuCard() {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://foodorderapp-abb98-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Fetching mennu error");
      }
      const responseData = await response.json();
      let fetchedMeals = [];
      for (const key in responseData) {
        fetchedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setFetchedMeals(fetchedMeals);
      setIsLoading(false);
    };
    fetchMenu().catch((error) => {
      setIsLoading(false);
      setIsError(error.message)
    } )
    fetchMenu();
  }, []);

  if(isLoading){
    return <p style={{textAlign: 'center', fontSize: '2rem'}}>Loading.....</p>
  }
  if(isError){
    return <p style={{textAlign: 'center', fontSize: '2rem'}}>{isError.message}</p>
  }
  return (
    <div className={styles.menu__card}>
      {fetchedMeals.map((item) => (
        <MenuItem
          id={item.id}
          key={item.id}
          title={item.name}
          price={item.price}
          quantity={item.quantity}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default MenuCard;
