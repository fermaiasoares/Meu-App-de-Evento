import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => (
    <>
        <View style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#c6c6c6', fontSize: 20 }}>Ola mundo!</Text>
        </View>
    </>
)

export default App;
