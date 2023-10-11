import { Stack } from "expo-router";
import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function _layout() {
  return (
    <>
      <ActionSheetProvider>
        <Stack>
        </Stack>
      </ActionSheetProvider>
    </>
  );
}
