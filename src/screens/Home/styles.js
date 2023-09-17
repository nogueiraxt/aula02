import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#fff'
    },  
    container: {
        padding: 12,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#18181B'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 12
    },
    input: {
        flex: 1,
        height: 40,
        padding: 4,
        backgroundColor: '#3F3F46',
        borderRadius: 8,
        marginTop: 18,
        marginBottom: 18,
    },
    button: {
        backgroundColor: '#60A5FA',
        borderRadius: 8,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%',
    },
    textButton: {
        fontSize: 24,
        height: 28,
        color: '#fff',
    },

    listContainer: {
        marginTop: 18,
    },

    listItem: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#3F3F46',
        paddingBottom: 10
    },

    listItemText: {
        color: "#fff"
    }
})