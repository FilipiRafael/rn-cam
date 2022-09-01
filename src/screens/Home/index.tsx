import { SafeAreaView, View, Text, Pressable } from 'react-native';
import styles from './styles';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

export const Home = () => {

    const [type, setType] = useState(CameraType.back);
    const [permission, setPermission] = useState<any>(null);

    const requestCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermission(status === 'granted');
    }

    const toggleCameraType = () => {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    useEffect(() => {
        requestCameraPermission();
    });

    if (permission === null) {
        return <View />;
    }

    if (permission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Camera
                    type={type}
                    style={styles.camera}
                />
                <View style={styles.buttonsWrapper}>
                    <Pressable
                        style={styles.toggleCamType}
                    >

                    </Pressable>
                    <Pressable
                        style={styles.toggleCamType}
                        onPress={toggleCameraType}
                    >
                         <Icon
                            name="zap"
                            color="#000"
                            size={30}
                        />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}