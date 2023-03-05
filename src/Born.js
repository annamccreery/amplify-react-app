import './App.css';
import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import './App.css';

export const Born = () => {
    // Create coins variable and set to empty array
    const [born, updateBorn] = useState([]);

    // Create a varible for loading
    const [loading, updateLoading] = useState(true);
  
    // Define function to all API
    const fetchBorn = async() => {
      updateLoading(true);
      const data = await API.get('cryptoapi', `/born`);
      updateBorn(data.born)
      updateLoading(false)
    };
  
      // Call fetchCoins function when component loads
      useEffect(() => {
        fetchBorn()
      }, [])
  
      return (
        <h2>{born.login}'s account was created on {born.created_at}</h2>
      );
  };