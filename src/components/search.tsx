import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Search = () => {
  const [text, setText] = useState("");
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center gap-x-1 px-1 rounded-full border borer-[#D0D5DD] mx-4 my-2 ">
        <AntDesign name="search1" size={20} color="black" />
        <View className="flex-1 shrink text-red-400 ">
          <TextInput
            className=" text-[14px] text-left text-black py-2"
            placeholder="Search for your next collectible"
            value={text}
            onChangeText={setText}
            returnKeyType="search"
          />
        </View>

        {text !== "" ? (
          <Pressable
            onPress={() => {
              setText("");
            }}
            className="bg-[#F9FAFB] border border-[#EAECF0] rounded-full p-0.5 "
          >
            <SimpleLineIcons name="close" size={14} color="black" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Search;
