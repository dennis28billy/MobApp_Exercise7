import React from 'react';
import HomeScreen from './component/pages/HomeScreen';
import {ScrollView} from 'react-native';
import Registrasi from './component/pages/Registrasi';
import Userlist from './component/pages/Userlist';
import TambahUser from './component/pages/TambahUser';

const App = () => {
  return (
    <>
      <ScrollView>
        {/* exercise 6 */}
        {/* <Registrasi />
        <Userlist/> */}

        {/* exercise 7 */}
        <TambahUser />
        <HomeScreen />
        
      </ScrollView>
    </>
  );
};

export default App;
