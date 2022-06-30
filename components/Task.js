import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

    return(
        <View style={style.item}>
            <View style={style.itemLeft}>
                <View style = {style.circular}>
                    <View style = {style.innerCircle}></View>
                </View>
                <Text>{props.text}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        margin: 10

    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    circular: {
        width: 24,
        height: 24,
        backgroundColor: '#000',
        borderRadius: 15,
        marginRight: 15
    }
});

export default Task;