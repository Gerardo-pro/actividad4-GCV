import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Menu from ".app/screen/Menu";
import Articulo from ".app/screen/Articulo";
import Tienda from ".app/screen/Tienda";

export default function App(){
  return(
    <div>
      <Menu />
      <Articulo />
      <Tienda />

    </div>
  );
}