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
import mang from "./assets/foto/p3.png";
import cookie from "./assets/foto/p2.png";
import { style } from "./style";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'grey', margin:5 }}>
      <View style={{ flex: 1, backgroundColor: 'grey', flexDirection: 'row' }}>
        <View style={{ flex: 5, backgroundColor: 'white', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Instagram</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={upload} style={{ width: 28, height: 28 }}></Image>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={suka} style={{ width: 28, height: 28 }}></Image>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={pesan} style={{ width: 28, height: 28 }}></Image>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
          <Image source={psaya} style={{ width: 65, height: 65, borderRadius: 65 / 2 }}></Image>
          <Text>Ceita Saya</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
          <Image source={chim} style={{ width: 65, height: 65, borderRadius: 65 / 2 }}></Image>
          <Text>Ceita Saya</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
          <Image source={mang} style={{ width: 65, height: 65, borderRadius: 65 / 2 }}></Image>
          <Text>Ceita Saya</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
          <Image source={cookie} style={{ width: 65, height: 65, borderRadius: 65 / 2 }}></Image>
          <Text>Ceita Saya</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'grey', flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'white', alignItems:'center' }}>
          <Image source={psaya} style={{height:45, width:45, borderRadius:45/2}}></Image>
        </View>
        <View style={{ flex: 5, backgroundColor: 'white'}}>
          <Text style={{fontSize:18, marginLeft:5, marginTop:10}}>asriputridga</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {/* <Image></Image> */}
        </View>
      </View>
      <View style={{ flex: 5, backgroundColor: 'white',alignItems:'center',justifyContent:'center' }}>
        <Image source={foto} style={{ width: 350, height: 270}}></Image>
      </View>
      <View style={{ flex: 1, backgroundColor: 'grey' }}>

      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }}></View>
      <View style={{ flex: 1, backgroundColor: 'grey' }}></View>
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
    <Text>            <Image source={home} style={{ width: 20, height: 20, padding: 50, margin: 50 }}></Image>            <Image source={search} style={{ width: 20, height: 20, padding: 50, margin: 50 }}></Image>            <Image source={reels} style={{ width: 15, height: 15, padding: 50, margin: 50 }}></Image>            <Image source={shop} style={{ width: 15, height: 15, padding: 50, margin: 50 }}></Image>            <Image source={psaya} style={{ width: 25, height: 25, padding: 50, margin: 50 }}></Image>
    </Text>
  );
}

const Story = () => {
  return (
    <Text><Image source={psaya} style={{ width: 80, height: 80 }}></Image><Image source={psaya} style={{ width: 80, height: 80 }}></Image><Image source={chim} style={{ width: 80, height: 80 }}></Image><Image source={psaya} style={{ width: 80, height: 80 }}></Image>
    </Text>
  );
}

const StoryText = () => {
  return (
    <Text>   Cerita Anda       namu-ssi            nchim                  RM
    </Text>
  );
}

const Postingan = () => {
  return (
    <View>
      <Text style={{ marginBottom: 15, marginTop: 15 }}><Image source={psaya} style={{ width: 25, height: 25 }}></Image>asriputridga</Text>
      <Image source={foto} style={{ width: 330, height: 250 }}></Image>
      <Text style={{ padding: 5 }}><Image source={suka} style={style.gambarpanel}></Image></Text>
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>11.363 suka</Text>
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>asriputridga</Text>
      <Text style={{ marginTop: 10 }}>이 다음 가사 음
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

export default App;