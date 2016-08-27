/**
 * Created by rotem on 25/08/2016.
 */
import React, {Component , PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});


export default class Button extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        const { pressAction , text } = this.props;
     return(
         <View style={styles.button}>
             <TouchableOpacity onPress={pressAction}>
                 <Text>{text}</Text>
            </TouchableOpacity>
         </View>
     )
    }
}

//Button.propTypes = {
//    text:PropTypes.string.isRequired,
//    pressAction:PropTypes.func.isRequired
//}
