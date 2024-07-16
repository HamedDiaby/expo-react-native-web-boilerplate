import { FC, ReactNode, useMemo, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useTheme, Tab, TabView as TabViewComponent  } from '@rneui/themed';
import { FontsEnum } from "@utils/enums";

interface ITabView {
    tabViewContainerHeight?: number
    contents: {
        title: string
        content: ReactNode
    }[]
}

export const TabView:FC<ITabView> = ({
    tabViewContainerHeight = 50,
    contents
})=> {

    const { theme } = useTheme();

    const [index, setIndex] = useState<number>(0);

    const WIDTH = useMemo(()=> (Dimensions.get('window').width), []);
    const HEIGHT = useMemo(()=> (Dimensions.get('window').height - 500), []);

    const styles = useMemo(()=> (
        StyleSheet.create({
            container: {
                width: '100%', 
                height: 'auto',
            },
            indicatorStyle: {
                backgroundColor: theme.colors.grey3,
                height: 5,
            },
            tabTitle: {
                fontSize: 16,
                color: theme.colors.grey3,
                fontFamily: FontsEnum.AVENIR_NEXT_DEMI
            },
            tabViewContainer: {
                height: tabViewContainerHeight
            }
        })
    ), [theme, tabViewContainerHeight]);

    return (
        <View style={styles.container}>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={styles.indicatorStyle}
                variant="primary"
            >
                {
                    contents.map((content, i)=> (
                        <Tab.Item
                            key={i}
                            title={content.title}
                            titleStyle={styles.tabTitle}
                        />
                    ))
                }
            </Tab>

            <TabViewComponent 
                value={index} 
                onChange={setIndex} 
                animationType="spring"
                containerStyle={styles.tabViewContainer}
            >
                {
                    contents.map((content, i)=> (
                        <TabViewComponent.Item 
                            key={i}
                            style={{ flex: 1 }}
                        >
                            <>
                                {content.content}
                            </>
                        </TabViewComponent.Item>
                    ))
                }
            </TabViewComponent>
        </View>
    )
}