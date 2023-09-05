import { StyleSheet, } from 'react-native'
import { ColorsConstant } from './Colors.constant'
import { fontFamily } from './font'
export const c = ColorsConstant, StyleConstants = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: c.white
    },
    viewStyles: {
        backgroundColor: c.white,
        elevation: 5,
        margin: 2,
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        shadowColor: ColorsConstant.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginBottom:5
    },
    textstyles: {
        color: c.black,
        fontSize: 12,
        fontFamily:fontFamily.regular,
        lineHeight: 18
    },
})