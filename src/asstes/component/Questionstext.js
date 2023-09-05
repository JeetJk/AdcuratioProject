import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StyleConstants } from "../../constants/Style.constant";
import { fontFamily } from "../../constants/font";

export default function Questionstext(props) {
    const { index, title, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}  style={s.viewStyles} >
            <Text style={s.textstyles} > <Text style={{ fontFamily: fontFamily.medium, }} >Q{index}</Text> {title}</Text>
        </TouchableOpacity>
    )
}
const s = StyleConstants, styles = StyleSheet.create({

})