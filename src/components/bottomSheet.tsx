import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ColorsEnum } from "@utils/enums";

export interface BottomSheetRef {
  expand: () => void;
  close: () => void;
}

interface SheetProps extends Partial<BottomSheetModalProps> {
  /** Hauteurs des paliers (en %) ou pixels. Ex: ["25%", "50%", 400] */
  snapPoints?: (string | number)[];
  padding?: number;
  children: React.ReactNode;
}

export const Sheet = forwardRef<BottomSheetRef, SheetProps>(
  ({ 
    snapPoints = ["25%", "50%", "90%"], 
    children, 
    padding = 5,
    ...rest 
  }, ref) => {
    const sheetRef = React.useRef<BottomSheetModal>(null);

    /* -------- expose imperative API vers parent ---------- */
    useImperativeHandle(ref, () => ({
      expand: () => sheetRef.current?.present(),
      close: () => sheetRef.current?.dismiss(),
    }));

    /* -------- Memo backdrop pour clic extérieur ---------- */
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        />
      ),
      []
    );

    const memoSnapPoints = useMemo(() => snapPoints, [snapPoints]);

    // Styles dynamiques basés sur le thème
    const dynamicStyles = useMemo(() => ({
      container: {
        backgroundColor: ColorsEnum.black,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: ColorsEnum.black,
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10,
      },
      content: {
        flex: 1,
        padding: padding,
        backgroundColor: 'transparent',
      },
    }), [padding]);

    return (
      <BottomSheetModal
        ref={sheetRef}
        index={0}
        snapPoints={memoSnapPoints}
        backdropComponent={renderBackdrop}
        backgroundStyle={dynamicStyles.container}
        handleIndicatorStyle={{
          backgroundColor: ColorsEnum.grey3,
          width: 40,
          height: 4,
        }}
        enablePanDownToClose
        {...rest}
      >
        <BottomSheetView style={dynamicStyles.content}>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

Sheet.displayName = "BottomSheet";
