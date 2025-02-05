import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedStoresContext = createContext();

export const SavedStoresProvider = ({ children }) => {
  const [savedStores, setSavedStores] = useState(() => {
    const saved = localStorage.getItem('savedStores');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedStores', JSON.stringify(savedStores));
  }, [savedStores]);

  const toggleSavedStore = (restaurantId) => {
    setSavedStores(prev => {
      if (prev.includes(restaurantId)) {
        return prev.filter(id => id !== restaurantId);
      }
      return [...prev, restaurantId];
    });
  };

  const isStoreSaved = (restaurantId) => {
    return savedStores.includes(restaurantId);
  };

  return (
    <SavedStoresContext.Provider value={{ savedStores, toggleSavedStore, isStoreSaved }}>
      {children}
    </SavedStoresContext.Provider>
  );
};

export const useSavedStores = () => useContext(SavedStoresContext); 