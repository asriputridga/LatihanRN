import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from "./방탄소년단onTwitter.png";
import foto1 from "./💜.jpeg";
import foto2 from "./36a790aa-182a-4e59-8bb3-5864f1711ddd.jpeg";
import foto3 from "./her_.jpeg";
import foto34 from "./assets/foto/러브모드🌿onTwitter.jpeg";
import foto35 from "./assets/foto/SummerPackage2019uploadedby✧Taetata⁷✧.jpeg";
import upload from "./assets/foto/up.png";
import suka from "./assets/foto/love21.png";
import pesan from "./assets/foto/m.png";
import shop from "./assets/foto/shop.png";
import search from "./assets/foto/s.png";
import reels from "./assets/foto/reels.png";
import home from "./assets/foto/h.png";
import psaya from "./assets/foto/profilsaya.jpeg";
import psaya2 from "./assets/foto/profilsaya2.jpeg";
import chim from "./assets/foto/p3.jpeg";
import { style } from "./style";

const App = () => {
  return (
    // <View style={{backgroundColor:'wheat'}}>
    <View style={style.containerig}>
      <Text>
        <Teks />

      </Text>
      {/* <Text>Hello World</Text> */}

      {/* <Text style={style.tulisanku}>Selamat Datang! </Text> */}
      <Story/>
      <StoryText/>
      {/* <Text>
        <Image source={foto34} style={{ width: 100, height: 100, borderRadius: 1000 }}></Image>
        <Photo />
        <Image source={foto34} style={{ width: 100, height: 100 }}></Image>
        <Image source={foto35} style={{ width: 100, height: 100 }}></Image>
        <Image source={foto1} style={{ width: 100, height: 100 }}></Image>
        <Image source={foto2} style={{ width: 100, height: 100 }}></Image>
        <Image source={foto3} style={{ width: 100, height: 100 }}></Image>
      </Text> */}
      {/* <Image source={{ uri: 'https://placeimg.com/100/100/people' }} style={{ width: 100, height: 100,resizeMode: 'repeat' }}></Image> */}
      <Postingan/>
      <Bawah />
    </View>
  );
}

const Teks = () => {
  return (
    <View>
      <Text style={style.instagram}>Instagram                                <Image source={upload} style={style.gambarpanel}></Image> <Image source={suka} style={style.gambarpanel}></Image> <Image source={pesan} style={style.gambarpanel}></Image></Text>
    </View>
  );
}

const Bawah = () => {
  return (
      <Text>            <Image source={home} style={{width:20, height:20, padding:50, margin:50}}></Image>            <Image source={search} style={{width:20, height:20, padding:50, margin:50}}></Image>            <Image source={reels} style={{width:15, height:15, padding:50, margin:50}}></Image>            <Image source={shop} style={{width:15, height:15, padding:50, margin:50}}></Image>            <Image source={psaya} style={{width:25, height:25, padding:50, margin:50}}></Image>
        </Text>
  );
}

const Story =() => {
  return(
    <Text><Image source={psaya} style={{width:80, height:80}}></Image><Image source={psaya} style={{width:80, height:80}}></Image><Image source={chim} style={{width:80, height:80}}></Image><Image source={psaya} style={{width:80, height:80}}></Image>
    </Text>
  );
}

const StoryText =() => {
  return(
    <Text>   Cerita Anda       namu-ssi            nchim                  RM
    </Text>
  );
}

const Postingan = () => {
  return(
    <View>
    <Text style={{marginBottom:15, marginTop:15}}><Image source={psaya} style={{width:25, height:25}}></Image>asriputridga</Text>
    <Image source={foto} style={{width:330, height:250}}></Image>
    <Text style={{padding:5}}><Image source={suka} style={style.gambarpanel}></Image></Text>
    <Text style={{fontWeight:"bold", marginTop:10}}>11.363 suka</Text>
    <Text style={{fontWeight:"bold", marginTop:10}}>asriputridga</Text>
    <Text style={{marginTop:10}}>이 다음 가사 음
뭐라고 쓸까 음
너무 많은 말이 날 돌지만
내 마음 같은 게 하나 없어
그냥 느껴져 해가 뜨고 나면 꼭 달이 뜨듯이
손톱이 자라듯, 겨울이 오면
나무들이 한 올 한 올 옷을 벗듯이
넌 나의 기억을 추억으로 바꿀 사람
사람을 사랑으로 만들 사람
널 알기 전
내 심장은 온통 직선뿐이던 거야
난 그냥 사람, 사람, 사람
넌 나의 모든 모서릴 잠식
나를 사랑, 사랑, 사랑
으로 만들어 만들어
우린 사람, 사람, 사람
저 무수히 많은 직선들 속
내 사랑, 사랑, 사랑
그 위에 살짝 앉음 하트가 돼</Text>
    </View>
  );
}
const Photo = () => {
  return (
    <Image source={foto} style={{ width: 100, height: 100 }}></Image>
  );
}

const Tampilan = () => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
  );
}

class Tulisan extends Component {
  render() {
    return (
      <Text>Tampilan Dari KOmponen Class</Text>
    );
  }
}

class Photoku extends Component {
  render() {
    return (
      <Image source={{ uri: 'https://placeimg.com/100/100/tech/sepia' }} style={{ width: 100, height: 100 }}></Image>
    );
  }
}

// const style=StyleSheet.create({
//   container:{
//     flex:1,
//     padding:10,
//     margin:20,
//   },
//   tulisanku:{
//     marginTop:15,
//     paddingVertical:8,
//     borderWidth:3,
//     fontSize:20
//   }
// })

export default App;