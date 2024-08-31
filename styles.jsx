import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            flex: 1,
            backgroundColor: '#000',
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            color: "#fff",
        },
        main: {
            width: "100%",
            marginBottom: 50,
            flex: 1,
            // flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
        },
        box: {
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        label: {
            color: "#ddd",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 6,
            marginBottom: 10,
        },
        number: {
            color: "#fff",
            fontSize: 43,
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
        },
        button: {
            width: "100%",
            paddingHorizontal: 50,
            paddingVertical: 10,
            textAlign: "center",
            borderRadius: 10,
            color: "#555",
            fontSize: 12,
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: 4,
            backgroundColor: "#fff"
        }
        

    }
)