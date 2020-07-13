import React from 'react';
import { StyleSheet, View, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const Header = () => {
    const [value, onChangeText] = React.useState('Search or start new chat');

    return (
        <View style={styles.viewHeader}>
            <View style={styles.section}>
                <Image
                    style={styles.profilePicture}
                    source={{
                        uri: 'http://angular-material.fusetheme.com/assets/images/avatars/Velazquez.jpg',
                    }} />
                <Icon style={styles.btnSettings} name="more-vert" size={30} color="black" onPress={() => Alert.alert('Cannot press this one')} />
            </View>
            <View style={styles.searchSection}>
                <Icon name="search" size={30} color="gray" />
                <TextInput
                    style={styles.search}
                    value={value}
                    onChangeText={text => onChangeText(text)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader: {
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: '22%',
        display: 'flex'
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 16,
        marginEnd: 6,
        marginLeft: 16
    },
    search: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fafafa',
        color: '#424242',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        color: 'rgba(0,0,0,.87)',
        borderColor: 'rgba(0,0,0,.12)',
        borderWidth: 1,
        marginTop: 16,
        marginEnd: 16,
        marginLeft: 18,
        marginRight: 18,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row'
    },
    btnSettings: {
        margin: 16,
        flexDirection: 'row',
        marginLeft: 'auto',
        textAlignVertical: 'center'
    }
});

export { Header };
