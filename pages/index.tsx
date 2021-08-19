import { ActivityIndicator, View, Text } from "react-native"

import styled from "@emotion/native"

const Button = styled.Pressable`
  background-color: #ff0000;
  width: 100px;
  height: 100px;
`

const Test = styled(Button)`
  background-color: purple;
`

export default function IndexPage() {
  return (
    <View>
      <Text>Hello, World!</Text>
      <ActivityIndicator />
      <Button>
        <Text>Button</Text>
      </Button>
      <Test>
        <Text>Test</Text>
      </Test>
    </View>
  )
}
