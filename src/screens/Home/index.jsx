import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { BiPlus } from "react-icons/bi";

export function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas</Text>    
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        <BiPlus />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>Item 1</Text>
                </View>
            </View>


            
        </View>
    );
}