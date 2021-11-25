import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet, Button } from "react-native";
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
import feed from "./assets/foto/feed.webp";
import igtv from "./assets/foto/igtv.png";
import tag from "./assets/foto/tag.png";
import garis3 from "./assets/foto/garis3.png";
import { style } from "./style_profil";

const App = () => {
  return (
    <View style={style.container}>
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ flex: 6, borderColor: 'white', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight:'bold' }}>asriputridga</Text>
        </View>
        <TampilanMenu simbol={upload} />
        <TampilanMenu simbol={garis3} />
      </View>
      <View style={{ flex: 2, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={style.viewGambar}>
          <Image source={psaya} style={{ width: 80, height: 80, borderRadius: 80 / 2 }}></Image>
        </View>
        <CardProfil angka="100" keterangan="Postingan" />
        <CardProfil angka="1.050" keterangan="Pengikut" />
        <CardProfil angka="1" keterangan="Mengikuti" />
      </View>
      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20 }}>Asri Putri Dwi Gita</Text>
        <Text style={{fontSize: 15}}>Part of:</Text>
        <Text style={style.textBio}>@RapMons</Text>
        <Text style={style.textBio}>@fanbaseRM</Text>
        <Text style={style.textBio}>@namu-ssi</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ flex: 7, borderRightColor: 'white',marginRight:5 }}>
          <Button title="Edit Profil" style={{borderRadius:5}}></Button>
        </View>
        <View style={{ flex: 1, borderRightColor: 'white'}}>
          <Button title="v"></Button>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: 'white', flexDirection:'row' }}>
        <Sorotan gambar={foto35} keterangan="💜"/>
        <Sorotan gambar={foto2} keterangan="JOonie-speech"/>
        <View style={{ flex: 1, borderColor: 'white' }}></View>
        <View style={{ flex: 1, borderColor: 'white' }}></View>
        {/* <Sorotan gambar={foto3} keterangan=""/>
        <Sorotan gambar={foto3} keterangan=""/> */}
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
        {/* <NavBawah nav={feed} />
        <NavBawah nav={igtv} />
        <NavBawah nav={tag} /> */}
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={feed} style={{ height: 35, width: 35 }}></Image>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={igtv} style={{ height: 25, width: 25 }}></Image>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={tag} style={{ height: 30, width: 30 }}></Image>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: 'white', flexDirection: 'row' }}>
        <Feed ffeed={foto} />
        <Feed ffeed={foto3} />
        <Feed ffeed={foto34} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
        <NavBawah nav={home} />
        <NavBawah nav={search} />
        <NavBawah nav={reels} />
        <NavBawah nav={shop} />
        <NavBawahProfil nav={psaya} />
      </View>
    </View>
  );
}

const TampilanMenu = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.simbol} style={style.gambar}></Image>
    </View>
  )
}

const CardProfil = (props) => {
  return (
    <View style={style.viewGambar}>
      <Text style={style.textProfil}>{props.angka}</Text>
      <Text style={style.keteranganProfil}>{props.keterangan}</Text>
    </View>
  )
}

const Sorotan = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.gambar} style={style.gambarProfil}></Image>
      <Text>{props.keterangan}</Text>
    </View>
  )
}

const Feed = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={props.ffeed} style={{ height: 110, width: 110, margin: 5 }}></Image>
    </View>
  )
}

const NavBawah = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={props.nav} style={{ height: 25, width: 25 }}></Image>
    </View>
  )
}
const NavBawahProfil = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={props.nav} style={{ height: 35, width: 35, borderRadius: 35 / 2 }}></Image>
    </View>
  )
}
export default App;