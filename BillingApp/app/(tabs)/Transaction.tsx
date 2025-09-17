import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
// import Component from "../assets/" // Uncomment and fix this import if you have a component or image

const Transaction = () => {
  const params = useLocalSearchParams();
  const username = params.username || "Merchant";
  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <View style={[styles.child, styles.childPosition]} />
        {/* <Image style={[styles.depth4Frame1, styles.depth4FramePosition]} resizeMode="cover" /> */}
        <Text style={styles.harshalThakare}>{username}</Text>
        <View style={styles.item} />
        <Text style={styles.quickLinks}>Quick Links</Text>
        {/* <Component style={[styles.depth4Frame0, styles.depth4FramePosition]} width={24} height={24} /> */}
        <View style={[styles.inner, styles.innerLayout]} />
        <View style={[styles.rectangleView, styles.innerLayout]} />
        <Text style={[styles.transactionDetails, styles.detailsTypo]}>{`Transaction Details `}</Text>
        <Text style={[styles.partyDetails, styles.detailsTypo]}>{`Party Details `}</Text>
        {/* <Image style={[styles.rectangleIcon, styles.childLayout1]} resizeMode="cover" />
        <Image style={[styles.transactionChild, styles.childLayout1]} resizeMode="cover" />
        <Image style={[styles.child2, styles.childLayout1]} resizeMode="cover" />
        <Image style={[styles.child3, styles.childLayout1]} resizeMode="cover" /> */}
        <Text style={[styles.addTxn, styles.txnClr]}>Add Txn</Text>
        <Text style={[styles.saleReport, styles.txnClr]}>Sale Report</Text>
        <Text style={[styles.txnSettings, styles.txnClr]}>Txn Settings</Text>
        <Text style={[styles.showAll, styles.txnClr]}>Show All</Text>
        <View style={[styles.child4, styles.childPosition]} />
        {/* <Image style={[styles.child5, styles.childLayout]} resizeMode="cover" />
        <Image style={[styles.child6, styles.childLayout]} resizeMode="cover" />
        <Image style={[styles.child7, styles.childLayout]} resizeMode="cover" />
        <Image style={styles.child8} resizeMode="cover" /> */}
        <Text style={[styles.home, styles.homeTypo]}>HOME</Text>
        <Text style={[styles.dashboard, styles.child9Position]}>DASHBOARD</Text>
        <Text style={[styles.items, styles.homeTypo]}>ITEMS</Text>
        <Text style={[styles.menu, styles.homeTypo]}>MENU</Text>
        <View style={[styles.child9, styles.child9Position]} />
        <Text style={[styles.addNewSale, styles.homeTypo]}>Add New Sale</Text>
      </View>
    </SafeAreaView>
  );
};

// ...styles unchanged, paste your styles here ...

const styles = StyleSheet.create({
  transaction: {
    flex: 1,
    backgroundColor: "#d3e4f4"
  },
  viewBg: {
    backgroundColor: "#d3e4f4",
    flex: 1
  },
  childPosition: {
    width: 412,
    left: 0,
    backgroundColor: "#fff",
    position: "absolute"
  },
  depth4FramePosition: {
    opacity: 0.8,
    position: "absolute"
  },
  innerLayout: {
    height: 40,
    width: 175,
    borderWidth: 3,
    borderStyle: "solid",
    top: 85,
    borderRadius: 30,
    position: "absolute"
  },
  detailsTypo: {
    fontSize: 13,
    top: 97,
    textAlign: "left",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute"
  },
  childLayout1: {
    width: 50,
    top: 209,
    height: 50,
    position: "absolute"
  },
  txnClr: {
    opacity: 0.7,
    color: "#000"
  },
  childLayout: {
    width: 40,
    top: 850,
    height: 40,
    position: "absolute"
  },
  homeTypo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 18,
    fontSize: 15,
    textAlign: "left"
  },
  child9Position: {
    left: 118,
    position: "absolute"
  },
  view: {
    width: "100%",
    height: 917,
    overflow: "hidden"
  },
  child: {
    top: 0,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 145
  },
  depth4Frame1: {
    top: 11,
    left: 361,
    borderRadius: 12,
    width: 29,
    maxWidth: 480,
    height: 50,
    opacity: 0.8
  },
  harshalThakare: {
    top: 21,
    left: 60,
    fontSize: 22,
    textAlign: "left",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    color: "#000",
    position: "absolute"
  },
  item: {
    top: 162,
    left: 16,
    borderRadius: 10,
    width: 381,
    height: 144,
    backgroundColor: "#fff",
    position: "absolute"
  },
  quickLinks: {
    top: 173,
    left: 23,
    fontSize: 15,
    textAlign: "left",
    color: "#000",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute"
  },
  depth4Frame0: {
    top: 24,
    left: 322,
    width: 24,
    height: 24
  },
  inner: {
    left: 31,
    backgroundColor: "rgba(201, 35, 35, 0.2)",
    borderColor: "#c92323"
  },
  rectangleView: {
    left: 215,
    borderColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff"
  },
  transactionDetails: {
    left: 59,
    color: "#c92323"
  },
  partyDetails: {
    left: 263,
    opacity: 0.5,
    color: "#000",
    top: 97
  },
  rectangleIcon: {
    left: 47
  },
  transactionChild: {
    left: 139
  },
  child2: {
    left: 235
  },
  child3: {
    left: 317
  },
  addTxn: {
    top: 264,
    opacity: 0.7,
    fontSize: 13,
    textAlign: "left",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute",
    left: 47
  },
  saleReport: {
    left: 125,
    top: 264,
    opacity: 0.7,
    fontSize: 13,
    textAlign: "left",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute"
  },
  txnSettings: {
    left: 222,
    top: 264,
    opacity: 0.7,
    fontSize: 13,
    textAlign: "left",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute"
  },
  showAll: {
    top: 264,
    opacity: 0.7,
    fontSize: 13,
    textAlign: "left",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    position: "absolute",
    left: 317
  },
  child4: {
    top: 836,
    height: 81
  },
  child5: {
    left: 38
  },
  child6: {
    left: 146
  },
  child7: {
    left: 256
  },
  child8: {
    top: 852,
    left: 343,
    width: 31,
    height: 30,
    position: "absolute"
  },
  home: {
    left: 36,
    color: "#2576e0",
    top: 891,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute"
  },
  dashboard: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 18,
    fontSize: 15,
    textAlign: "left",
    top: 891,
    opacity: 0.7,
    color: "#000"
  },
  items: {
    left: 252,
    top: 891,
    fontWeight: "600",
    lineHeight: 18,
    opacity: 0.7,
    color: "#000",
    position: "absolute"
  },
  menu: {
    left: 336,
    top: 891,
    fontWeight: "600",
    lineHeight: 18,
    opacity: 0.7,
    color: "#000",
    position: "absolute"
  },
  child9: {
    top: 771,
    backgroundColor: "#c92323",
    width: 196,
    height: 59,
    borderRadius: 30,
    left: 118
  },
  addNewSale: {
    top: 792,
    left: 162,
    color: "#fff",
    position: "absolute"
  }
});

export default Transaction;
