import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Linking, TouchableOpacity } from 'react-native'
import { StyleConstants } from '../../constants/Style.constant'
import { apiGetCall } from '../../services/AppSetting'
import { ColorsConstant } from '../../constants/Colors.constant'
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Questionstext from '../../asstes/component/Questionstext'


export const ReactScreen = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getquestion()
  }, [])
  const getquestion = async () => {
    let url = "questions?order=desc&sort=activity&site=stackoverflow"
    try {
      let result = await apiGetCall(url, '');
      const temp = result.items.filter(item => item.tags.includes('reactjs'))
      setData(temp)
    } catch (error) {
      console.log('error', error)
    }
  };

 

  const openInAppBrowser = async (url) => {
    try {
      await InAppBrowser.open(url, {
        showTitleBar: true,
        toolbarColor: c.btnColor,
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
const s = StyleConstants, c = ColorsConstant, styles = StyleSheet.create({

})