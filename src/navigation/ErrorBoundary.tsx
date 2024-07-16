import { useState, ReactNode, useEffect, FC } from 'react';
import { Text } from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (hasError) {
      // Here, you can log the error to an error reporting service
      console.log('===hasError==>', hasError);
    }
  }, [hasError]);

  return (
    <>
      {hasError ? <Text>Something went wrong.</Text> : children}
    </>
  );
}
