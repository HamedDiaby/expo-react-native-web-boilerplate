import React, { ReactNode } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ColorsEnum } from '@utils/enums';

export interface ScreenWrapperProps {
  /** Contenu principal de l'écran */
  children: ReactNode;
  /** Désactive le padding par défaut (10) */
  noPadding?: boolean;
  /** Padding personnalisé (override le padding par défaut) */
  customPadding?: number;
  /** Banner affiché en haut de l'écran (scroll avec le contenu) */
  banner?: ReactNode;
  /** Banner fixe en haut de l'écran (ne scroll pas) */
  fixedBanner?: ReactNode;
  /** Padding top personnalisé */
  paddingTop?: number;
  /** Composant footer affiché en bas */
  footerComponent?: ReactNode;
  /** Active le ScrollView pour le contenu */
  withScroll?: boolean;
  /** Image de fond pour l'écran */
  imageBg?: ImageSourcePropType;
  /** Style personnalisé pour le container principal */
  style?: ViewStyle;
  /** Props additionnelles pour le ScrollView (si withScroll=true) */
  scrollViewProps?: React.ComponentProps<typeof ScrollView>;
  /** Active le KeyboardAvoidingView */
  keyboardAvoiding?: boolean;
  /** Comportement du KeyboardAvoidingView */
  keyboardBehavior?: 'height' | 'position' | 'padding';
  /** Offset du KeyboardAvoidingView */
  keyboardVerticalOffset?: number;
  /** Style de la StatusBar */
  statusBarStyle?: 'auto' | 'inverted' | 'light' | 'dark';
  /** Styles additionnels pour le SafeAreaView */
  containerStyles?: ViewStyle;
  /** Si true, le fond de l'écran n'a pas de couleur */
  hideColorBg?: boolean;
  /** Padding bottom personnalisé */
  paddingBottom?: number;
}

const DEFAULT_PADDING = 20;
const DEFAULT_PADDING_BOTTOM = 20;

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  noPadding = false,
  customPadding,
  banner,
  fixedBanner,
  paddingTop,
  footerComponent,
  withScroll = false,
  imageBg,
  style,
  scrollViewProps,
  keyboardAvoiding = true,
  keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height',
  keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 25,
  statusBarStyle = 'light',
  containerStyles,
  hideColorBg = false,
  paddingBottom,
}) => {

  // Calcul du padding à appliquer
  const padding = noPadding ? 0 : (customPadding ?? DEFAULT_PADDING);

  // Style du container principal
  const containerStyle: ViewStyle = {
    flex: 1,
    paddingHorizontal: padding,
    paddingTop: paddingTop ?? padding,
    ...style,
  };

  // Style du container de contenu
  const contentContainerStyle: ViewStyle = {
    flex: withScroll ? undefined : 1,
  };

  // Rendu du contenu principal
  const renderContent = () => (
    <View style={contentContainerStyle}>
      {banner && <View style={styles.bannerContainer}>{banner}</View>}
      {children}
    </View>
  );

  // Rendu du contenu avec ou sans scroll
  const renderMainContent = () => {
    if (withScroll) {
      return (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          scrollEventThrottle={16}
          bounces={true}
          alwaysBounceVertical={false}
          {...scrollViewProps}
        >
          {renderContent()}
        </ScrollView>
      );
    }

    return renderContent();
  };

  // Rendu du wrapper principal avec ou sans image de fond
  const renderWrapper = () => {
    const wrapperContent = (
      <SafeAreaView style={[
        styles.safeArea, 
        { backgroundColor: hideColorBg ? ColorsEnum.transparent : ColorsEnum.background },
        containerStyles,
        ]}
        edges={['top', 'left', 'right']}
      >
        <StatusBar style={statusBarStyle} />
        {fixedBanner && (
          <View style={styles.fixedBannerContainer}>{fixedBanner}</View>
        )}
        
        <View style={containerStyle}>
          {renderMainContent()}
        </View>

        {footerComponent && (
          <View 
            style={[styles.footerContainer, { paddingBottom: paddingBottom ?? DEFAULT_PADDING_BOTTOM }]}
          >{footerComponent}</View>
        )}
      </SafeAreaView>
    );

    if (imageBg) {
      return (
        <ImageBackground 
          source={imageBg} 
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          {wrapperContent}
        </ImageBackground>
      );
    }

    return wrapperContent;
  };

  // Rendu final avec ou sans KeyboardAvoidingView
  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={keyboardBehavior}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        {withScroll ? (
          // Si avec scroll, pas de TouchableWithoutFeedback pour éviter l'interférence
          renderWrapper()
        ) : (
          // Si sans scroll, on garde le TouchableWithoutFeedback
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {renderWrapper()}
          </TouchableWithoutFeedback>
        )}
      </KeyboardAvoidingView>
    );
  }

  return renderWrapper();
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  bannerContainer: {
    marginBottom: 16,
  },
  fixedBannerContainer: {
    zIndex: 10,
  },
  footerContainer: {
    paddingHorizontal: DEFAULT_PADDING,
  },
});
