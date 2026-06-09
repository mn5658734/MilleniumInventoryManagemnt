import { createContext, useContext, useState } from 'react';

const STORAGE_KEY = 'millennium_digital_user';

const AuthContext = createContext(null);

function loadStoredUser() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persistUser(user) {
  if (user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(loadStoredUser);

  const loginAs = (persona) => {
    const user = {
      id: persona.id,
      name: persona.name,
      role: persona.role,
      dept: persona.dept || null,
      modules: persona.modules,
      excludedNavIds: persona.excludedNavIds || [],
    };
    setCurrentUser(user);
    persistUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
    persistUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
