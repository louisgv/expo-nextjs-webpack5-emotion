import { ActivityIndicator, View, Text } from "react-native"

import styled from "@emotion/native"
import { useState } from "react"

const Box = styled.Pressable`
  width: 100px;
  height: 100px;
`

const RedBox = styled(Box)`
  background-color: rgba(255, 0, 0, 0.5);
`

const GreenBox = styled(Box)`
  background-color: rgba(0, 160, 0, 0.5);
`

const PurpleBox = styled(Box)`
  background-color: rgba(255, 0, 255, 0.5);
`

export default function IndexPage() {
  const [pressedBox, setPressedBox] = useState("NONE")

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Box pressed: {pressedBox}</Text>
      <ActivityIndicator />
      <RedBox onPress={() => setPressedBox("RED")}>
        <Text>Red</Text>
      </RedBox>
      <GreenBox onPress={() => setPressedBox("GREEN")}>
        <Text>Green</Text>
      </GreenBox>
      <PurpleBox onPress={() => setPressedBox("PURPLE")}>
        <Text>Purple</Text>
      </PurpleBox>
    </View>
  )
}
