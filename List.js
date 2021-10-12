/*
Spendylove owusu
ITN 263
Shopping List
*/




import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = (props) => {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
            <Text style={styles.itemText}>{props.text}</Text>
            
        </View>
        </View>
    )
}

const styles = StyleSheet.create ({

    items:{

        backgroundColor:'#a9a9a9',
        padding:16,
        borderRadius:10,
        fontSize:60,
    },
    itemLeft:{
        padding:15,
        backgroundColor:'#adff2f',


    },
    itemText:{
        

    }

});



export default List;
