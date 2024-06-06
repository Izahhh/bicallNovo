import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Padding, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const VerificarAluno = () => {
  return (
    <View style={[styles.verificaraluno, styles.td3FlexBox]}>
      <View style={[styles.rodape, styles.rodapePosition]}>
        <View style={[styles.blocoamarelorodape, styles.rodapePosition]} />
        <View style={[styles.blocoazulbaixo, styles.blocoazulcimaLayout]} />
        <Image
          style={styles.logotipo3Icon}
          contentFit="cover"
          source={require("../assets/imgs/logotipo.png")}
        />
      </View>
      <View style={[styles.banner, styles.bannerPosition]}>
        <View style={[styles.blocoamarelo, styles.blocoamareloPosition]} />
        <Text style={[styles.titulo, styles.tituloTypo]}>CALL</Text>
        <View style={[styles.blocoazulcima, styles.blocoamareloPosition]} />
        <View style={[styles.blocoazulmeio, styles.blocoamareloPosition]} />
        <Image
          style={[styles.logotipo2Icon, styles.bannerPosition]}
          contentFit="cover"
          source={require("../assets/imgs/logotipo.png")}
        />
        <Text style={styles.biometric}>BIOMETRIC</Text>
      </View>
      <Text style={[styles.txtcad, styles.tituloTypo]}>VERIFICAR ALUNO</Text>
      <View style={styles.table}>
        <View style={styles.thead}>
          <View style={[styles.th, styles.thFlexBox]}>
            <Text style={[styles.nome, styles.rmTypo]}>NOME</Text>
          </View>
          <View style={[styles.th1, styles.thFlexBox]}>
            <Text style={[styles.rm, styles.rmTypo]}>RM</Text>
          </View>
          <View style={[styles.th2, styles.thFlexBox]}>
            <Text style={[styles.nome, styles.rmTypo]}>PRESENÇA</Text>
          </View>
        </View>
        <View style={styles.tbody}>
          <View style={[styles.tr, styles.trBorder]}>
            <View style={[styles.td, styles.tdLayout]} />
            <View style={[styles.td1, styles.tdLayout]} />
          </View>
          <View style={[styles.tr1, styles.trBorder]}>
            <View style={[styles.td2, styles.tdLayout]} />
            <View style={[styles.td3, styles.td3FlexBox]} />
            <View style={[styles.td1, styles.tdLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  td3FlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  rodapePosition: {
    width: 367,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoazulcimaLayout: {
    height: 20,
    backgroundColor: Color.colorDeepskyblue,
  },
  bannerPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blocoamareloPosition: {
    marginLeft: -184,
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tituloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  thFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  rmTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  trBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorPowderblue,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorPowderblue,
    overflow: "hidden",
    borderStyle: "solid",
  },
  tdLayout: {
    height: 62,
    overflow: "hidden",
    flex: 1,
  },
  blocoamarelorodape: {
    marginTop: -22.5,
    marginLeft: -183.5,
    height: 65,
    backgroundColor: Color.colorOrange,
  },
  blocoazulbaixo: {
    marginTop: -42.5,
    marginLeft: -181.5,
    width: 360,
    height: 20,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  logotipo3Icon: {
    top: 31,
    left: 14,
    width: 42,
    height: 42,
    position: "absolute",
  },
  rodape: {
    marginTop: 319,
    marginLeft: -180,
    height: 85,
  },
  blocoamarelo: {
    height: 141,
    marginTop: -77,
    marginLeft: -184,
    backgroundColor: Color.colorOrange,
  },
  titulo: {
    marginTop: 3,
    marginLeft: -82,
    fontSize: FontSize.size_5xl,
    letterSpacing: 7.9,
    color: Color.colorSaddlebrown,
    width: 235,
    height: 50,
  },
  blocoazulcima: {
    marginTop: -77,
    marginLeft: -184,
    height: 20,
    backgroundColor: Color.colorDeepskyblue,
  },
  blocoazulmeio: {
    marginTop: 53,
    height: 24,
    marginLeft: -184,
    backgroundColor: Color.colorDeepskyblue,
  },
  logotipo2Icon: {
    marginTop: -43,
    marginLeft: -194,
    width: 133,
    height: 115,
  },
  biometric: {
    marginTop: -49,
    marginLeft: -166,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.baloo,
    color: Color.colorOldlace,
    height: 63,
    textAlign: "center",
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  banner: {
    marginTop: -400,
    marginLeft: -190,
    width: 388,
    height: 154,
  },
  txtcad: {
    marginTop: -200,
    marginLeft: -146,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    width: 299,
  },
  nome: {
    width: 74,
  },
  th: {
    zIndex: 2,
  },
  rm: {
    width: 75,
  },
  th1: {
    zIndex: 1,
  },
  th2: {
    zIndex: 0,
  },
  thead: {
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  td: {
    zIndex: 1,
  },
  td1: {
    zIndex: 0,
  },
  tr: {
    height: 80,
    zIndex: 1,
  },
  td2: {
    zIndex: 2,
  },
  td3: {
    height: 47,
    zIndex: 1,
  },
  tr1: {
    height: 83,
    zIndex: 0,
  },
  tbody: {
    height: 298,
    alignSelf: "stretch",
    backgroundColor: Color.colorPowderblue,
    overflow: "hidden",
  },
  table: {
    top: 238,
    left: 18,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 6,
    borderColor: Color.colorBlack,
    width: 319,
    height: 398,
    backgroundColor: Color.colorPowderblue,
    position: "absolute",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
  },
  verificaraluno: {
    backgroundColor: Color.colorLightblue,
    borderColor: Color.colorOldlace,
    width: "100%",
    height: 800,
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
});

export default VerificarAluno;
