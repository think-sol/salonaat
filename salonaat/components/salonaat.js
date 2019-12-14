import React,{Component} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import img1 from './images/1.jpeg';
import {Icon,Header,Card,Text,Input, Divider} from 'react-native-elements';
import Star from 'react-native-star-view';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

class Salonaat extends Component{
  render(){
    return (
      <View style={styles.homearea}>
          <View>
              <Header 
                containerStyle={{backgroundColor:'#282828',height:60,borderBottomWidth:0}}
                
                rightComponent={
                    <View>
                        <Icon type="antdesign" name="up" size={20} color='#a99754' />
                        <Icon type="antdesign" name="down" size={20} color='#a99754' />
                    </View>
                }
                rightContainerStyle={{marginBottom:25,alignItems:"center"}}

                centerComponent={
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Icon type="antdesign" name="left" size={20} color='#a99754' />
                            <Input
                                inputContainerStyle={{borderBottomWidth:0,borderRadius:10,backgroundColor:'#e0dcbd',height:40,width:200,marginLeft:20}}
                                inputStyle={{fontSize:20,marginTop:0,marginBottom:0,marginTop:10}}

                                placeholder='Search'
                                leftIcon={<Icon type="material" name="tune" size={20} color='#a99754' />}

                                rightIcon={<Icon type="entypo" name="location" size={20} color='#a99754' iconStyle={{marginRight:10}} />}
                            />
                    </View>
                    }
                centerContainerStyle={{marginBottom:20,alignItems:'flex-start',flex:5}}

                leftComponent={<Icon type="feather" name="menu" size={30} color='#a99754' />}
                leftContainerStyle={{marginBottom:25}}   
              />
          </View>

          <ScrollView  showsVerticalScrollIndicator={false} style={styles.body} contentContainerStyle={{justifyContent:'center'}}>

          <FlatList
                data={[
                    {name:'Reflection Hair and Beauty',type:'Salon/Female',menu:'Hair,body,facial,Cosmetics',location:'Dubai',distance:'16.6 km'},
                    {name:'Reflection Hair and Beauty',type:'Salon/Female',menu:'Hair,body,facial,Cosmetics',location:'Dubai',distance:'16.6 km'},
                    {name:'Reflection Hair and Beauty',type:'Salon/Female',menu:'Hair,body,facial,Cosmetics',location:'Dubai',distance:'16.6 km'},
                    {name:'Reflection Hair and Beauty',type:'Salon/Female',menu:'Hair,body,facial,Cosmetics',location:'Dubai',distance:'16.6 km'},
                    {name:'Reflection Hair and Beauty',type:'Salon/Female',menu:'Hair,body,facial,Cosmetics',location:'Dubai',distance:'16.6 km'},
                    {name:'Reflection Hair and Beauty',type:'Salon/Female',menu:'Hair,body,facial,Cosmetics',location:'Dubai',distance:'16.6 km'},
                ]}
                renderItem={({ item }) => 
                    <>
                        <View style={{display:'flex',flexDirection:'row',marginTop:5,width:wp('100%'),paddingLeft:5}}>
                            <View><Image source={img1} style={{width:wp('30%'),height:120}} /></View>
                            <View style={{paddingLeft:10,width:wp('68%')}}>
                                <Text style={{color:'white',fontSize:18}}>{item.name}</Text>
                                <Text style={{color:'white',fontSize:10,marginTop:5}}>{item.type}</Text>
                                <Text style={{color:'white',fontSize:10}}>{item.menu}</Text>
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:5}}>
                                    <Star score={5} style={{color:'#a99754'}}/>
                                    <Text style={{color:'#a99754',fontSize:15,marginLeft:5}}>Reviews</Text>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:5}}>
                                    <Icon type="materialIcons" name="location-on" color="white" size={20} />
                                    <Text style={{color:'white',marginLeft:5}}>{item.location}</Text>
                                    <Text style={{color:'#a99754',marginLeft:5}}>({item.distance})</Text>
                                </View>
                            </View>
                        </View>

                        <Divider style={{marginTop:5}} />
                    </>
            
            }
            />
          
          
          
          
          </ScrollView>

    </View>
)                       
   
  
}

}

const styles = StyleSheet.create({
  homearea:{
    flex:1
  }
})

export default Salonaat;

