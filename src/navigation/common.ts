
export const FadeTransition = ({ current }: any) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
}; 

export const commonScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
  cardStyleInterpolator: FadeTransition,
};
