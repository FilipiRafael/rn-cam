import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#8b21ed',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    camera: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height - 100,
        borderRadius: 50
    }
});