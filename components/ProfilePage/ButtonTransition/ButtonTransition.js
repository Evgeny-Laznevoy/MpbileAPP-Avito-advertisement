import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ButtonTrans = () => {
    return (
        <TouchableOpacity onPress={() => alert("тут будет переход на др. страницу")}>
            <TextInput
                style={styles.textInput}
                editable={false}
                value={'ИЗМЕНИТЬ'}
                pointerEvents="none" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderTopColor: '#C0C0C0',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        color: '#008fb3',
        paddingLeft: 17,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 12,
    }
});

export default ButtonTrans