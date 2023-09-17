import React from "react";
import { ImageBackground, Text } from "react-native";

import styles from "./style";
import capa from "../../assets/capa.jpg";

export default function TelaHome () {
   return(
      <ImageBackground
         style={styles.container}
         blurRadius={5}
         source={ capa }
         >
            <Text style={styles.title}>Adega Preferida</Text>
            <Text style={styles.subtitle}>Aqui você encontra os melhores e mais saborosos vinhos</Text>

      </ImageBackground>
   )
};