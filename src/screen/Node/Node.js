import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Linking, TouchableOpacity } from 'react-native'
import { StyleConstants } from '../../constants/Style.constant'
import { apiGetCall } from '../../services/AppSetting'
import { ColorsConstant } from '../../constants/Colors.constant'
import Questionstext from '../../asstes/component/Questionstext'
import InAppBrowser from 'react-native-inappbrowser-reborn'

export const NodeScreen = (props) => {
  const [data, setData] = useState([]);
  const [tageData, setTageData] = useState([]);
  useEffect(() => {
    getquestion()
  }, [])
  const getquestion = async () => {
    let url = "questions?order=desc&sort=activity&site=stackoverflow"
    try {
      let result = await apiGetCall(url, '');
      const temp = result.items.filter(item => item.tags.includes('node.js'))
      // console.log('-----titles', temp[0].title.replace(/[&#39]/g, ''));
      setData(temp)
    } catch (error) {
      console.log('error', error)
    }
  };
  const openInAppBrowser = async (url) => {
    try {
      await InAppBrowser.open(url, {
        showTitleBar: true,
        toolbarColor: ColorsConstant.btnColor,
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        showProgressBar: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const _renderItem = ({ item, index }) => {
    return (
      <Questionstext onPress={() => openInAppBrowser(item.link)} index={index + 1} title={item.title.replace(/[&#39]/g, '')} />
    )
  }
  console.log('---', tageData)
  return (
    <View style={s.container} >
      <FlatList
        data={data}
        contentContainerStyle={{marginTop:10}}
        keyExtractor={item => item.question_id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
      />
      <View style={{ height: 4 }} />
    </View>
  )
}
const s = StyleConstants,  styles = StyleSheet.create({

})