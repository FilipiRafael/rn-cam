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
        height: Dimensions.get('screen').height - 120,
        borderRadius: 50
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingHorizontal: 20
    },
    toggleCamType: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});