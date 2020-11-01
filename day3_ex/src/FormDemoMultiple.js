import React, { useState } from "react";

export function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('submit:)')
  };

  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
          onChange={handleChange}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
                <input
          name="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
                <input
          name="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
                <input
          name="phone"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
                <input
          name="street"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street Name"
        />
                <input
          name="city"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City Name"
        />
                <input
          name="zip"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip"
        />
                <input
          name="country"
          value={reservation.country}
          onChange={handleChange}
          placeholder="country Name"
        />
        
        <p>{JSON.stringify(reservation)}</p>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
}
