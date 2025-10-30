import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Role = 'driver' | 'passenger' | null;

interface UserRoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

const ROLE_STORAGE_KEY = '@waylink_user_role';

export function UserRoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRole();
  }, []);

  const loadRole = async () => {
    try {
      const savedRole = await AsyncStorage.getItem(ROLE_STORAGE_KEY);
      if (savedRole) {
        setRoleState(savedRole as Role);
      }
    } catch (error) {
      console.error('Error loading role:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setRole = async (newRole: Role) => {
    try {
      if (newRole === null) {
        await AsyncStorage.removeItem(ROLE_STORAGE_KEY);
      } else {
        await AsyncStorage.setItem(ROLE_STORAGE_KEY, newRole);
      }
      setRoleState(newRole);
    } catch (error) {
      console.error('Error saving role:', error);
    }
  };

  if (isLoading) {
    return null; // or return a loading spinner
  }

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

export function useUserRole() {
  const context = useContext(UserRoleContext);
  if (context === undefined) {
    throw new Error('useUserRole must be used within a UserRoleProvider');
  }
  return context;
}