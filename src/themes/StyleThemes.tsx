import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonTabs: {
        backgroundColor: '#5d43f7',
        color: 'white',
        padding: 15,
        width: 150,
        height: 50,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    contentHeader: {
        padding: 16,
        textAlign: 'center',
    },
    textTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: '#000',
    },
    contentTab: {
        display: 'flex',
        padding: 16,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    buttonTopTapNavigator: {
        backgroundColor: '#5d43f7',
        padding: 16,
        width: 296,
        height: 60,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 15,
    },
    buttonTopText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
});

export default styles;
