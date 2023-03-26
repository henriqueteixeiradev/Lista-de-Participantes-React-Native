import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: "#fff",
    marginTop: 60,
    fontSize: 24,
    fontWeight: "800",
  },
  eventDate: {
    color: "#c1c1c1",
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42, 
  },
});
