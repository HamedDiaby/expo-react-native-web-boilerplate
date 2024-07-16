import { FC, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { IHome } from "./interfaces";
import { useStyles } from "./useStyles";
import { 
    Button, Checkbox, 
    DatePicker, 
    Icon, Input, Modal, 
    ScreenWrapper, SearchInput, 
    Switch, TabView, Textarea,
} from "@components";
import { useTranslation, useUserSelector } from "@utils/hooks";
import { IconNameEnum, TranslationKeysEnum } from "@utils/enums";

import { useTheme } from '@rneui/themed';

export const Home:FC<IHome> = ()=> {

    const HomeStyles = useStyles();
    const translation = useTranslation();
    const { user } = useUserSelector();
    const { theme } = useTheme();

    const [search, setSearch] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <ScreenWrapper>
            <ScrollView>
                <View style={HomeStyles.container}>
                    <Text style={{color: theme.colors.primary}}
                    >{translation(TranslationKeysEnum.welcome)}</Text>
                    
                    <Button
                        label='primary (sm)'
                        onPress={()=> alert('hello !')}
                        buttonColor='primary'
                        buttonSize='sm'
                    />
                    <Button
                        label="secondary"
                        onPress={()=> alert('hello !')}
                        buttonColor='secondary'
                    />
                    <Button
                        label='success (lg)'
                        onPress={()=> alert('hello !')}
                        buttonColor='success'
                        buttonSize='lg'
                    />
                    <Button
                        label="warning"
                        onPress={()=> alert('hello !')}
                        buttonColor='warning'
                    />
                    <Button
                        label="error"
                        onPress={()=> alert('hello !')}
                        buttonColor='error'
                    />
                    <Button
                        label="disabled"
                        onPress={()=> alert('hello !')}
                        buttonColor='warning'
                        buttonDisabled
                    />
                    <Button
                        label="primary"
                        onPress={()=> alert('hello !')}
                        buttonColor="primary"
                        isLoadingButton
                    />

                    <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}
                    >
                        <Icon iconName={IconNameEnum.home}/>
                        <Icon iconName={IconNameEnum.menu}/>
                        <Icon iconName={IconNameEnum.edit}/>
                        <Icon iconName={IconNameEnum.email}/>
                        <Icon iconName={IconNameEnum.user}/>
                        <Icon iconName={IconNameEnum.lock}/>
                        <Icon iconName={IconNameEnum.left}/>
                        <Icon iconName={IconNameEnum.longRight}/>
                        <Icon iconName={IconNameEnum.phone}/>
                        <Icon iconName={IconNameEnum.trash}/>
                        <Icon iconName={IconNameEnum.heart}/>
                        <Icon iconName={IconNameEnum.close}/>
                        <Icon iconName={IconNameEnum.info}/>
                        <Icon iconName={IconNameEnum.check}/>
                        <Icon iconName={IconNameEnum.notifyOn}/>
                        <Icon iconName={IconNameEnum.notifyOff}/>
                        <Icon iconName={IconNameEnum.search}/>
                        <Icon iconName={IconNameEnum.eye}/>
                        <Icon iconName={IconNameEnum.eyeOff}/>
                        <Icon iconName={IconNameEnum.calendar}/>
                    </View>

                    <Switch 
                        checked={isChecked}
                        onSwitch={()=> setIsChecked(!isChecked)}
                    />

                    <Button
                        label='toggle modal'
                        onPress={()=> setShowModal(!showModal)}
                    />
                    <Modal
                        visible={showModal}
                        onClose={()=> setShowModal(!showModal)}
                        onBackdropPress={()=> setShowModal(!showModal)}
                    >
                        <View>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reiciendis maiores optio omnis quasi nobis officiis laudantium sed quibusdam architecto, nostrum repellat aspernatur minima incidunt corporis corrupti blanditiis quo repellendus.
                            </Text>
                        </View>
                    </Modal>

                    <Checkbox 
                        label="Checkbox label"
                        checked={isChecked}
                        onPress={()=> setIsChecked(!isChecked)}
                    />

                    <Checkbox 
                        isRadio
                        label="Radio Checkbox label"
                        checked={isChecked}
                        onPress={()=> setIsChecked(!isChecked)}
                    />

                    <SearchInput 
                        placeholder="recherche..."
                        search={search}
                        onChange={setSearch}
                    />

                    <Input
                        placeholder="text input"
                        value={search}
                        onChange={setSearch}
                    />

                    <Input
                        inputType='email'
                        placeholder="email input"
                        value={search}
                        onChange={setSearch}
                    />

                    <Input
                        inputType='password'
                        placeholder="password input"
                        value={search}
                        onChange={setSearch}
                        displayPassword={showPassword}
                        toggleDisplayPassword={()=> setShowPassword(!showPassword)}
                    />

                    <Textarea 
                        placeholder="textarea input"
                        value={search}
                        onChange={setSearch}
                    />

                    <DatePicker 
                        onChangeDate={date=> console.log('date==>', date)}                        
                    />

                    <TabView 
                        tabViewContainerHeight={100}
                        contents={[
                            {
                                title: 'tab 1',
                                content: (
                                    <View>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti, ab voluptatem veniam illum consequatur aut, quod dolorum harum in similique dicta! Eveniet at, maxime repudiandae tempora dolore sint reiciendis!
                                        </Text>
                                    </View>
                                )
                            },
                            {
                                title: 'tab 2',
                                content: (
                                    <View>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti, ab voluptatem veniam illum consequatur aut, quod dolorum harum in similique dicta! Eveniet at, maxime repudiandae tempora dolore sint reiciendis!
                                        </Text>
                                    </View>
                                )
                            }
                        ]}
                    />
                </View>
            </ScrollView>
        </ScreenWrapper>
    )
}